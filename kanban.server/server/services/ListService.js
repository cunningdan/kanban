import { dbContext } from '../db/DbContext'
import List from '../models/List'
import { BadRequest } from '../utils/Errors'

class ListService {
  async getLists(id) {
    const data = await dbContext.Lists.find({ boardId: id }).populate('profile')
    return data
  }

  async create(body) {
    return await dbContext.Lists.create(body)
  }

  async delete(id, userId) {
    const listProfile = await dbContext.Lists.findById(id)
    // @ts-ignore
    if (userId === listProfile.profile) {
      await dbContext.Lists.findByIdAndDelete(id)
      if (!List) {
        throw new BadRequest('No found Board')
      } return this.getLists()
    } throw new BadRequest('Access Denied')
  }

  async edit(id, body) {
    await dbContext.Lists.findByIdAndUpdate(id, body, { new: true })
    if (!List) {
      throw new BadRequest('No found Board')
    } return this.getLists()
  }
}

export const listService = new ListService()
