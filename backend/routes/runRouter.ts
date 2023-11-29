import express from "express"
import { TodoRouter, UserRouter } from "./Routers"

export default class Server {
    private userRouter = new UserRouter().getRoute()
    private todoRouter = new TodoRouter().getRoute()
    private app = express()

    constructor(){
        this.app.use(express.json())
    }
    
    runServer(PORT: string | number){
      this.app.use(this.userRouter)
      this.app.use(this.todoRouter)
      this.app.listen(PORT, ()=>{
        console.log(`server listening at PORT ${PORT}`)
      })
    }
}

