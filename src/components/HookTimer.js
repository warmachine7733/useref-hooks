import React, { useEffect, useRef, useState } from "react";

export default function HookTimer() {
  const timerRef = useRef();
  const [timer, setTimer] = useState(0);
  const [buttonVal, setButtonVal] = useState("stop");

  useEffect(() => {
    startTimer();
    return () => {
      handleTimer();
    };
  }, []);
  const startTimer = () => {
    setButtonVal("stop");
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };
  const handleTimer = () => {
    setTimer(0);
    setButtonVal("start");
    clearInterval(timerRef.current);
    if (buttonVal === "start") {
      startTimer();
    }
  };
  return (
    <div>
      <h5>Hook Timer</h5>
      <div>timer - {timer}</div>
      <button onClick={() => handleTimer()}>{buttonVal}</button>
    </div>
  );
}
