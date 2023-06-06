import { User } from './user.model'
import { IUser } from './users.interface'
import config from '../../../config.ts/index'
import { generatedUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generatedUserId()

  user.id = id

  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('failed to create uder!!!')
  }
  return createdUser
}

export default {
  createUser,
}
