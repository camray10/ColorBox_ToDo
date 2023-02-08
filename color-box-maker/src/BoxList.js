import React, { useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuidv4 } from 'uuid';
import "./BoxList.css"

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes((box) => [...box, { ...newBox, id: uuidv4() }]);
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter((b) => b.id !== id));
  };

  return (
    <>
      {" "}
      <div className="BoxList">
        <h1>Box List</h1>
        {boxes.map(({ id, width, height, backgroundColor }) => (
          <Box
            removeBox={removeBox}
            id={id}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            key={id}
          />
        ))}
      </div>
      <NewBoxForm addBox={addBox} />
    </>
  );
};

export default BoxList;
