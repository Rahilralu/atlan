import React, { useState } from "react";

const ViewBackendButton = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [logs, setLogs] = useState(["Terminal opened!"]);
  const [input, setInput] = useState("");

  const handleButtonClick = () => setShowTerminal(true);
  const closeTerminal = () => setShowTerminal(false);

  const handleSend = () => {
    if (input.trim() !== "") {
      setLogs((prev) => [...prev, input]);
      setInput("");
    }
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={handleButtonClick}
        className="rounded-lg bg-black px-6 py-2 shadow-md hover:bg-gray-800 hover:shadow-lg transition text-white text-base font-medium"
      >
        View Backend
      </button>

      {/* Terminal Overlay */}
      {showTerminal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-start p-6 z-50">
          <div className="w-full max-w-4xl h-[80vh] bg-black border border-gray-700 rounded-lg p-4 flex flex-col overflow-y-auto font-mono text-green-400">
            {/* Close button */}
            <div className="flex justify-end mb-2">
              <button
                onClick={closeTerminal}
                className="px-3 py-1 bg-gray-800 rounded hover:bg-gray-700 text-white text-sm"
              >
                Close
              </button>
            </div>

            {/* Logs */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-1">
              {logs.map((log, idx) => (
                <div key={idx}>{log}</div>
              ))}
            </div>

            {/* Input area */}
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 bg-gray-900 text-green-400 border border-gray-700 rounded px-2 py-1 font-mono focus:outline-none text-sm"
                placeholder="Type your command..."
              />
              <button
                onClick={handleSend}
                className="px-3 py-1 bg-gray-800 rounded hover:bg-gray-700 text-white text-sm"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewBackendButton;
