import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userservices from './app/modules/users/users.service'
//import userRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//app.use('/api/v1/create-user', userRouter)
app.get('/', async (req: Request, res: Response) => {
  await userservices.createUser({
    id: '999',
    password: '888',
    role: 'student',
  })
  res.send('Hello World!')
})

export default app
