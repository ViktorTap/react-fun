import React from "react";

export default function Square({ color, handleChange }) {
  return (
    <>
      <div className="square--main" style={{ backgroundColor: color }}>
        <p>change color</p>
      </div>
      <label htmlFor="color-input"></label>
      <input
        id="color-input"
        type="text"
        onChange={(event) => handleChange(event)}
        autoFocus
        autoComplete="off"
        placeholder="enter any color you know"
      />
    </>
  );
}
