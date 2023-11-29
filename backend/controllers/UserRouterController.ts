import { Request, Response } from "express"
import { deletedUserModel, userModel } from "../models/userModel"


export default class UserRouterController {

    public async loginHandler(req: Request, res: Response){
     const {name, password} = req.body
     const foundUser = await userModel.findOne({name, password}).lean()
     res.status(200).json({message: foundUser})
    }

    public async signinHandler(req: Request, res: Response){
      const {name, password} = req.body

      const userExists = await userModel.findOne({name, password}).lean()
      if(userExists) return res.status(401).json({message: `user exists.`});
      
      const createdUser = await userModel.create({name, password})
      res.status(201).json({message: createdUser})
    }

    public async updateUserHandler(req: Request, res: Response){
      const {name, password, newName, newPassword} = req.body
    
      const foundUser = await userModel.findOne({name, password})
      await foundUser?.updateOne({name: newName, password: newPassword})

      res.status(200).json({message: foundUser})
    }

    public async deleteUserHandler(req: Request, res: Response){
      const {name, password} = req.body
      const deletedUser = await userModel.findOneAndDelete({name, password}).lean()      
      if(deletedUser) {
        await deletedUserModel.create(deletedUser)
        res.status(200).json({message: deletedUser})
      }
    }

    public async GetdeletedUsersHandler(req: Request, res: Response){
      const {name, password} = req.body
      if (!name || !password) {
        const foundDeletedUsers = await deletedUserModel.find({})
        return res.status(200).json({message: foundDeletedUsers})
      }
      const foundDeletedUsers = await deletedUserModel.findOne({name, password})
      return res.status(200).json({message: foundDeletedUsers})
    }

}

