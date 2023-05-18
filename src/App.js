import React, { useState } from "react";
import "./App.css";
import Timer from "./Timer";

export default function App() {
  const [timers, setTimers] = useState([]);
  const [newTimerSeconds, setNewTimerSeconds] = useState("");

  const handleNewTimerSubmit = (e) => {
    e.preventDefault();
    if (newTimerSeconds === "") return;

    const newTimer = {
      createTime: new Date(),
      seconds: parseFloat(newTimerSeconds)
    };

    setTimers((prevTimers) => [...prevTimers, newTimer]);
    setNewTimerSeconds("");
  };

  const handleTimerDelete = (createTime) => {
    setTimers((prevTimers) =>
      prevTimers.filter((timer) => timer.createTime !== createTime)
    );
  };

  return (
    <div className="container">
      <div className="timers">
        <h2>Timers</h2>
        {timers.map((timer) => (
          <Timer
            key={timer.createTime}
            createTime={timer.createTime}
            seconds={timer.seconds}
            onTimerDelete={handleTimerDelete}
          />
        ))}
      </div>
      <div className="create-timer">
        <h2>Create Timer</h2>
        <form onSubmit={handleNewTimerSubmit}>
          <label>
            Seconds:
            <input
              type="number"
              value={newTimerSeconds}
              onChange={(e) => setNewTimerSeconds(e.target.value)}
            />
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}



