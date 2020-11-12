import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentService } from '../services/CommentService'
import { taskService } from '../services/TaskService'
import BaseController from '../utils/BaseController'

export class TaskController extends BaseController {
  constructor() {
    super('api/tasks')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTask)
      .delete('/:id', this.delete)
      .put('/:id', this.edit)
      .put('/:id', this.changeId)
      .get('/:taskId/comments', this.getComments)
  }

  async changeId(req, res, next) {
    try {
      res.send(await taskService.changeId(req.body, req.params.taskId))
    } catch (err) {
      next(err)
    }
  }
  async createTask(req, res, next) {
    try {
      req.body.profile = req.userInfo.id
      res.send(await taskService.create(req.body))
    } catch (err) {
      next(err)
    }
  }

  async getComments(req, res, next) {
    try {
      res.send(await commentService.getComments(req.params.taskId))
    } catch (err) {
      next(err)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await taskService.delete(req.params.id, req.userInfo.id))
    } catch (err) {
      next(err)
    }
  }

  async edit(req, res, next) {
    try {
      res.send(await taskService.edit(req.params.id, req.body))
    } catch (err) {
      next(err)
    }
  }
}
