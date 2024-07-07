import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://food-del:5KAQ2gkLLYW2TLoA@cluster0.lsingqf.mongodb.net/food-del').then(()=>console.log("DB connected"));
}