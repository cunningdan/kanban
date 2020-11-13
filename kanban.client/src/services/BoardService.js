import { AppState } from '../AppState'
import { api } from './AxiosService'
import { logger } from '../utils/Logger'

class BoardService {
  async getBoards() {
    try {
      const res = await api.get('/api/boards')
      AppState.boards = res.data
    } catch (err) {
      logger.error(err)
    }
  }

  async createBoard(boardData) {
    try {
      const res = await api.post('/api/boards', boardData)
      AppState.boards.push(res.data)
    } catch (err) {
      logger.error(err)
    }
  }

  async getActiveBoard(boardId) {
    try {
      const res = await api.get('/api/boards/' + boardId)
      AppState.activeBoard = res.data
    } catch (err) {
      logger.error(err)
    }
  }

  async deleteBoard(boardId) {
    try {
      await api.delete('/api/boards/' + boardId)
      this.getBoards()
    } catch (err) {
      logger.error(err)
    }
  }

  async editBoard(boardId, boardData) {
    try {
      await api.put('/api/boards/' + boardId, boardData)
      this.getBoards()
    } catch (err) {
      logger.error(err)
    }
  }
}

export const boardService = new BoardService()
