import styled from "styled-components";

export default styled.nav`
  & ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;

    & li {
      & button {
        cursor: pointer;
        font-size: 0.7rem;
        padding: 5px;
        margin: 10px 2px;
      }
    }
  }
`;
