import { Schema, model } from "mongoose";

const todoModel = model('todoCollection', new Schema({
    todoName: String,
    todoDescription: String
}))
const deletedTodoModel = model('deletedTodoCollection', new Schema({
    todoName: String,
    todoDescription: String
}))

export  {todoModel, deletedTodoModel}
