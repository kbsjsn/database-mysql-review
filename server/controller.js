const Todo = require('../database/model.js');

const controller = {
    get: (req, res) => {
        //grab data from database
        //send data to users
        //status code 200
        Todo
            .findAll({})
            .then ( (data) => {
                res.status(200).send(data);
            })
            .catch( (err) => {
                console.err('Roll over');
                res.status(404).send('Error')});
    },
    post: (req, res) => {
        const { name } = req.body;  //req.body will return obj and name will be assign to the key name of 'name'
        Todo.create({name})         //create() takes in obj, here it will have prop with key name of 'name' and value from prev
            .then( () => {
                res.status(201).send('Yay~');
            })
            .catch( (err) => {
                console.error(err);
                res.status(404).send('Error');
            })
    },
    delete: (req, res) => {
        //reference params to grab id; there can be other keys with same value (same name)
        const { id } = req.params;
        Todo.destroy({ where: {id} })
            .then( () => res.status(200).send(`Destroy id ${id}`))
            .catch( err => {
                console.error(err);
                res.status(404).send('Error');
            })
    },
    update: (req, res) => {
        const { id } = req.params;
        const { name } = req.body;

        Todo
            .update({name}, { where: {id}})
            .then( () => {
                res.status(200).send('Yay, updated')
            })
            .catch( err => {
                console.error(err);
                res.status(404).send('Error');
            });
    }
};

module.exports = controller;
