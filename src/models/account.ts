import mongoose, { Schema, Document, Model, ObjectId } from "mongoose"

export interface IAccount extends Document {
  userId: ObjectId
  provider: string
  providerUserId: string
  accessToken: string
  refreshToken: string
  expiresAt: number
  accessTokenExpired: boolean
  refreshTokenExpired: boolean
}

const AccountSchema: Schema = new Schema<IAccount>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    provider: { type: String, required: true },
    providerUserId: { type: String, required: true },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    expiresAt: { type: Number, required: true },
    accessTokenExpired: { type: Boolean, required: true },
    refreshTokenExpired: { type: Boolean, required: true }
  },
  { timestamps: true }
)

export const Account: Model<IAccount> = mongoose.model<IAccount>(
  "Account",
  AccountSchema
)
