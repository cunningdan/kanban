import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    task: { type: String, required: true },
    body: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Comment
