
var disher = [
    {id: 1, title: 'Борщ', price: 5, available: true},
    {id: 2, title: 'Гречка', price: 15, available: true},
    {id: 3, title: 'Макароны', price: 12, available: true},
    {id: 4, title: 'Суп', price: 25, available: true},
    {id: 12, title: 'Гречка', price: 15, available: true},
    {id: 23, title: 'Макароны', price: 12, available: true},
    {id: 32, title: 'Гречка', price: 15, available: true},
    {id: 43, title: 'Макароны', price: 12, available: true},
    {id: 52, title: 'Гречка', price: 15, available: true},
    {id: 63, title: 'Макароны', price: 12, available: true},
    {id: 72, title: 'Гречка', price: 15, available: true},
    {id: 83, title: 'Макароны', price: 12, available: true},
    {id: 92, title: 'Гречка', price: 15, available: true},
    {id: 31, title: 'Макароны', price: 12, available: true},
    {id: 22, title: 'Гречка', price: 15, available: true},
    {id: 33, title: 'Макароны', price: 12, available: true},
    {id: 24, title: 'Гречка', price: 15, available: true},
    {id: 35, title: 'Макароны', price: 12, available: true},
];

class DishesController {


    list(req, res) {
        console.log('got request for dishes');

        res.json(disher);
    }

    get(req, res) {
        const id = Number(req.params.id);
        console.log('got request for one dish with id ' + id);
        let dish = disher.find(data => data.id === id)
        
        res.json(dish);
    }

    add(req, res) {
        const data = req.body;
        console.log('got request for add dish', data);
        data.id = Date.now();
        disher.push(data)

        res.json(disher)
    }

    update(req, res){
        const data = req.body;
        console.log('got request for update dish', data);
        disher = disher.map(c => c.id === data.id ? data : c)
        res.json(data)
    }

    delete(req, res){
        const id = Number(req.params.id);
        console.log('got request for delete dish', id);
        disher = disher.filter(c => c.id !== id)
        res.send(null);
    }
}

module.exports = new DishesController;