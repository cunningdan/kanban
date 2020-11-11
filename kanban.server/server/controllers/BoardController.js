import { Auth0Provider } from '@bcwdev/auth0provider'
import { boardService } from '../services/BoardService'
import BaseController from '../utils/BaseController'
import { listService } from '../services/ListService'

export class BoardController extends BaseController {
  constructor() {
    super('api/boards')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:boardId/lists', this.getLists)
      .get('', this.getBoards)
      .post('', this.createBoard)
      .delete('/:id', this.delete)
      .put('/:id', this.edit)
  }

  async getBoards(req, res, next) {
    try {
      const data = await boardService.getBoards(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getLists(req, res, next) {
    try {
      res.send(await listService.getLists(req.params.boardId))
    } catch (error) {
      next(error)
    }
  }

  async createBoard(req, res, next) {
    try {
      req.body.profile = req.userInfo.id
      res.send(await boardService.create(req.body))
    } catch (err) {
      next(err)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await boardService.delete(req.params.id, req.userInfo.id))
    } catch (err) {
      next(err)
    }
  }

  async edit(req, res, next) {
    try {
      res.send(await boardService.edit(req.params.id, req.body))
    } catch (err) {
      next(err)
    }
  }
}
