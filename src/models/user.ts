import mongoose, { Schema, Document, Model } from "mongoose"
import { hasher } from "../utils/password";

interface IUser extends Document {
  username: string
  email: string
  password: string
  isAdmin: boolean
  isActive: boolean
}

const UserSchema: Schema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true }
  },
  {
    timestamps: true
  }
)
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    this.password = await hasher(this.password as string);
    next();
  } catch (error) {
    next();
  }
});
UserSchema.pre('findOneAndDelete', async function (next) {
  // Implement any necessary cleanup logic here
  next();
})

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema)

export default User