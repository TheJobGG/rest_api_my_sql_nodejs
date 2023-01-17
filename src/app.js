import express from 'express';
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import {PORT} from './config.js'

const app = express()
app.use(express.json())
app.use('/api',employeesRoutes)
app.use(indexRoutes)

app.use((req,res) => res.status(404).json({message: 'EndPoint Not found'}))

export default app;