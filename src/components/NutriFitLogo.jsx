export default function NutriFitLogo({
  light = false,
  small = false,
}) {
  return (
    <div
      className={`flex items-center gap-2 ${
        small ? "scale-90 origin-left" : ""
      }`}
    >
      <img
        src="/nutrifit-logo.png"
        alt="NutriFit AI Logo"
        className={small ? "w-8 h-8 object-contain" : "w-10 h-10 object-contain"}
      />

      <span
        className={`font-bold ${
          light ? "text-[#3d9715]" : "text-green-500"
        } ${small ? "text-sm" : "text-xl"}`}
      >
        NutriFit AI
      </span>
    </div>
  );
}