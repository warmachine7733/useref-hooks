import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function HookTimer() {
  const timerRef = useRef();
  const [timer, setTimer] = useState(0);
  const [buttonVal, setButtonVal] = useState("stop");

  useEffect(() => {
    getUser();
    startTimer();
    return () => {
      handleTimer();
    };
  }, []);
  const getUser = async () => {
    const result = await axios.get("http://localhost:9000/getBlogsFromDb");
    // console.log("..", await result.json());
    console.log("..", result);

  };
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
