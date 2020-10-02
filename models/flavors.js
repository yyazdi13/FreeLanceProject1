module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.define('Flavor', {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.TEXT
    })
  
    return Model;
  
  } 