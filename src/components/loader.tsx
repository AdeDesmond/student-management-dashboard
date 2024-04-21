"use client";

import dynamic from "next/dynamic";
import * as animationData from "../../public/svgs/loader.json";
import { useEffect, useState } from "react";
const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

import { type EventListener } from "react-lottie";

export const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const eventListeners: EventListener[] = [
    {
      eventName: "complete",
      callback: () => console.log("animation completed"),
    },
  ];

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={80}
        width={80}
        eventListeners={eventListeners}
      />
    </div>
  );
};
