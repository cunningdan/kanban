import mongoose from 'mongoose'
const Schema = mongoose.Schema

const List = new Schema(
  {
    board: { type: String, required: true },
    title: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default List
