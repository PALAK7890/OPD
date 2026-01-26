import express from 'express'
import cors from 'cors'
import authRoutes from "./routes/auth.routes.js"
import doctorRoutes from "./routes/doctor.routes.js"

const app=express()

app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoutes)
app.use("/api/doctor",doctorRoutes)

app.get('/',res,req=>{
    res.send('opd is running')

})
export default app;