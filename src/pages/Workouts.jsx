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
  Play,
  Clock,
  Flame,
} from "lucide-react";

export default function Workouts() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [startedWorkout, setStartedWorkout] = useState(null);

  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Food Scanner", icon: Camera, path: "/food-scanner" },
    { name: "Workouts", icon: Dumbbell, path: "/workouts" },
    { name: "AI Coach", icon: Bot, path: "/ai-coach" },
    { name: "Progress", icon: BarChart3, path: "/progress" },
    { name: "Profile", icon: User, path: "/profile" },
  ];

  const workouts = [
    {
      title: "Upper Body Strength",
      duration: "35 min",
      level: "Intermediate",
      calories: "280 kcal",
      description: "Build strength and tone your upper body.",
    },
    {
      title: "Full Body Workout",
      duration: "45 min",
      level: "Beginner",
      calories: "350 kcal",
      description: "A balanced workout for your entire body.",
    },
    {
      title: "Lower Body Strength",
      duration: "30 min",
      level: "Intermediate",
      calories: "260 kcal",
      description: "Strengthen your legs and lower body.",
    },
  ];

  const startWorkout = (title) => {
    setStartedWorkout(title);

    setTimeout(() => {
      setStartedWorkout(null);
    }, 2500);
  };

  return (
    <div
      className={`flex min-h-screen p-2 ${
        darkMode ? "bg-[#111111]" : "bg-[#1c1c1c]"
      }`}
    >
      {/* SIDEBAR */}
      <aside
        className={`flex w-[195px] flex-col rounded-l-lg shadow-md ${
          darkMode ? "bg-[#222222] text-white" : "bg-white"
        }`}
      >
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
                className={`flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-semibold transition ${
                  item.name === "Workouts"
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

      {/* MAIN */}
      <main
        className={`flex-1 overflow-auto rounded-r-lg p-5 ${
          darkMode
            ? "bg-[#181818] text-white"
            : "bg-white text-black"
        }`}
      >
        <h1 className="text-2xl font-bold">Workouts</h1>

        <p className="mt-1 text-sm text-gray-500">
          Choose a workout that matches your fitness goal.
        </p>

        <div className="mt-5 grid grid-cols-3 gap-4">
          {workouts.map((workout) => (
            <div
              key={workout.title}
              className={`rounded-xl border p-4 shadow-sm ${
                darkMode
                  ? "border-gray-700 bg-[#222222]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex h-32 items-center justify-center rounded-lg bg-gray-200">
                <Dumbbell size={48} className="text-gray-500" />
              </div>

              <h2 className="mt-4 font-bold">
                {workout.title}
              </h2>

              <div className="mt-2 flex gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {workout.duration}
                </span>

                <span className="flex items-center gap-1">
                  <Flame size={14} />
                  {workout.calories}
                </span>
              </div>

              <p className="mt-3 text-sm text-gray-500">
                {workout.description}
              </p>

              <button
                onClick={() => startWorkout(workout.title)}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
              >
                <Play size={16} fill="white" />
                Start Workout
              </button>

              {startedWorkout === workout.title && (
                <div className="mt-2 rounded-lg bg-[#dcffcc] p-2 text-center text-xs font-semibold text-green-600">
                  Workout started! 💪
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}