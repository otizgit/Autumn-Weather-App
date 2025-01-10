import React from "react";

export default function ErrorPage() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="mb-2">Hmmm, I can't find that location.</h1>
        <img
          className="w-[250px] sm:w-[300px] opacity-85"
          src="https://ik.imagekit.io/uldpul7gs/tr:w-1200/earth.png?updatedAt=1736541194734"
          alt="image of earth"
        />
      </div>
    </div>
  );
}
