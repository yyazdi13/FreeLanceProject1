module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.define('Email', {
      email: DataTypes.STRING,
      message: DataTypes.STRING
    })
  
    return Model;
  
  } 