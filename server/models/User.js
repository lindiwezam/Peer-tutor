import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    userID: { type: String, index: true },
    name: {type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["tutor", "student"] },
    subjects: [String],
    bio: String,
}, { timestamps: true });

export default mongoose.model("User", userSchema);