import { AppState } from '../AppState'
import { api } from './AxiosService'
import { logger } from '../utils/Logger'

class ListService {
  async getLists(boardId) {
    try {
      const res = await api.get('/api/boards/' + boardId + '/lists')
      AppState.lists = res.data
    } catch (err) {
      logger.error(err)
    }
  }

  async createList(listData) {
    try {
      await api.post('/api/lists', listData)
      this.getLists(listData.boardId)
    } catch (err) {
      logger.error(err)
    }
  }

  async editList(listId, listData) {
    try {
      await api.put('/api/lists/' + listId, listData)
      this.getLists(listData.boardId)
    } catch (err) {
      logger.error(err)
    }
  }

  async deleteList(listId, listData) {
    try {
      await api.delete('/api/lists/' + listId)
      this.getLists(listData.boardId)
    } catch (err) {
      logger.error(err)
    }
  }
}

export const listService = new ListService()
