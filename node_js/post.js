import mongoose from "mongoose";

const Post = new mongoose.Schema({ //какие поля будут задействованы
    name: { type: String, required: true },
    number: { type: String, required: true },
    password: { type: String },
})

export default mongoose.model('Post', Post)