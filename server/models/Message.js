import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: String,
    receiverId: String,
    text: String,
    timestamps: { type: Date, default: Date.now }
});

export default mongoose.model("Message", messageSchema);