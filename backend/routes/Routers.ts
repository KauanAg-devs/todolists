import express from 'express'
import UserRouterController from '../controllers/UserRouterController'
import TodoRouterController from '../controllers/TodoRouterController'



export class TodoRouter {
    private todoRouter = express.Router()
    private controller = new TodoRouterController()
    constructor(){
        this.todoRouter.post('/getTodo', this.controller.getTodoHandler)
        this.todoRouter.post('/postTodo', this.controller.postTodoHandler)
        this.todoRouter.delete('/deleteTodo', this.controller.deleteTodoHandler)
        this.todoRouter.put('/updateTodo', this.controller.putTodoHandler)
    }

    public getRoute(){
        return this.todoRouter
    }
}

export class UserRouter {
    private router = express.Router()
    private controller = new UserRouterController()

    constructor(){
        this.router.post('/login', this.controller.loginHandler)
        this.router.post('/signin', this.controller.signinHandler)
        this.router.put('/updateUser', this.controller.updateUserHandler)
        this.router.delete('/deleteUser', this.controller.deleteUserHandler)
        this.router.post('/getDeletedUsers', this.controller.GetdeletedUsersHandler)
    }

    getRoute(){
        return this.router
    }
}