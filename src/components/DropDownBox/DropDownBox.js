import React from "react";
import DropDownBoxContainer from "./styledComponents/DropDownBoxContainer";

const DropDownBox = (props) => {
  let data = [...props.data];
  return (
    <DropDownBoxContainer>
      {data.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </DropDownBoxContainer>
  );
};

export default DropDownBox;
