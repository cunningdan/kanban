import { AppState } from '../AppState'
import { api } from './AxiosService'

class CommentService {
  async getComment(taskId) {
    try {
      const res = await api.get('/api/tasks/' + taskId + '/comments')
      console.log(res.data)
      AppState.comments[taskId] = res.data
    } catch (err) {
      console.error(err)
    }
  }

  async createComment(commentData) {
    try {
      await api.post('/api/comments', commentData)
      this.getComment(commentData.taskId)
    } catch (err) {
      console.error(err)
    }
  }
}

export const commentService = new CommentService()
