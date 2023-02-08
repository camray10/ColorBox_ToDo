import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./NewBoxForm.css"


const NewBoxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: ""
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addBox({ ...formData, id: uuidv4() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  };
  return (
    <>
      <form className="NewBoxForm" onSubmit={handleSubmit}>
        <label htmlFor="width">Width: </label>
        <input
          id="width"
          type="number"
          name="width"
          placeholder="width"
          value={formData.width}
          onChange={handleChange}
        ></input>

        <label htmlFor="height">Height: </label>
        <input
          id="height"
          type="number"
          name="height"
          placeholder="height"
          value={formData.height}
          onChange={handleChange}
        ></input>

        <label htmlFor="backgroundColor">Background Color: </label>
        <input
          id="backgroundColor"
          type="text"
          name="backgroundColor"
          placeholder="background-color"
          value={formData.backgroundColor}
          onChange={handleChange}
        ></input>
        <br></br>
        <button>Add Box!</button>
      </form>
    </>
  );
};


export default NewBoxForm;
