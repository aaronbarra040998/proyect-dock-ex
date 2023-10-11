const controller = {};
const mongoose = require('mongoose');
const Model =require ('../models/users.model')
const { url } = require('../dbConection/connection');

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Error de conexión a MongoDB:', err);
});

db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
  // Resto del código de tu aplicación
});
controller.index = async (req, res) => { // Agrega 'async' aquí
  try {
    const title = 'index desde el servidor con una variable';
    const allUser = await Model.find()
    console.log(allUser)
    res.render('index', { title });
  } catch (err) {
    console.error(err);
  }
  // res.send('La conexión ha sido correcta desde index.controller ')
};

module.exports = controller;
