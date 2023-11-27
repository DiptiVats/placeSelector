import { useState, useEffect } from "react";
export default function ProgressBar({ timer }) {
  const [remaingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("timr");

      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remaingTime} max={timer} />;
}
