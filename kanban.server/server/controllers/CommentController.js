import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentService } from '../services/CommentService'
import BaseController from '../utils/BaseController'

export class CommentController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createComment)
      .delete('/:id', this.delete)
      .put('/:id', this.edit)
  }

  async createComment(req, res, next) {
    try {
      req.body.profile = req.userInfo.id
      res.send(await commentService.create(req.body))
    } catch (err) {
      next(err)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await commentService.delete(req.params.id, req.userInfo.id))
    } catch (err) {
      next(err)
    }
  }

  async edit(req, res, next) {
    try {
      res.send(await commentService.edit(req.params.id, req.body))
    } catch (err) {
      next(err)
    }
  }
}
