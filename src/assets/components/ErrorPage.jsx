import React from "react";

export default function ErrorPage() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="mb-2">Hmmm, I can't find that location.</h1>
        <div className="relative">
            <p className="absolute text-[3rem] rotate-12 right-10 z-20">❓</p>
          <img
            className="w-[250px] sm:w-[300px] opacity-85"
            src="https://ik.imagekit.io/uldpul7gs/tr:w-1200/earth.png?updatedAt=1736541194734"
            alt="image of earth"
          />
        </div>
      </div>
    </div>
  );
}
