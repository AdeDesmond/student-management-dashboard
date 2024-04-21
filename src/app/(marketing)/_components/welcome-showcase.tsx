"use client";
import dynamic from "next/dynamic";
import * as animationData from "../../../../public/lottie-files/one.json";
import { useEffect, useState } from "react";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import { type EventListener } from "react-lottie";
export const WelcomeShowCase = () => {
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
      callback: () => console.log("Animation completed"),
    },
    {
      eventName: "loopComplete",
      callback: () => console.log("Loop completed"),
    },
  ];

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        eventListeners={eventListeners}
      />
    </div>
  );
};
