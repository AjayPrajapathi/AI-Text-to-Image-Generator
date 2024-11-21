import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  creditBalance: { type: Number, default: 7 },
});
// it will try to create model again and again to avoid we check if model exists then dont create
const userModel = mongoose.models.user || mongoose.model("user", userSchema);
 export default userModel;