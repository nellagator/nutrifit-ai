import { useState } from "react";

import {
  Bot,
  Send,
  CheckCircle2,
} from "lucide-react";

import DashboardLayout from "../components/DashboardLayout";

export default function AICoach() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hi John! 👋 How can I help you today?",
    },
    {
      type: "user",
      text: "What should I eat after my workout?",
    },
    {
      type: "ai",
      text: "A meal with protein and carbohydrates would be a great choice after your workout.",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages((current) => [
      ...current,
      {
        type: "user",
        text: message,
      },
      {
        type: "ai",
        text: "That's a great question! I'll help you make a healthy choice based on your goals.",
      },
    ]);

    setMessage("");
  };

  return (
    <DashboardLayout>

      <div className="mx-auto flex h-[calc(100vh-150px)] max-w-4xl flex-col rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-[#222222]">

        {/* ===================================================
            CHAT HEADER
        =================================================== */}

        <div className="flex items-center gap-3 border-b border-gray-200 p-4 dark:border-gray-700">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dcffcc] text-[#4CAF2F]">
            <Bot size={22} />
          </div>

          <div>

            <h2 className="text-sm font-bold">
              NutriFit AI
            </h2>

            <p className="text-[10px] text-gray-500">
              Your personal nutrition coach
            </p>

          </div>

        </div>

        {/* ===================================================
            CHAT MESSAGES
        =================================================== */}

        <div className="flex-1 space-y-4 overflow-y-auto p-5">

          {messages.map((message, index) => (
            <div
              key={index}
              className={`
                flex
                ${
                  message.type === "user"
                    ? "justify-end"
                    : "justify-start"
                }
              `}
            >

              <div
                className={`
                  max-w-[70%]
                  rounded-xl
                  px-4
                  py-3
                  text-sm

                  ${
                    message.type === "user"
                      ? "bg-[#4CAF2F] text-white"
                      : "bg-gray-100 text-gray-700 dark:bg-[#333333] dark:text-gray-200"
                  }
                `}
              >
                {message.text}
              </div>

            </div>
          ))}

          {/* Example recommendation */}

          <div className="max-w-md rounded-lg bg-[#f0faeb] p-4 dark:bg-[#253522]">

            <p className="text-xs font-bold text-[#4CAF2F]">
              Suggested after-workout meal
            </p>

            <div className="mt-3 space-y-2">

              <Recommendation text="Grilled chicken" />
              <Recommendation text="Brown rice" />
              <Recommendation text="Vegetables" />
              <Recommendation text="Water" />

            </div>

          </div>

        </div>

        {/* ===================================================
            MESSAGE INPUT
        =================================================== */}

        <div className="border-t border-gray-200 p-4 dark:border-gray-700">

          <div className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 dark:border-gray-600">

            <input
              type="text"
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Type your message..."
              className="
                flex-1
                bg-transparent
                text-sm
                outline-none
              "
            />

            <button
              type="button"
              onClick={sendMessage}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4CAF2F] text-white"
            >
              <Send size={15} />
            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

/*
============================================================
RECOMMENDATION
============================================================
*/

function Recommendation({ text }) {
  return (
    <div className="flex items-center gap-2 text-xs">

      <CheckCircle2
        size={14}
        className="text-[#4CAF2F]"
      />

      {text}

    </div>
  );
}