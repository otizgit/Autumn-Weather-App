import React from "react";
import { GridLoader } from "react-spinners";

export default function LoadingScreen() {
  return (
    <div className="z-[13000] fixed bg-black inset-0 w-full h-full grid place-items-center">
    <GridLoader
      color="#116aa2"
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
  )
}
