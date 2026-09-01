import { useState } from "react";

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
  Dumbbell,
  Droplets,
  Footprints,
  Play,
  Plus,
  Flame,
} from "lucide-react";

import DashboardLayout from "../components/DashboardLayout";

export default function Dashboard() {
  const [water, setWater] = useState(1.8);
  const [workoutStarted, setWorkoutStarted] = useState(false);

  // ================================================================
  // WATER
  // ================================================================

  const addWater = () => {
    setWater((current) => {
      const newAmount = Math.min(current + 0.25, 2.5);

      return Number(newAmount.toFixed(2));
    });
  };

  // ================================================================
  // WORKOUT
  // ================================================================

  const startWorkout = () => {
    setWorkoutStarted(true);

    setTimeout(() => {
      setWorkoutStarted(false);
    }, 2500);
  };

  return (
    <DashboardLayout>
      {/* ============================================================
          DASHBOARD CONTENT
      ============================================================ */}

      {/* ============================================================
          STAT CARDS
      ============================================================ */}

      <div className="grid grid-cols-4 gap-3">

        {/* ==========================================================
            DAILY CALORIES
        ========================================================== */}

        <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

          <div className="flex justify-between">
            <span className="text-xs font-semibold">
              Daily Calories
            </span>

            <span className="text-xs font-bold text-[#4CAF2F]">
              84%
            </span>
          </div>

          <div className="mt-2">
            <span className="text-xl font-bold">
              1850
            </span>

            <span className="text-xs text-gray-500">
              /2200 kcal
            </span>
          </div>

          <div className="mt-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
            <div className="h-2 w-[84%] rounded-full bg-[#69bd3e]" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-1">
            <Macro
              name="Protein"
              value="79/120g"
            />

            <Macro
              name="Carbs"
              value="165/250g"
            />

            <Macro
              name="Fat"
              value="45/70g"
            />
          </div>
        </div>

        {/* ==========================================================
            HYDRATION
        ========================================================== */}

        <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

          <div className="flex items-center gap-2">
            <Droplets
              size={20}
              className="text-blue-600"
            />

            <span className="text-xs font-semibold">
              Hydration
            </span>
          </div>

          <div className="mt-4">
            <span className="text-2xl font-bold">
              {water}
            </span>

            <span className="text-sm text-gray-500">
              / 2.5 L
            </span>
          </div>

          <p className="mt-1 text-xs font-semibold text-gray-500">
            {Math.round((water / 2.5) * 100)}% of daily goal
          </p>

          <div className="mt-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="h-2 rounded-full bg-blue-600 transition-all"
              style={{
                width: `${(water / 2.5) * 100}%`,
              }}
            />
          </div>

          <button
            type="button"
            onClick={addWater}
            disabled={water >= 2.5}
            className="ml-auto mt-2 flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:hover:bg-gray-700"
            title="Add 250ml water"
          >
            <Plus size={15} />
          </button>
        </div>

        {/* ==========================================================
            STEPS
        ========================================================== */}

        <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

          <div className="flex items-center gap-2">
            <Footprints
              size={21}
              className="text-green-600"
            />

            <span className="text-xs font-semibold">
              Steps
            </span>
          </div>

          <div className="mt-5">
            <span className="text-2xl font-bold">
              7 842
            </span>

            <span className="text-sm text-gray-500">
              / 10 000
            </span>
          </div>

          <p className="mt-1 text-xs font-semibold text-gray-500">
            78% of daily goal
          </p>

          <div className="mt-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
            <div className="h-2 w-[78%] rounded-full bg-[#4CAF2F]" />
          </div>
        </div>

        {/* ==========================================================
            STREAK
        ========================================================== */}

        <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

          <div className="flex items-center gap-2">
            <Flame
              size={23}
              className="text-orange-400"
            />

            <span className="text-xs font-semibold">
              Streak
            </span>
          </div>

          <div className="mt-5">
            <span className="text-2xl font-bold">
              6
            </span>

            <span className="ml-1 text-sm font-semibold">
              Days
            </span>
          </div>

          <p className="mt-1 text-xs text-gray-500">
            Keep it up!
          </p>

          <div className="mt-2 flex justify-between text-[10px]">

            {[
              "M",
              "T",
              "W",
              "T",
              "F",
              "S",
              "S",
            ].map((day, index) => (

              <div
                key={index}
                className="text-center"
              >

                <div
                  className={`mx-auto mb-1 flex h-4 w-4 items-center justify-center rounded-full text-white ${
                    index === 6
                      ? "border border-orange-400 text-orange-400"
                      : "bg-green-600"
                  }`}
                >
                  {index === 6 ? "" : "✓"}
                </div>

                {day}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          LOWER SECTION
      ============================================================ */}

      <div className="mt-3 grid grid-cols-2 gap-3">

        {/* ==========================================================
            TODAY'S PLAN
        ========================================================== */}

        <section className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              Todays Plan
            </h2>

            <button
              type="button"
              className="text-xs font-semibold text-[#4CAF2F] hover:underline"
            >
              View All
            </button>

          </div>

          <h3 className="mt-1 text-sm font-semibold">
            Meals
          </h3>

          <div className="mt-2 grid grid-cols-4 gap-2">

            <Meal
              title="Breakfast"
              calories="420 kcal"
              image="/breakfast.jpg"
            />

            <Meal
              title="Lunch"
              calories="620 kcal"
              image="/lunch.jpg"
            />

            <Meal
              title="Dinner"
              calories="560 kcal"
              image="/dinner.jpg"
            />

            <Meal
              title="Snack"
              calories="250 kcal"
              image="/snack.jpg"
            />

          </div>

          <h3 className="mt-3 text-sm font-semibold">
            Workout
          </h3>

          <div className="mt-2 flex items-center gap-3 rounded-lg border border-gray-200 p-2 dark:border-gray-700">

            <div className="flex h-20 w-20 items-center justify-center rounded-md bg-gray-200 dark:bg-gray-700">

              <Dumbbell className="text-gray-500" />

            </div>

            <div className="flex-1">

              <h4 className="font-bold">
                Upper Body Strength
              </h4>

              <p className="text-xs text-gray-500">
                35 min • Intermediate
              </p>

              <p className="mt-2 text-xs text-gray-500">
                Build strength and tone your upper body
                with this workout
              </p>

            </div>

            <button
              type="button"
              onClick={startWorkout}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white transition hover:bg-green-700"
              title="Start workout"
            >
              <Play
                size={14}
                fill="white"
              />
            </button>

          </div>

          {workoutStarted && (
            <div className="mt-2 rounded-md bg-[#dcffcc] p-2 text-center text-xs font-semibold text-[#4CAF2F]">
              Workout started! 💪
            </div>
          )}

        </section>

        {/* ==========================================================
            INSIGHTS
        ========================================================== */}

        <section>

          {/* ========================================================
              INSIGHTS HEADER + CALORIES TREND
          ======================================================== */}

          <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-bold">
                Insights
              </h2>

              <span className="text-[10px] font-semibold text-gray-500">
                This Week
              </span>

            </div>

            {/* ======================================================
                CALORIES TREND
            ====================================================== */}

            <div className="mt-3 rounded-md border border-gray-100 p-2 dark:border-gray-700">

              <div className="flex items-center justify-between">

                <p className="text-[10px] font-semibold">
                  Calories Trend
                </p>

                <p className="text-[9px] font-semibold text-gray-500">
                  Average: 1718 kcal
                </p>

              </div>

              <div className="mt-1 h-[145px] w-full">

                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >

                  <AreaChart
                    data={calorieData}
                    margin={{
                      top: 5,
                      right: 8,
                      left: 5,
                      bottom: 0,
                    }}
                  >

                    <CartesianGrid
                      stroke="#e5e7eb"
                      vertical={false}
                    />

                    <XAxis
                      dataKey="day"
                      tick={{
                        fontSize: 8,
                        fill: "#6b7280",
                      }}
                      axisLine={{
                        stroke: "#9ca3af",
                      }}
                      tickLine={false}
                    />

                    <YAxis
                      domain={[0, 2400]}
                      ticks={[
                        0,
                        800,
                        1600,
                        2400,
                      ]}
                      tickFormatter={(value) => {
                        if (value === 2400) return "2.4k";
                        if (value === 1600) return "1.6k";
                        if (value === 800) return "800";

                        return "0";
                      }}
                      tick={{
                        fontSize: 8,
                        fill: "#6b7280",
                      }}
                      axisLine={false}
                      tickLine={false}
                      width={30}
                    />

                    <Tooltip
                      formatter={(value) => [
                        `${value} kcal`,
                        "Calories",
                      ]}
                    />

                    <Area
                      type="monotone"
                      dataKey="calories"
                      stroke="#00e51a"
                      strokeWidth={2}
                      fill="#c9f9ce"
                      fillOpacity={0.8}
                      dot={{
                        r: 3,
                        fill: "#00e51a",
                        strokeWidth: 0,
                      }}
                      activeDot={{
                        r: 5,
                      }}
                    />

                  </AreaChart>

                </ResponsiveContainer>

              </div>

            </div>

          </div>

          {/* ========================================================
              INSIGHT CARDS
          ======================================================== */}

          <div className="mt-3 grid grid-cols-2 gap-3">

            {/* ======================================================
                MACRONUTRIENT DISTRIBUTION
            ====================================================== */}

            <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

              <p className="text-[10px] font-semibold">
                Macronutrient Distribution
              </p>

              <div className="mt-3 flex items-center justify-center">

                <div className="relative flex h-24 w-24 items-center justify-center">

                  {/* Donut chart */}

                  <div className="absolute inset-0 rounded-full bg-[conic-gradient(#4CAF2F_0deg_150deg,#60a5fa_150deg_245deg,#f59e0b_245deg_360deg)]" />

                  <div className="absolute inset-[15px] rounded-full bg-white dark:bg-[#222222]" />

                  <div className="relative text-center">

                    <p className="text-[9px] font-bold">
                      Today
                    </p>

                    <p className="text-[8px] text-gray-500">
                      1850 kcal
                    </p>

                  </div>

                </div>

              </div>

              {/* Legend */}

              <div className="mt-3 space-y-1">

                <div className="flex items-center justify-between text-[8px]">

                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-[#4CAF2F]" />
                    Protein
                  </span>

                  <span className="font-semibold">
                    32%
                  </span>

                </div>

                <div className="flex items-center justify-between text-[8px]">

                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    Carbs
                  </span>

                  <span className="font-semibold">
                    38%
                  </span>

                </div>

                <div className="flex items-center justify-between text-[8px]">

                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-orange-400" />
                    Fat
                  </span>

                  <span className="font-semibold">
                    30%
                  </span>

                </div>

              </div>

            </div>

            {/* ======================================================
                WEIGHT PROGRESS
            ====================================================== */}

            <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

              <p className="text-[10px] font-semibold">
                Weight Progress
              </p>

              <div className="mt-3">

                <span className="text-sm font-bold">
                  70 kg
                </span>

                <span className="ml-2 text-[9px] font-semibold text-green-600">
                  ▼ 2.5 kg
                </span>

              </div>

              <p className="mt-1 text-[8px] text-gray-500">
                Since last month
              </p>

              {/* Weight graph */}

              <div className="mt-4 h-16 w-full">

                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >

                  <AreaChart
                    data={weightData}
                    margin={{
                      top: 5,
                      right: 2,
                      left: 2,
                      bottom: 0,
                    }}
                  >

                    <CartesianGrid
                      stroke="#e5e7eb"
                      vertical={false}
                    />

                    <XAxis
                      dataKey="day"
                      tick={{
                        fontSize: 7,
                        fill: "#6b7280",
                      }}
                      axisLine={false}
                      tickLine={false}
                    />

                    <YAxis
                      domain={[68, 74]}
                      hide
                    />

                    <Tooltip
                      formatter={(value) => [
                        `${value} kg`,
                        "Weight",
                      ]}
                    />

                    <Area
                      type="monotone"
                      dataKey="weight"
                      stroke="#4CAF2F"
                      strokeWidth={2}
                      fill="#dcffcc"
                      fillOpacity={0.8}
                      dot={{
                        r: 2,
                        fill: "#4CAF2F",
                        strokeWidth: 0,
                      }}
                      activeDot={{
                        r: 4,
                      }}
                    />

                  </AreaChart>

                </ResponsiveContainer>

              </div>

            </div>

          </div>

        </section>

      </div>

    </DashboardLayout>
  );
}

/* =================================================================
   CALORIE DATA
================================================================= */

const calorieData = [
  {
    day: "Mon",
    calories: 1550,
  },
  {
    day: "Tue",
    calories: 1720,
  },
  {
    day: "Wed",
    calories: 1600,
  },
  {
    day: "Thu",
    calories: 1710,
  },
  {
    day: "Fri",
    calories: 1450,
  },
  {
    day: "Sat",
    calories: 1900,
  },
  {
    day: "Sun",
    calories: 1550,
  },
];

/* =================================================================
   WEIGHT DATA
================================================================= */

const weightData = [
  {
    day: "W1",
    weight: 72.5,
  },
  {
    day: "W2",
    weight: 72,
  },
  {
    day: "W3",
    weight: 71.2,
  },
  {
    day: "W4",
    weight: 70.8,
  },
  {
    day: "W5",
    weight: 70,
  },
];

/* =================================================================
   MACRO
================================================================= */

function Macro({ name, value }) {
  return (
    <div className="rounded-md border border-gray-200 p-1.5 dark:border-gray-700">

      <p className="text-[10px] font-bold">
        {name}
      </p>

      <p className="text-[8px] text-gray-500">
        {value}
      </p>

      <div className="mt-1 h-1 rounded-full bg-gray-200 dark:bg-gray-700">

        <div className="h-1 w-[70%] rounded-full bg-green-500" />

      </div>

    </div>
  );
}

/* =================================================================
   MEAL
================================================================= */

function Meal({ title, calories, image }) {
  return (
    <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm dark:border-gray-700">

      <div className="h-16 bg-gray-200 dark:bg-gray-700">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

      </div>

      <div className="p-1">

        <p className="text-[10px] font-bold">
          {title}
        </p>

        <p className="text-[8px] text-gray-500">
          {calories}
        </p>

      </div>

    </div>
  );
}