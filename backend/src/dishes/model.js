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

const dbConnection = require('../db');

class DishesModel{
    getList(){
        return new Promise((resolve, reject)=> {
            dbConnection.query('SELECT * FROM dishes', (err, result) => {
                err ? reject(err)
                  : resolve(result)
              })
        })
    }

    getOne(id){
        return disher.find(data => data.id === id)

    }
    
    update(data){
        if (this.validate(data)){
            disher = disher.map(c => c.id === data.id ? data : c);
            return data;
        } else {
            return false;
        }

    }

    add(data){
        if (this.validate(data)){
            data.id = Date.now();
            disher.push(data);

            return disher[disher.length-1];
        } else {
            return false;
        }
    }

    delete(id){
        disher = disher.filter(c => c.id !== id)
        return true;
    }

    validate(data){
        return true;
    }
}


module.exports = new DishesModel;