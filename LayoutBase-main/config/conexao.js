import mongoose from "mongoose";

const url= "mongodb+srv://bernardo_db_user:123@cluster0.xqzl0vg.mongodb.net/?appName=Cluster0"

const conexao = await mongoose.connect(url)
export default conexao