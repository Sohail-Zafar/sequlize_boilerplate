module.exports = function(sequelize, DataTypes){


var user = sequelize.define("user", {
      firstName:{
      type: DataTypes.STRING, allowNull: false},
      lastName: {
          type: DataTypes.STRING, allowNull: false},
       email:{
           type: DataTypes.STRING,
           allowNull: false},
        age:{
            type: DataTypes.INTEGER , allowNull:false}
        });

        return user;
    }