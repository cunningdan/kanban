import { AppState } from '../AppState'
import { api } from './AxiosService'

class TaskService {
  async getTasks(listId) {
    try {
      const res = await api.get('/api/lists/' + listId + '/tasks')
      console.log(res)
      AppState.tasks = res.data
    } catch (err) {
      console.error(err)
    }
  }

  async createTask(taskData) {
    try {
      const res = await api.post('/tasks', taskData)
      AppState.tasks.push(res)
    } catch (err) {
      console.error(err)
    }
  }
}

export const taskService = new TaskService()
