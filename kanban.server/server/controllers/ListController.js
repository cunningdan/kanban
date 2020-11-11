import { Auth0Provider } from '@bcwdev/auth0provider'
import { listService } from '../services/ListService'
import BaseController from '../utils/BaseController'
import { taskService } from '../services/TaskService'

export class ListController extends BaseController {
  constructor() {
    super('api/lists')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createList)
      .delete('/:id', this.delete)
      .put('/:id', this.edit)
      .get('/:listId/tasks', this.getTasks)
  }

  async getTasks(req, res, next) {
    try {
      res.send(await taskService.getTasks(req.params.listId))
    } catch (error) {
      next(error)
    }
  }

  async createList(req, res, next) {
    try {
      req.body.profile = req.userInfo.id
      res.send(await listService.create(req.body))
    } catch (err) {
      next(err)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await listService.delete(req.params.id, req.userInfo.id))
    } catch (err) {
      next(err)
    }
  }

  async edit(req, res, next) {
    try {
      res.send(await listService.edit(req.params.id, req.body))
    } catch (err) {
      next(err)
    }
  }
}
