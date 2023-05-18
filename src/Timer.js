

import React, { useState, useEffect } from "react";

export default function Timer({ createTime, seconds, onTimerDelete }) {
  const [remainingTime, setRemainingTime] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 0.01);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (remainingTime <= 0) {
      // Timer expired, remove it
      onTimerDelete(createTime);
    }
  }, [remainingTime, createTime, onTimerDelete]);

  const formattedCreateTime = new Date(createTime).toLocaleString();
  const formattedRemainingTime = remainingTime.toFixed(2).replace(".", ",");

  return (
    <div>
      <p>Created: {formattedCreateTime}</p>
      <p>Remaining time: {formattedRemainingTime}</p>
      <button onClick={() => onTimerDelete(createTime)}>Delete</button>
    </div>
  );
}
