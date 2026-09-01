import { useState } from "react";

import {
  User,
  Mail,
  Calendar,
  Ruler,
  Weight,
  Target,
  Activity,
  Save,
  Edit3,
} from "lucide-react";

import DashboardLayout from "../components/DashboardLayout";

export default function Profile() {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Lim",
    email: "john@example.com",
    age: "21",
    height: "170",
    weight: "70",
    goal: "Lose Weight",
    activity: "Moderately Active",
  });

  const [saved, setSaved] = useState(false);

  // ================================================================
  // HANDLE INPUT
  // ================================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((current) => ({
      ...current,
      [name]: value,
    }));

    setSaved(false);
  };

  // ================================================================
  // SAVE PROFILE
  // ================================================================

  const handleSave = () => {
    setEditing(false);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <DashboardLayout>
      {/* ============================================================
          PAGE HEADER
      ============================================================ */}

      <div className="mb-5 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold">
            Profile
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your personal information and fitness goals.
          </p>
        </div>

        {!editing ? (
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="flex items-center gap-2 rounded-lg bg-[#4CAF2F] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#3d9715]"
          >
            <Edit3 size={15} />

            Edit Profile
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-2 rounded-lg bg-[#4CAF2F] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#3d9715]"
          >
            <Save size={15} />

            Save Changes
          </button>
        )}

      </div>

      {/* ============================================================
          SAVED MESSAGE
      ============================================================ */}

      {saved && (
        <div className="mb-4 rounded-lg border border-green-200 bg-[#f0faeb] p-3 text-center text-xs font-semibold text-[#4CAF2F] dark:border-green-900 dark:bg-[#263322]">
          Profile updated successfully! ✓
        </div>
      )}

      {/* ============================================================
          PROFILE CONTENT
      ============================================================ */}

      <div className="grid grid-cols-3 gap-3">

        {/* ==========================================================
            PROFILE CARD
        ========================================================== */}

        <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

          <div className="flex flex-col items-center">

            {/* Profile icon */}

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">

              <User
                size={45}
                className="text-gray-500"
              />

            </div>

            <h2 className="mt-4 text-lg font-bold">
              {profile.firstName} {profile.lastName}
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              NutriFit AI Member
            </p>

          </div>

          <div className="mt-6 space-y-3">

            <ProfileInfo
              icon={Mail}
              label="Email"
              value={profile.email}
            />

            <ProfileInfo
              icon={Calendar}
              label="Age"
              value={`${profile.age} years old`}
            />

            <ProfileInfo
              icon={Ruler}
              label="Height"
              value={`${profile.height} cm`}
            />

            <ProfileInfo
              icon={Weight}
              label="Weight"
              value={`${profile.weight} kg`}
            />

          </div>
        </section>

        {/* ==========================================================
            PERSONAL INFORMATION
        ========================================================== */}

        <section className="col-span-2 rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

          <h2 className="text-lg font-bold">
            Personal Information
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Your basic personal details
          </p>

          <div className="mt-5 grid grid-cols-2 gap-4">

            {/* First name */}

            <InputField
              label="First Name"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              editing={editing}
            />

            {/* Last name */}

            <InputField
              label="Last Name"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              editing={editing}
            />

            {/* Email */}

            <InputField
              label="Email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              editing={editing}
              type="email"
            />

            {/* Age */}

            <InputField
              label="Age"
              name="age"
              value={profile.age}
              onChange={handleChange}
              editing={editing}
              type="number"
            />

            {/* Height */}

            <InputField
              label="Height (cm)"
              name="height"
              value={profile.height}
              onChange={handleChange}
              editing={editing}
              type="number"
            />

            {/* Weight */}

            <InputField
              label="Weight (kg)"
              name="weight"
              value={profile.weight}
              onChange={handleChange}
              editing={editing}
              type="number"
            />

          </div>
        </section>
      </div>

      {/* ============================================================
          FITNESS GOALS
      ============================================================ */}

      <section className="mt-3 rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

        <div className="flex items-center gap-2">

          <Target
            size={21}
            className="text-[#4CAF2F]"
          />

          <div>
            <h2 className="text-lg font-bold">
              Fitness Goals
            </h2>

            <p className="text-xs text-gray-500">
              Customize your fitness preferences
            </p>
          </div>

        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">

          {/* Goal */}

          <div>

            <label className="text-xs font-semibold">
              Primary Goal
            </label>

            <select
              name="goal"
              value={profile.goal}
              onChange={handleChange}
              disabled={!editing}
              className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#4CAF2F] disabled:cursor-not-allowed disabled:bg-gray-100 dark:border-gray-700 dark:bg-[#181818] dark:disabled:bg-[#333333]"
            >
              <option value="Lose Weight">
                Lose Weight
              </option>

              <option value="Maintain Weight">
                Maintain Weight
              </option>

              <option value="Gain Muscle">
                Gain Muscle
              </option>

              <option value="Improve Fitness">
                Improve Fitness
              </option>
            </select>

          </div>

          {/* Activity */}

          <div>

            <label className="text-xs font-semibold">
              Activity Level
            </label>

            <select
              name="activity"
              value={profile.activity}
              onChange={handleChange}
              disabled={!editing}
              className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#4CAF2F] disabled:cursor-not-allowed disabled:bg-gray-100 dark:border-gray-700 dark:bg-[#181818] dark:disabled:bg-[#333333]"
            >
              <option value="Sedentary">
                Sedentary
              </option>

              <option value="Lightly Active">
                Lightly Active
              </option>

              <option value="Moderately Active">
                Moderately Active
              </option>

              <option value="Very Active">
                Very Active
              </option>
            </select>

          </div>

        </div>
      </section>

      {/* ============================================================
          ACCOUNT SUMMARY
      ============================================================ */}

      <section className="mt-3 rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-colors dark:border-gray-700 dark:bg-[#222222]">

        <h2 className="text-lg font-bold">
          Fitness Summary
        </h2>

        <div className="mt-4 grid grid-cols-3 gap-3">

          <SummaryCard
            icon={Target}
            title="Current Goal"
            value={profile.goal}
          />

          <SummaryCard
            icon={Activity}
            title="Activity Level"
            value={profile.activity}
          />

          <SummaryCard
            icon={Weight}
            title="Current Weight"
            value={`${profile.weight} kg`}
          />

        </div>
      </section>
    </DashboardLayout>
  );
}

/* =================================================================
   PROFILE INFO
================================================================= */

function ProfileInfo({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 dark:border-gray-700">

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0faeb] dark:bg-[#2c3a28]">

        <Icon
          size={15}
          className="text-[#4CAF2F]"
        />

      </div>

      <div>
        <p className="text-[9px] text-gray-500">
          {label}
        </p>

        <p className="text-xs font-semibold">
          {value}
        </p>
      </div>

    </div>
  );
}

/* =================================================================
   INPUT FIELD
================================================================= */

function InputField({
  label,
  name,
  value,
  onChange,
  editing,
  type = "text",
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="text-xs font-semibold"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={!editing}
        className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#4CAF2F] disabled:cursor-not-allowed disabled:bg-gray-100 dark:border-gray-700 dark:bg-[#181818] dark:disabled:bg-[#333333]"
      />

    </div>
  );
}

/* =================================================================
   SUMMARY CARD
================================================================= */

function SummaryCard({
  icon: Icon,
  title,
  value,
}) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">

      <div className="flex items-center gap-2">

        <Icon
          size={18}
          className="text-[#4CAF2F]"
        />

        <span className="text-xs font-semibold">
          {title}
        </span>

      </div>

      <p className="mt-3 text-sm font-bold">
        {value}
      </p>

    </div>
  );
}