
import { DataTypes } from 'sequelize';
import { sequelize } from '../DB/db.js';

export const User = sequelize.define('user',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: DataTypes.TEXT,
},
    {timestamps: false});

export async function findByUsername(username) {
    //l
    return User.findOne({ where :{ username }});
}

export async function findById(id) {
    return User.findByPk(id);

}

export async function createUser(user) {

    return User.create(user).then(data => {
        console.log(data); // Debug용
         return data.dataValues.id;
        });
//current problem :  signup already exist, login anything data pass 
}