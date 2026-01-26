import mongoose from 'mongoose'
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database Connect')
    }catch(err){
        console.log('There is a error connect to the database',err.message)
        process.exit(1)
    }
}

export default connectDB();