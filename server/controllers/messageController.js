import Message from '../models/Message.js';

export const sendMessage = async (req, res) => {
    try {
       const message = await Message.create(req.body);
        res.json(message);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

export const getMessages = async (req, res) => {
    try {
    const { sender, receiver} = req.params;

        const messages = await Message.find({
            $or: [
                { sender, receiver },
                { sender: receiver, receiver: sender},
            ],
        });

        res.json(messages);
    } catch (err) {
        res.status(500).json(err.message);
    }
};