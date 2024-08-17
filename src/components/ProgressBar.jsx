import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(prevTime - 100, 0));
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return <progress value={remainingTime} max={timer} />;
}
