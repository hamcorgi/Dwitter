import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../DB/db.js';
import { User }from './auth.js'

const Tweet = sequelize.define('tweets', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
},
    text:{
      type: DataTypes.TEXT,
      allowNull: false,
    }
});
Tweet.belongsTo(User);

const INCLUDE_USER = {
  attributes: [
    'id', 
    'text',
     'createdAt', 
     'userId',
     [Sequelize.col('user.name'),'name'],
     [Sequelize.col('user.username'),'username'],
     [Sequelize.col('user.url'),'url'],

  ],
  include: {
    model: User,
    attributes: [],
  },
}
const ORDER_DESC = {order: [['createdAt','DESC']]};

export async function getAll() {
  return Tweet.findAll({...INCLUDE_USER, ...ORDER_DESC});
}
export async function getAllByUsername(username) {
  return Tweet.findAll({...INCLUDE_USER, ...ORDER_DESC, include: {
    ...INCLUDE_USER.include,
    where: {username},
  }}
  );
}

export async function getById(id) {
  return Tweet.findOne({
    where: {id},
    ...INCLUDE_USER,
    
  })
}

export async function create(text, userId) {
  return Tweet.create({text, userId}).then((data) =>
  this.getById(data.dataValues.id));
  }

export async function update(id, text) {
  return Tweet.findByPk(id, INCLUDE_USER)
  .then((tweet) => {
    tweet.text = text;
    return tweet.save();
  });
  /*return Tweet.update(
    {text: text},
    {where:{id: id}},
  ).then((data) => {
    console.log(data);
    return data;
   })*/
   
}

export async function remove(id) {
  return Tweet.findByPk(id)
  .then((tweet) => {
    return tweet.destroy();
  });
}
