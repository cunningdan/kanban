import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Comment = new Schema(
  {
    task: { type: ObjectId, ref: 'Task', required: true },
    body: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Comment
