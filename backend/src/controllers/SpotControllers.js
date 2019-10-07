const mongoose = require('mongoose');
const User = require('../models/User');
const SportScheme = require('../models/Spot');
module.exports = {

  async index(req, res) {

  },
  
  async store(req, res) {
    const { filename } = req.file;
    const { company, price, techs } = req.body;

    //header sempre para o contexto da aplicação
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ error: 'User does not exists' });
    }
    const spot = await SportScheme.create({
      user: user_id,
      thumbnail: filename,
      company: company,
      techs: techs.split(',').map(tech => tech.trim()),
      price: price

    })
    return res.json({ spot });
  }

}