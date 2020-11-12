import { dbContext } from '../db/DbContext'
import Task from '../models/Task'
import { BadRequest } from '../utils/Errors'

class TaskService {

  async changeId(body, id) {
    await dbContext.Tasks.findByIdAndUpdate(id, body, { new: true })
    if (!Task) {
      throw new BadRequest('No found Task')
    }return this.getTasks()
  }
  async getTasks(id) {
    const data = await dbContext.Tasks.find({ listId: id }).populate('list')
    return data
  }

  async create(body) {
    return await dbContext.Tasks.create(body)
  }

  async delete(id, userId) {
    const taskProfile = await dbContext.Tasks.findById(id)
    // @ts-ignore
    if (userId === taskProfile.profile) {
      await dbContext.Tasks.findByIdAndDelete(id)
      if (!Task) {
        throw new BadRequest('No found Task')
      } return this.getTasks()
    } throw new BadRequest('Access Denied')
  }

  async edit(id, body) {
    await dbContext.Tasks.findByIdAndUpdate(id, body, { new: true })
    if (!Task) {
      throw new BadRequest('No found Task')
    } return this.getTasks()
  }
}

export const taskService = new TaskService()
