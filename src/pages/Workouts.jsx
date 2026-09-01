import {
  Play,
  Clock,
  Flame,
  Dumbbell,
} from "lucide-react";

import DashboardLayout from "../components/DashboardLayout";

export default function Workouts() {
  return (
    <DashboardLayout>

      {/* =====================================================
          WORKOUT SUMMARY
      ===================================================== */}

      <div className="grid grid-cols-3 gap-3">

        <StatCard
          icon={<Dumbbell size={22} />}
          title="Workouts"
          value="5"
          subtitle="This week"
        />

        <StatCard
          icon={<Clock size={22} />}
          title="Workout Time"
          value="2h 45m"
          subtitle="This week"
        />

        <StatCard
          icon={<Flame size={22} />}
          title="Calories Burned"
          value="1,240"
          subtitle="This week"
        />

      </div>

      {/* =====================================================
          WORKOUT PROGRAMS
      ===================================================== */}

      <section className="mt-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-[#222222]">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-lg font-bold">
              Recommended Workouts
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Workouts selected for your fitness goals.
            </p>

          </div>

        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">

          <WorkoutCard
            title="Upper Body Strength"
            duration="35 min"
            level="Intermediate"
            description="Build strength and tone your upper body."
          />

          <WorkoutCard
            title="Lower Body Power"
            duration="40 min"
            level="Intermediate"
            description="Strengthen your legs and improve mobility."
          />

          <WorkoutCard
            title="Full Body HIIT"
            duration="25 min"
            level="Advanced"
            description="High intensity training for your entire body."
          />

        </div>

      </section>

    </DashboardLayout>
  );
}

/*
============================================================
STAT CARD
============================================================
*/

function StatCard({
  icon,
  title,
  value,
  subtitle,
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-[#222222]">

      <div className="flex items-center gap-2 text-[#4CAF2F]">
        {icon}

        <span className="text-xs font-semibold text-gray-500">
          {title}
        </span>
      </div>

      <p className="mt-4 text-2xl font-bold">
        {value}
      </p>

      <p className="mt-1 text-xs text-gray-500">
        {subtitle}
      </p>

    </div>
  );
}

/*
============================================================
WORKOUT CARD
============================================================
*/

function WorkoutCard({
  title,
  duration,
  level,
  description,
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">

      <div className="flex h-32 items-center justify-center bg-gray-200 dark:bg-[#333333]">

        <Dumbbell
          size={40}
          className="text-gray-500"
        />

      </div>

      <div className="p-3">

        <h3 className="text-sm font-bold">
          {title}
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          {duration} • {level}
        </p>

        <p className="mt-2 text-xs text-gray-500">
          {description}
        </p>

        <button
          type="button"
          className="
            mt-3
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-md
            bg-[#4CAF2F]
            py-2
            text-xs
            font-semibold
            text-white
            hover:bg-green-700
          "
        >
          <Play
            size={13}
            fill="white"
          />

          Start Workout
        </button>

      </div>

    </div>
  );
}