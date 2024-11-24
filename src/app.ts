import express, { Express } from "express"
import route from "./routes";

const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// 
app.use(route)
export default app