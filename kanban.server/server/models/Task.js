import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Task = new Schema(
  {
    list: { type: String, required: true },
    title: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Task
