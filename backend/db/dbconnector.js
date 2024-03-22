import mongoose from 'mongoose';
const DBNAME="vanshdb";
const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DBNAME}`)
        console.log(`mongodb connected  db host:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("connection error:",error);
        process.exit(1);
    }
}
export default connectDB;