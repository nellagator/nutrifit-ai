import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Camera,
  Dumbbell,
  Bot,
  BarChart3,
  User,
  LogOut,
  Send,
} from "lucide-react";

export default function AICoach() {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi John! 👋 How can I help you today?",
    },
  ]);

  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Food Scanner", icon: Camera, path: "/food-scanner" },
    { name: "Workouts", icon: Dumbbell, path: "/workouts" },
    { name: "AI Coach", icon: Bot, path: "/ai-coach" },
    { name: "Progress", icon: BarChart3, path: "/progress" },
    { name: "Profile", icon: User, path: "/profile" },
  ];

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages((current) => [
      ...current,
      {
        sender: "user",
        text: message,
      },
    ]);

    const currentMessage = message;
    setMessage("");

    {/* TEMPORARY REPLIES */}

    setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          sender: "ai",
          text: `Based on your goal, I'd recommend making a balanced choice. Tell me more about "${currentMessage}" and I can give you a more specific recommendation.`,
        },
      ]);
    }, 700);
  };

  return (
    <div className="flex min-h-screen bg-[#1c1c1c] p-2">
      {/* SIDEBAR */}
      <aside className="flex w-[195px] flex-col rounded-l-lg bg-white shadow-md">
        <div className="flex items-center gap-2 px-4 py-5">
          <img
            src="/nutrifit-logo.png"
            alt="NutriFit AI"
            className="h-9 w-9 object-contain"
          />

          <span className="text-xl font-bold text-[#4CAF2F]">
            NutriFit AI
          </span>
        </div>

        <nav className="mt-7 flex flex-1 flex-col gap-2 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-semibold ${
                  item.name === "AI Coach"
                    ? "border-l-2 border-[#4CAF2F] bg-[#dcffcc] text-[#4CAF2F]"
                    : "text-gray-400 hover:bg-gray-100 hover:text-[#4CAF2F]"
                }`}
              >
                <Icon size={19} />
                {item.name}
              </button>
            );
          })}
        </nav>

        <button
          onClick={() => navigate("/login")}
          className="mx-2 mb-4 flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50"
        >
          <LogOut size={19} />
          Log Out
        </button>
      </aside>

      {/* CHAT */}
      <main className="flex flex-1 flex-col overflow-hidden rounded-r-lg bg-white">
        {/* HEADER */}
        <header className="flex h-14 items-center justify-center border-b">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple-300">
              <Bot size={18} className="text-purple-500" />
            </div>

            <span className="font-bold">Nori AI</span>
          </div>
        </header>

        {/* MESSAGES */}
        <div className="flex-1 space-y-4 overflow-auto p-6">
          {messages.map((item, index) => (
            <div
              key={index}
              className={`flex ${
                item.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[65%] whitespace-pre-line rounded-xl px-4 py-3 text-sm ${
                  item.sender === "user"
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="border-t p-4">
          <div className="mx-auto flex max-w-3xl items-center gap-2 rounded-xl border px-3 py-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-sm outline-none"
            />

            <button
              onClick={sendMessage}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700"
            >
              <Send size={17} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}