import mongoose, { Schema, model } from "mongoose";

const todoModel = model('todoCollection', new Schema({
    todoName: String,
    todoDescription: String,
    _id: mongoose.Types.ObjectId
}))

const deletedTodoModel = model('deletedTodoCollection', new Schema({
    todoName: String,
    todoDescription: String,
    _id: mongoose.Types.ObjectId
}))

export  {todoModel, deletedTodoModel}
