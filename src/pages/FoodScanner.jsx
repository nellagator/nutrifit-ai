import { useRef, useState } from "react";

import {
  Camera,
  Upload,
  Image as ImageIcon,
  ChevronRight,
  X,
} from "lucide-react";

import DashboardLayout from "../components/DashboardLayout";

export default function FoodScanner() {
  const fileInputRef = useRef(null);

  const [selectedImage, setSelectedImage] =
    useState(null);

  const [fileName, setFileName] =
    useState("");

  /*
  ============================================================
  IMAGE SELECTION
  ============================================================
  */

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    const imageUrl = URL.createObjectURL(file);

    setSelectedImage(imageUrl);
  };

  /*
  ============================================================
  REMOVE IMAGE
  ============================================================
  */

  const removeImage = () => {
    setSelectedImage(null);
    setFileName("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  /*
  ============================================================
  OPEN FILE PICKER
  ============================================================
  */

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <DashboardLayout>

      <div className="grid grid-cols-2 gap-4">

        {/* ===================================================
            SCAN AREA
        =================================================== */}

        <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-[#222222]">

          <h2 className="text-lg font-bold">
            Scan Food
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Take a photo or upload an image of your food.
          </p>

          {/* ===============================================
              SCANNER
          =============================================== */}

          <div
            className="
              mt-5
              flex
              min-h-[285px]
              flex-col
              items-center
              justify-center
              rounded-lg
              border
              border-dashed
              border-[#4CAF2F]
              bg-[#f0ffe9]
              p-6
              dark:bg-[#253522]
            "
          >

            {selectedImage ? (
              <div className="relative w-full">

                <img
                  src={selectedImage}
                  alt="Selected food"
                  className="
                    mx-auto
                    max-h-[230px]
                    rounded-lg
                    object-contain
                  "
                />

                <button
                  type="button"
                  onClick={removeImage}
                  className="
                    absolute
                    right-2
                    top-2
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-red-500
                    text-white
                  "
                >
                  <X size={16} />
                </button>

                <p className="mt-3 text-center text-xs text-gray-500">
                  {fileName}
                </p>

              </div>
            ) : (
              <>
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-[#4CAF2F]
                    text-white
                  "
                >
                  <Camera size={30} />
                </div>

                <h3 className="mt-4 text-sm font-bold text-[#4CAF2F]">
                  Scan or Upload Food
                </h3>

                <p className="mt-1 max-w-xs text-center text-xs text-gray-500">
                  Take a photo of your food or upload
                  from your gallery.
                </p>
              </>
            )}

          </div>

          {/* ===============================================
              HIDDEN FILE INPUT
          =============================================== */}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* ===============================================
              UPLOAD BUTTON
          =============================================== */}

          <button
            type="button"
            onClick={openFilePicker}
            className="
              mt-4
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-gray-300
              bg-white
              py-3
              text-sm
              font-semibold
              text-[#4CAF2F]
              transition
              hover:bg-[#f0ffe9]
              dark:border-gray-700
              dark:bg-[#252525]
            "
          >
            <Upload size={17} />

            Upload Image
          </button>

        </section>

        {/* ===================================================
            RECENT SCANS
        =================================================== */}

        <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-[#222222]">

          <div className="flex items-center justify-between">

            <h2 className="text-lg font-bold">
              Recent Scans
            </h2>

            <button
              type="button"
              className="text-xs font-semibold text-[#4CAF2F]"
            >
              View All
            </button>

          </div>

          <div className="mt-4 space-y-3">

            <RecentScan
              image="/fruit.jpg"
              name="Mixed Fruits"
              calories="250 kcal"
              time="Today, 12:45 PM"
            />

            <RecentScan
              image="/vegetable-macaroni.jpg"
              name="Vegetable Macaroni"
              calories="450 kcal"
              time="Today, 8:15 AM"
            />

            <RecentScan
              image="/vegetable-salad.jpg"
              name="Vegetable Salad"
              calories="320 kcal"
              time="Today, 7:30 AM"
            />

          </div>

        </section>

      </div>

    </DashboardLayout>
  );
}

/*
============================================================
RECENT SCAN CARD
============================================================
*/

function RecentScan({
  image,
  name,
  calories,
  time,
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-2 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-[#303030]">

      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-gray-200">

        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

      </div>

      <div className="flex-1">

        <p className="text-sm font-semibold">
          {name}
        </p>

        <p className="mt-1 text-xs font-semibold text-[#4CAF2F]">
          {calories}
        </p>

        <p className="mt-1 text-[10px] text-gray-500">
          {time}
        </p>

      </div>

      <ChevronRight
        size={18}
        className="text-gray-400"
      />

    </div>
  );
}