import { useState, useEffect, useRef } from "react";

export default function ChatUI({ }) {
  const [messages, setMessages] = useState([
    { text: "Hi! 👋 How can I help you today?", sender: "ai" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    const userMessage = input;
    setInput("");
    setTyping(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { text: data.reply || "Sorry, no response from AI.", sender: "ai" },
      ]);
    } catch (err) {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Error contacting the server.", sender: "ai" },
      ]);
      console.error("Chat error:", err);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  return (
    <div className="h-[520px] mt-[75px] bg-white border-l shadow-lg flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="text-lg font-semibold text-blue-600">Chat Bot</div>
      </div>

      <div className="flex-1 p-3 overflow-y-auto">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            } mb-2`}
          >
            <div
              className={`px-3 py-2 rounded-lg text-sm max-w-[80%] break-words ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-100 text-black rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex justify-start mb-2">
            <div className="px-3 py-2 rounded-lg text-sm bg-gray-100 border">
              <span className="animate-pulse">...</span>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>
      <div className="p-3 border-t">
        <div className="flex items-center bg-white border rounded-full px-3 py-1">
          <input
            type="text"
            className="flex-1 bg-transparent px-2 py-2 text-black placeholder-gray-500 outline-none"
            placeholder="Type your Message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full ml-2"
            aria-label="Send message"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
