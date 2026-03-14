import React from "react";

const NumberPattern = () => {
  let num = 1;
  let rows = [];

  for (let i = 1; i <= 5; i++) {
    let row = [];
    
    for (let j = 1; j <= i; j++) {
      row.push(num);
      num++;
    }

    rows.push(row);
  }

  return (
    <div>
      <h2>Number Pattern</h2>
      {rows.map((row, index) => (
        <div key={index}>
          {row.join(" ")}
        </div>
      ))}
    </div>
  );
};

export default NumberPattern;