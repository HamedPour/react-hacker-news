import styled from "styled-components";

export default styled.ul`
  padding: 3px 5px 3px 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: relative;
  @media only screen and (max-width: 600px) {
    margin: 0 5px;
  }

  & li {
    list-style: none;
    font-size: 0.8rem;
    padding: 0 3px;
  }
`;
