import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Comment = new Schema(
  {
    taskId: { type: ObjectId, ref: 'Task', required: true },
    body: { type: String, required: true },
    profile: { type: String, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Comment
