const { Spot } = require("../models");
const { User } = require("../models");
const { Op } = require('sequelize');

module.exports = {
    async index(req, res) {
      const { tech } = req.query;
      if (tech == null) {
        Spot.findAll().then(result => res.json(result));
      } else {
        Spot.findAll({
          where: {
            techs:  { [Op.like]:  `%${tech}%` }
          }
        }).then(result => {
          if(result.length == 0) {
            return res.status(400).json({ error: "Couldnt find any Spot."});
          }
          return res.json(result)
        } );
      }
    },

    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } =  req.headers;

        const user = await User.count({ where: { id: user_id } })
        .then(count => {
          return (count > 0) ? true : false
        });

        if(!user) {
          return res.status(400).json({ error: "User does not exists"});
        }

        Spot.findOrCreate({
            where: {
              company
            },
            defaults: {
              user: user_id,
              thumbnail: filename,
              techs: techs.split(',').map(tech => tech.trim()),
              company,
              price,
            }
          }).then(function(result) {
            var spot = result[0],
            created = result[1];
            if (!created) {
              console.log("Spot already exists");
              return res.json({ message: "Spot já existe", spot });
            }

            console.log("Spot Created ...");
            return res.json(spot);
          
        });
    },

}
    
