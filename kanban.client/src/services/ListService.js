import { AppState } from '../AppState'
import { api } from './AxiosService'

class ListService {
  async getLists(boardId) {
    try {
      const res = await api.get('/api/boards/' + boardId + '/lists')
      console.log(res)
      AppState.lists = res.data
    } catch (err) {
      console.error(err)
    }
  }

  async createList(listData) {
    try {
      const res = await api.post('/lists', listData)
      AppState.lists.push(res)
    } catch (err) {
      console.error(err)
    }
  }
}

export const listService = new ListService()
