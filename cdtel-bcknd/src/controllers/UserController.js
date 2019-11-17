const { User } = require("../models");

module.exports = {
  store(req, res) {
    const { name } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { isCompany } = req.body;

    User.findOrCreate({
      where: {
        email
      },
      defaults: {
        email,
        name,
        password,
        isCompany
      }
    }).then(function(result) {
      var user = result[0],
        created = result[1];

      if (!created) {
        console.log("User already exists");
        return res.json({ message: "Utilizador já existe" });
      }

      console.log("Criando User...");
      return res.json(req.body);
    });

    // await User.create({
    //     name: name,
    //     email: email,
    //     password: password
    // });

    // return res.json(req.body);
  },

  show(req, res) {
    if (req.params.id == null) {
      User.findAll().then(result => res.json(result));
    } else {
      User.findByPk(req.params.id).then(result => res.json(result));
      // Comentário.
    }
  },

  remove(req, res) {
    // console.log(req.params.id);
    // const { id } = req.params.id;

    User.destroy({
      where: {
        id: req.params.id
      }
    }).then(result => {
      if (result == 1) {
        return res.json({
          status: "1",
          message: "Sucesso em apagar o id " + req.params.id
        });
      } else {
        return res.json({
          status: "0",
          message: "Erro em apagar o id " + req.params.id
        });
      }
    });
  },

  update(req, res) {
    User.update(
      {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(result => {
      if (result == 1) {
        return res.json({
          status: "1",
          message: "Sucesso em alterar o id " + req.params.id
        });
      } else {
        return res.json({
          status: "0",
          message: "Erro em alterar o id " + req.params.id
        });
      }
    });
  }
};
