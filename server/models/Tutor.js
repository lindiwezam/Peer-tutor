import mongoose from "mongoose";

const { Schema } = mongoose;

const tutorSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }});

export default mongoose.model("Tutor", tutorSchema);
