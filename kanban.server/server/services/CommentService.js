import { dbContext } from '../db/DbContext'
import Comment from '../models/Comment'
import { BadRequest } from '../utils/Errors'

class CommentService {
  async getComments(id) {
    const data = await dbContext.Comments.find({ task: id }).populate('profile').populate('task')
    return data
  }

  async create(body) {
    return await dbContext.Comments.create(body)
  }

  async delete(id, userId) {
    const commentProfile = await dbContext.Comments.findById(id)
    // @ts-ignore
    if (userId === commentProfile.profile) {
      await dbContext.Comments.findByIdAndDelete(id)
      if (!Comment) {
        throw new BadRequest('No found Board')
      } return this.getComments()
    } throw new BadRequest('Access Denied')
  }

  async edit(id, body) {
    await dbContext.Comments.findByIdAndUpdate(id, body, { new: true })
    if (!Comment) {
      throw new BadRequest('No found Board')
    } return this.getComments()
  }
}

export const commentService = new CommentService()
