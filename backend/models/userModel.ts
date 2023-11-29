import { Schema, model } from "mongoose";

const userModel = model('userCollection', new Schema({
    name: String,
    password: String
}))

const deletedUserModel = model('deletedUserCollection', new Schema({
    name: String,
    password: String
}))
export {userModel, deletedUserModel}