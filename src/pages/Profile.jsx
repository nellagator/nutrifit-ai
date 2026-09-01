import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  Flame,
  Footprints,
  Dumbbell,
  Trophy,
  Weight,
} from "lucide-react";

import DashboardLayout from "../components/DashboardLayout";

export default function Progress() {
  return (
    <DashboardLayout>

      {/* =====================================================
          THIS WEEK
      ===================================================== */}

      <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-[#222222]">

        <h2 className="text-lg font-bold">
          My Progress
        </h2>

        <div className="mt-4 grid grid-cols-4 gap-3">

          <ProgressCard
            title="Calories"
            value="13,850"
            subtitle="kcal this week"
          />

          <ProgressCard
            title="Workouts"
            value="5"
            subtitle="sessions"
          />

          <ProgressCard
            title="Steps"
            value="58,420"
            subtitle="steps"
          />

          <ProgressCard
            title="Streak"
            value="7"
            subtitle="days"
          />

        </div>

      </section>

      {/* =====================================================
          ANALYTICS
      ===================================================== */}

      <div className="mt-4 grid grid-cols-2 gap-4">

        {/* ===================================================
            MACRONUTRIENTS
        =================================================== */}

        <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-[#222222]">

          <h3 className="text-sm font-bold">
            Macronutrient Distribution
          </h3>

          <div className="mt-5 flex items-center justify-center">

            <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-[25px] border-green-500">

              <div className="absolute inset-0 rounded-full border-[25px] border-blue-400 border-r-transparent border-b-transparent" />

              <div className="absolute inset-0 rounded-full border-[25px] border-orange-400 border-l-transparent border-b-transparent" />

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xs font-bold dark:bg-[#222222]">
                100%
              </div>

            </div>

          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs">

            <div>
              <p className="font-bold text-green-500">
                Protein
              </p>
              <p className="text-gray-500">
                40%
              </p>
            </div>

            <div>
              <p className="font-bold text-blue-500">
                Carbs
              </p>
              <p className="text-gray-500">
                45%
              </p>
            </div>

            <div>
              <p className="font-bold text-orange-400">
                Fat
              </p>
              <p className="text-gray-500">
                15%
              </p>
            </div>

          </div>

        </section>

        {/* ===================================================
            WEIGHT PROGRESS
        =================================================== */}

        <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-[#222222]">

          <div className="flex items-center gap-2">

            <Weight
              size={20}
              className="text-[#4CAF2F]"
            />

            <h3 className="text-sm font-bold">
              Weight Progress
            </h3>

          </div>

          <div className="mt-6 flex items-end justify-between">

            <div>

              <p className="text-3xl font-bold">
                70 kg
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Current weight
              </p>

            </div>

            <p className="text-sm font-bold text-green-600">
              ▼ 2.5 kg
            </p>

          </div>

          <div className="mt-8 h-2 rounded-full bg-gray-200">

            <div className="h-2 w-[70%] rounded-full bg-[#4CAF2F]" />

          </div>

          <div className="mt-2 flex justify-between text-[10px] text-gray-500">

            <span>
              Starting: 72.5 kg
            </span>

            <span>
              Goal: 65 kg
            </span>

          </div>

        </section>

      </div>

      {/* =====================================================
          CALORIE TREND
      ===================================================== */}

      <section className="mt-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-[#222222]">

        <div className="flex items-center justify-between">

          <h3 className="text-sm font-bold">
            Calories Trend
          </h3>

          <p className="text-xs text-gray-500">
            Average: 1718 kcal
          </p>

        </div>

        <div className="mt-3 h-48">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <AreaChart data={calorieData}>

              <CartesianGrid
                stroke="#e5e7eb"
                vertical={false}
              />

              <XAxis
                dataKey="day"
                tick={{
                  fontSize: 10,
                  fill: "#64748b",
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{
                  fontSize: 10,
                  fill: "#64748b",
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="calories"
                stroke="#00d91c"
                fill="#c9f9ce"
                strokeWidth={2}
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </section>

      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}

      <section className="mt-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-[#222222]">

        <h3 className="text-sm font-bold">
          Achievements
        </h3>

        <div className="mt-3 grid grid-cols-4 gap-3">

          <Achievement
            icon={<Flame />}
            title="7 Day Streak"
          />

          <Achievement
            icon={<Trophy />}
            title="Healthy Eater"
          />

          <Achievement
            icon={<Footprints />}
            title="Daily Steps"
          />

          <Achievement
            icon={<Dumbbell />}
            title="Workout Warrior"
          />

        </div>

      </section>

    </DashboardLayout>
  );
}

/*
============================================================
PROGRESS CARD
============================================================
*/

function ProgressCard({
  title,
  value,
  subtitle,
}) {
  return (
    <div className="rounded-lg border border-gray-200 p-3 dark:border-gray-700">

      <p className="text-xs font-semibold text-gray-500">
        {title}
      </p>

      <p className="mt-2 text-xl font-bold">
        {value}
      </p>

      <p className="mt-1 text-[10px] text-gray-500">
        {subtitle}
      </p>

    </div>
  );
}

/*
============================================================
ACHIEVEMENT
============================================================
*/

function Achievement({
  icon,
  title,
}) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-gray-200 p-4 text-center dark:border-gray-700">

      <div className="text-[#4CAF2F]">
        {icon}
      </div>

      <p className="mt-2 text-xs font-semibold">
        {title}
      </p>

      <p className="mt-1 text-[9px] text-gray-500">
        Achievement unlocked
      </p>

    </div>
  );
}

/*
============================================================
CALORIE DATA
============================================================
*/

const calorieData = [
  { day: "Mon", calories: 1550 },
  { day: "Tue", calories: 1720 },
  { day: "Wed", calories: 1600 },
  { day: "Thu", calories: 1710 },
  { day: "Fri", calories: 1450 },
  { day: "Sat", calories: 1900 },
  { day: "Sun", calories: 1550 },
];