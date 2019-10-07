const User = require('../models/User');
// index() -  retornar a lista de algo;
// show() - retornar um unico element;
// store() -  criar um novo elemento;
// update() -  atualizar um elemento,
// destroy() - deletar um elemento


module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }


        return res.json(user);
    }

}