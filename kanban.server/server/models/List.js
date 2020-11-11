import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const List = new Schema(
  {
    board: { type: ObjectId, ref: 'Board', required: true },
    title: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default List
