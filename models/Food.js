module.exports = function(sequelize, DataTypes) {
    var Food = sequelize.define("Food", {
      name: {
          type:DataTypes.STRING,
          allowNull: false
        },
      description: {
        type:DataTypes.STRING,
        allowNull: false
      },
      price: {
        type:DataTypes.FLOAT,
        allowNull: false
      }
    });
    return Food;
  };
 module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      firstName: {
          type:DataTypes.STRING,
          defaultValue:"Hello",
          allowNull: false
        },
      lastName: {
        type:DataTypes.STRING,
        defaultValue:"World",
        allowNull: false
      },
      email: {
        type:DataTypes.STRING,
        allowNull: false
      },
      age: {
        type:DataTypes.INTEGER,
        allowNull: false
      }
    });
    return User;
  };