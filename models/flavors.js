module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.define('Flavor', {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.TEXT,
      link: DataTypes.STRING,
      ghLink: DataTypes.STRING
    })
  
    return Model;
  
  } 