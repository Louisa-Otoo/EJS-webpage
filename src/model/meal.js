
const Meal = new Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
}, { timestamps: true });


module.exports = Meal;