import { connect } from "mongoose";


export default async function connectDB(URI: string) {
    try{
       return await connect(URI)
        .then(()=>console.info('database running'))
    } catch(error){
        console.error(error)
    }
}
