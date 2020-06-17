import styled from "styled-components";

export default styled.div`
  color: ${(props) => (props.searchedValue === "" ? "inherit" : "#0b6623")};
  padding-bottom: 5px;
  & a:nth-child(1) {
    min-height: 40px;
  }

  & a:nth-child(2) {
    cursor: pointer;
    font-size: 0.9rem;
    color: #828282;
    padding-left: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
