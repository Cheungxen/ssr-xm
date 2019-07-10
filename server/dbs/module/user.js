import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  phone: { type: String, unique: true, require: true },
  password: { type: String }
})

export default mongoose.model('User', UserSchema)
