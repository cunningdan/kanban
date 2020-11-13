import { AppState } from '../AppState'
import { api } from './AxiosService'
import { logger } from '../utils/Logger'

class TaskService {
  async getTasks(listId) {
    try {
      const res = await api.get('/api/lists/' + listId + '/tasks')
      AppState.tasks[listId] = res.data
    } catch (err) {
      logger.error(err)
    }
  }

  async createTask(taskData) {
    try {
      await api.post('/api/tasks', taskData)
      this.getTasks(taskData.listId)
    } catch (err) {
      logger.error(err)
    }
  }

  async editTask(taskId, taskData) {
    try {
      await api.put('/api/tasks/' + taskId, taskData)
      this.getTasks(taskData.listId)
    } catch (err) {
      logger.error(err)
    }
  }

  async deleteTask(taskId, taskData) {
    try {
      await api.delete('/api/tasks/' + taskId)
      this.getTasks(taskData.listId)
    } catch (err) {
      logger.error(err)
    }
  }
}

export const taskService = new TaskService()
