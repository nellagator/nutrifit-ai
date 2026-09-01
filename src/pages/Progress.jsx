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
  TrendingDown,
  Dumbbell,
  Flame,
  Footprints,
  Target,
  Trophy,
} from "lucide-react";

import DashboardLayout from "../components/DashboardLayout";

export default function Progress() {
  return (
    <DashboardLayout>
      {/* ============================================================
          PAGE HEADER
      ============================================================ */}

      <div className="mb-5">
        <h1 className="text-2xl font-bold">
          Progress
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Track your fitness journey and see how far you've come.
        </p>
      </div>

      {/* ============================================================
          SUMMARY CARDS
      ============================================================ */}

      <div className="grid grid-cols-4 gap-3">

        {/* Weight */}

        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

          <div className="flex items-center gap-2">
            <TrendingDown
              size={20}
              className="text-green-600"
            />

            <span className="text-xs font-semibold">
              Weight
            </span>
          </div>

          <div className="mt-4">
            <span className="text-2xl font-bold">
              70 kg
            </span>
          </div>

          <p className="mt-1 text-xs font-semibold text-green-600">
            ▼ 2.5 kg
          </p>

          <p className="mt-1 text-[10px] text-gray-500">
            Since last month
          </p>
        </div>

        {/* Workouts */}

        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

          <div className="flex items-center gap-2">
            <Dumbbell
              size={20}
              className="text-[#4CAF2F]"
            />

            <span className="text-xs font-semibold">
              Workouts
            </span>
          </div>

          <div className="mt-4">
            <span className="text-2xl font-bold">
              18
            </span>

            <span className="ml-1 text-xs text-gray-500">
              sessions
            </span>
          </div>

          <p className="mt-1 text-xs font-semibold text-green-600">
            +4 this month
          </p>

          <p className="mt-1 text-[10px] text-gray-500">
            Keep moving!
          </p>
        </div>

        {/* Calories */}

        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

          <div className="flex items-center gap-2">
            <Flame
              size={20}
              className="text-orange-400"
            />

            <span className="text-xs font-semibold">
              Calories Burned
            </span>
          </div>

          <div className="mt-4">
            <span className="text-2xl font-bold">
              12,480
            </span>
          </div>

          <p className="mt-1 text-xs font-semibold text-green-600">
            +8.4%
          </p>

          <p className="mt-1 text-[10px] text-gray-500">
            Compared to last month
          </p>
        </div>

        {/* Steps */}

        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

          <div className="flex items-center gap-2">
            <Footprints
              size={20}
              className="text-green-600"
            />

            <span className="text-xs font-semibold">
              Average Steps
            </span>
          </div>

          <div className="mt-4">
            <span className="text-2xl font-bold">
              8,421
            </span>
          </div>

          <p className="mt-1 text-xs font-semibold text-green-600">
            84% of goal
          </p>

          <p className="mt-1 text-[10px] text-gray-500">
            Daily average
          </p>
        </div>
      </div>

      {/* ============================================================
          MAIN PROGRESS SECTION
      ============================================================ */}

      <div className="mt-3 grid grid-cols-2 gap-3">

        {/* ==========================================================
            WEIGHT PROGRESS
        ========================================================== */}

        <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-lg font-bold">
                Weight Progress
              </h2>

              <p className="mt-1 text-[10px] text-gray-500">
                Your weight changes over the past weeks
              </p>
            </div>

            <div className="text-right">
              <p className="text-xl font-bold">
                70 kg
              </p>

              <p className="text-[10px] font-semibold text-green-600">
                ▼ 2.5 kg
              </p>
            </div>

          </div>

          <div className="mt-4 h-[230px] w-full">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <AreaChart
                data={weightData}
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 0,
                }}
              >

                <CartesianGrid
                  stroke="#e5e7eb"
                  vertical={false}
                />

                <XAxis
                  dataKey="week"
                  tick={{
                    fontSize: 9,
                    fill: "#6b7280",
                  }}
                  axisLine={{
                    stroke: "#9ca3af",
                  }}
                  tickLine={false}
                />

                <YAxis
                  domain={[68, 74]}
                  ticks={[
                    68,
                    70,
                    72,
                    74,
                  ]}
                  tick={{
                    fontSize: 9,
                    fill: "#6b7280",
                  }}
                  axisLine={false}
                  tickLine={false}
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
                    r: 3,
                    fill: "#4CAF2F",
                    strokeWidth: 0,
                  }}
                  activeDot={{
                    r: 5,
                  }}
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>
        </section>

        {/* ==========================================================
            WORKOUT PROGRESS
        ========================================================== */}

        <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-lg font-bold">
                Workout Progress
              </h2>

              <p className="mt-1 text-[10px] text-gray-500">
                Your weekly workout activity
              </p>
            </div>

            <Dumbbell
              size={22}
              className="text-[#4CAF2F]"
            />

          </div>

          <div className="mt-5 space-y-4">

            <ProgressBar
              label="Strength Training"
              value="75%"
              width="75%"
            />

            <ProgressBar
              label="Cardio"
              value="60%"
              width="60%"
            />

            <ProgressBar
              label="Flexibility"
              value="45%"
              width="45%"
            />

            <ProgressBar
              label="Endurance"
              value="70%"
              width="70%"
            />

          </div>

          {/* Weekly total */}

          <div className="mt-6 rounded-lg bg-[#f0faeb] p-4 dark:bg-[#2c3a28]">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dcffcc] dark:bg-[#394d32]">

                <Target
                  size={20}
                  className="text-[#4CAF2F]"
                />

              </div>

              <div>
                <p className="text-sm font-bold">
                  Weekly Goal
                </p>

                <p className="text-[10px] text-gray-500">
                  4 of 5 workouts completed
                </p>
              </div>

            </div>

            <div className="mt-3 h-2 rounded-full bg-gray-200 dark:bg-gray-700">

              <div className="h-2 w-[80%] rounded-full bg-[#4CAF2F]" />

            </div>

          </div>
        </section>
      </div>

      {/* ============================================================
          ACHIEVEMENTS
      ============================================================ */}

      <section className="mt-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

        <div className="flex items-center gap-2">

          <Trophy
            size={21}
            className="text-orange-400"
          />

          <div>
            <h2 className="text-lg font-bold">
              Achievements
            </h2>

            <p className="text-[10px] text-gray-500">
              Milestones you've reached
            </p>
          </div>

        </div>

        <div className="mt-4 grid grid-cols-4 gap-3">

          <Achievement
            title="7 Day Streak"
            description="Stayed active for 7 days"
            icon="🔥"
          />

          <Achievement
            title="10K Steps"
            description="Reached 10,000 steps"
            icon="👟"
          />

          <Achievement
            title="First Workout"
            description="Completed your first workout"
            icon="💪"
          />

          <Achievement
            title="Goal Crusher"
            description="Reached your weekly goal"
            icon="🏆"
          />

        </div>
      </section>
    </DashboardLayout>
  );
}

/* =================================================================
   WEIGHT DATA
================================================================= */

const weightData = [
  {
    week: "Week 1",
    weight: 72.5,
  },
  {
    week: "Week 2",
    weight: 72,
  },
  {
    week: "Week 3",
    weight: 71.5,
  },
  {
    week: "Week 4",
    weight: 71,
  },
  {
    week: "Week 5",
    weight: 70.5,
  },
  {
    week: "Week 6",
    weight: 70,
  },
];

/* =================================================================
   PROGRESS BAR
================================================================= */

function ProgressBar({
  label,
  value,
  width,
}) {
  return (
    <div>

      <div className="flex items-center justify-between">

        <span className="text-xs font-semibold">
          {label}
        </span>

        <span className="text-[10px] font-semibold text-[#4CAF2F]">
          {value}
        </span>

      </div>

      <div className="mt-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">

        <div
          className="h-2 rounded-full bg-[#4CAF2F]"
          style={{
            width,
          }}
        />

      </div>
    </div>
  );
}

/* =================================================================
   ACHIEVEMENT
================================================================= */

function Achievement({
  title,
  description,
  icon,
}) {
  return (
    <div className="rounded-lg border border-gray-200 p-3 transition-colors dark:border-gray-700">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0faeb] text-lg dark:bg-[#2c3a28]">
          {icon}
        </div>

        <div>
          <p className="text-xs font-bold">
            {title}
          </p>

          <p className="mt-1 text-[9px] text-gray-500">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}