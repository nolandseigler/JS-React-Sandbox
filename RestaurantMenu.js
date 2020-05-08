const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts

        }
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizersIn) {
        this._courses.appetizers = appetizersIn;
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(mainsIn) {
        this._courses.mains = mainsIn;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(dessertsIn) {
        this._courses.desserts = dessertsIn;
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        dishes = this._courses[courseName];
        //get index between zero and length of array. then round down to keep it inside
        index = Math.floor(Math.random() * dishes.length)
        return dishes[index]
    },
    generateRandomMeal() {
        appetizer = this.getRandomDishFromCourse("appetizers")
        main = this.getRandomDishFromCourse("mains")
        dessert = this.getRandomDishFromCourse("desserts")
        totalPrice = (appetizer.price + main.price + dessert.price).toFixed(2);
        return `Your meal is ${appetizer.name} and ${main.name} with ${dessert.name} for dessert. The total price is $${totalPrice}.`
    }
};
//add appetizers
menu.addDishToCourse("appetizers", "side salad", 4.50)
menu.addDishToCourse("appetizers", "hot wings", 8.99)
menu.addDishToCourse("appetizers", "chips and salsa", 4.99)

//add mains
menu.addDishToCourse("mains", "chicken alfredo", 10.99)
menu.addDishToCourse("mains", "jalapeno popper cheese burger", 12.00)
menu.addDishToCourse("mains", "chicken ceasar salad", 9.00)

//add desserts
menu.addDishToCourse("desserts", "strawberry shortcake cheesecake", 4.99)
menu.addDishToCourse("desserts", "flan", 4.99)
menu.addDishToCourse("desserts", "chocolate cake", 4.99)

//get a random meal
meal = menu.generateRandomMeal()
console.log(meal)

