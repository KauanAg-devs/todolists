import { Request, Response } from "express";
import {todoModel, deletedTodoModel} from "../models/todoListModel";
import { userModel } from "../models/userModel";


export default class TodoRouterController {
    public async getTodoHandler(req: Request, res: Response){
       const {todoDescription, todoName} = req.body
       const foundTodo = await todoModel.findOne({todoDescription, todoName})
       res.status(200).json({message: foundTodo})
    }

    public async postTodoHandler(req: Request, res: Response){
       const {todoDescription, todoName, _id} = req.body
       const foundUser = await userModel.findById(_id);
       if(foundUser?._id !== _id) return res.status(401).json({message: `user not found`} )
       const createdTodo = await todoModel.create({todoDescription, todoName, _id: foundUser?._id})
       res.status(201).json({message: createdTodo})
    }

    public async deleteTodoHandler(req: Request, res: Response){
       const {todoDescription, todoName} = req.body
       const foundTodo = await todoModel.findOneAndDelete({todoDescription, todoName}).lean()
       if (foundTodo) {
         const deletedTodo = await deletedTodoModel.create(foundTodo)
         res.status(200).json({message: deletedTodo})
       }
       res.status(404).json({message: `todo not found`})
    }

    public async putTodoHandler(req: Request, res: Response){
       const {todoDescription, todoName, newTodoDescription, newTodoName} = req.body
       const updatedTodo = await todoModel.findOneAndUpdate({todoDescription, todoName}, {todoDescription: newTodoDescription, todoName: newTodoName}, {new: true})
       res.status(200).json({message: updatedTodo})
    }
}