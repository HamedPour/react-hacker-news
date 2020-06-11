import React from "react";
import DropDownBoxContainer from "./styledComponents/DropDownBoxContainer";

const DropDownBox = (props) => {
  const data = [...props.data];
  const isVisible = props.isVisible;

  function itemSelected(e) {
    props.onItemSelected(e.target.innerHTML);
  }

  return (
    <DropDownBoxContainer isVisible={isVisible}>
      {data.map((item, index) => {
        return (
          <li onClick={itemSelected} key={index}>
            {item}
          </li>
        );
      })}
    </DropDownBoxContainer>
  );
};

export default DropDownBox;
