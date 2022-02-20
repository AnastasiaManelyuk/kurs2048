import React, { useState } from "react";
import { Button } from "./components/Button";
import { Game } from "./components/Game";

import "./App.less";

/* eslint-disable react/jsx-no-target-blank */
export const App = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleRestart = () => {
    setDate(new Date());
  };

  return (
    <div className="App">
      <div className="header">
        <div>
          <h1>Игра 2048</h1>
        </div>
        <div>
          <Button onClick={handleRestart}>Заново</Button>
        </div>
      </div>
      <Game key={date.toISOString()} />
      <div>
        <p>
          Управление: стрелка вниз, стрелка влево, стрелка вправо, стрелка вниз.
        </p>
      </div>
    </div>
  );
};
/* eslint-enable react/jsx-no-target-blank */
