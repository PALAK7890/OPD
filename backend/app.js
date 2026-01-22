import express from 'express'
import cors from 'cors'

const app=express()

app.use(cors())

app.use(express.json())

app.get('/',res,req=>{
    res.send('opd is running')

})
export default app;