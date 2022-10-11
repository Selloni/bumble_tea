import mongoose from "mongoose";

const mongo = new mongoose.Schema({ //какие поля будут задействованы
    name: { type: String },
    number: { type: String, required: true },  // обязательный параметр
    password: { type: String },
    cup: { type: Number }
})

const new_tea = new mongoose.Schema({
    name_tea: { type: String }
})

export default mongoose.model('mongo', mongo) 