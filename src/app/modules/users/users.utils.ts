import { User } from './user.model'

let lastUserId = 0
export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}

export const generatedUserId = async () => {
  lastUserId++
  const currentId =
    (await findLastUserId()) || String(lastUserId).padStart(5, '0')
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementedId
}
