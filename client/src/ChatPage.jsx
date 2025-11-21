import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext.jsx";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import socket from "./socket"; 

export default function ChatPage() {
    const [msg, setMsg] = useState("");
    const [chat, setChat] = useState([]);

    useEffect(() => {
        socket.on("receive-messsage", (data) => {
                setChat((prev) => [...prev, data]);
        });

        return () => socket.off("receive-message");
    }, []);

    const send = () => {
        if (!msg.trim()) return;

    const messageData = {
        text: msg,
        time: new Date().toLocaleTimeString(),
    };

        socket.emit("send-message", messageData);
        setChat((prev) => [...prev, messageData]);
        setMsg("");
        };

    return (
      <div className="p-6">
        <div className="max-w-2xl mx-auto mt-6 border rounded p-4 shadow">
            {chat.map((c, i) => 
                    <div key={i} className="p-2 bg-blue-300 rounded mb-2">
                        <p>{c.text}</p>
                        <small>{c.time}</small>
                    </div>
            )})
            </div>

            <div className="flex gap-2">
                <input
                    className="border p-2 flex-1 rounded"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Type your message"
                />
                <button className="bg-blue-600 text-white px-4 rounded" onClick={send}>
                    Send
                </button>
            </div>
        </div>
    );
}
