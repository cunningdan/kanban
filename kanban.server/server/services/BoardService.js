import { dbContext } from '../db/DbContext'
import Board from '../models/Board'
import { BadRequest } from '../utils/Errors'

class BoardService {
  async getBoards(query = {}) {
    return await dbContext.Boards.find(query)
  }

  async create(body) {
    return await dbContext.Boards.create(body)
  }

  async delete(id, userId) {
    const boardProfile = await dbContext.Boards.findById(id)
    // @ts-ignore
    if (userId === boardProfile.profile) {
      await dbContext.Boards.findByIdAndDelete(id)
      if (!Board) {
        throw new BadRequest('No found Board')
      } return this.getBoards()
    } throw new BadRequest('Access Denied')
  }

  async edit(id, body) {
    await dbContext.Boards.findByIdAndUpdate(id, body, { new: true })
    if (!Board) {
      throw new BadRequest('No found Board')
    } return this.getBoards()
  }

  async getById(id) {
    return await dbContext.Boards.findById(id)
  }
}

export const boardService = new BoardService()
