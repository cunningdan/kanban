import { AppState } from '../AppState'
import { api } from './AxiosService'
import { logger } from '../utils/Logger'

class CommentService {
  async getComment(taskId) {
    try {
      const res = await api.get('/api/tasks/' + taskId + '/comments')
      AppState.comments[taskId] = res.data
    } catch (err) {
      logger.error(err)
    }
  }

  async createComment(commentData) {
    try {
      await api.post('/api/comments', commentData)
      this.getComment(commentData.taskId)
    } catch (err) {
      logger.error(err)
    }
  }

  async editComment(commentId, commentData) {
    try {
      await api.put('/api/comments/' + commentId, commentData)
      this.getComment(commentData.taskId)
    } catch (err) {
      logger.error(err)
    }
  }

  async deleteComment(commentId, commentData) {
    try {
      await api.delete('/api/comments/' + commentId)
      this.getComment(commentData.taskId)
    } catch (err) {
      logger.error(err)
    }
  }
}

export const commentService = new CommentService()
