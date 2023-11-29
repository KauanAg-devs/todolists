import connectDB from "./models/db"
import Server from "./routes/runRouter"


const server = new Server();

(async ()=>{
 server.runServer(process.env.PORT || 3000);
 await connectDB(process.env.DBURI!)
})()