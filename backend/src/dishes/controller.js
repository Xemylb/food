


const dishesModel = require('./model');

class DishesController {


    list(req, res) {
        console.log('got request for dishes');
        
        
        dishesModel.getList()
            .then(result => res.json(result))
            .catch(err => res.status(400).send())
    }

    get(req, res) {
        const id = Number(req.params.id);
        console.log('got request for one dish with id ' + id);
        
        res.json(dishesModel.getOne(id));
    }

    add(req, res) {
        const data = req.body;
        console.log('got request for add dish', data);
        const entity = dishesModel.add(data);

        entity ? res.json(entity) : res.status(400).send()
    }

    update(req, res){
        const data = req.body;
        console.log('got request for update dish', data);
        const entity = dishesModel.update(data);

        entity ? res.json(entity) : res.status(400).send()
    }

    delete(req, res){
        const id = Number(req.params.id);
        console.log('got request for delete dish', id);
        dishesModel.delete(id);
        res.send(null);
    }
}

module.exports = new DishesController;