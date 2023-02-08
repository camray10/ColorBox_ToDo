import React from "react";

const Box = ({
  id,
  width,
  height,
  backgroundColor,
  removeBox
}) => {
  return(
    <div>
      <div className="Box" key={id}
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: `${backgroundColor}`
        }}
      />
      <button onClick={() => removeBox(id)}>Remove The Box!</button>
    </div>
  );
}
export default Box;