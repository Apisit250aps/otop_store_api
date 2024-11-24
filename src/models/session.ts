import mongoose, { Schema, Document, Model, ObjectId } from "mongoose"

export interface ISession extends Document {
  userId: ObjectId
  token: string
}

const SessionSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    token: { type: String, required: true }
  },
  { timestamps: true }
)

export default mongoose.model<ISession>("Session", SessionSchema)