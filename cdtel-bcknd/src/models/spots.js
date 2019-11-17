module.exports = (sequelize, DataTypes) => {
    const Spot = sequelize.define('Spot', {
        thumbnail: DataTypes.STRING,
        techs: [DataTypes.STRING],
        user: DataTypes.INTEGER,
        company: DataTypes.STRING,
        price: DataTypes.INTEGER,
        active: DataTypes.BOOLEAN,
    })
    return Spot;
}
