import styled from "styled-components";

export default styled.ul`
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.isVisible ? "none" : "block")};
  min-width: 100px;
  list-style: none;
  background-color: #fff;
  position: absolute;
  top: 40px;
  & li {
    padding: 10px 5px 10px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
