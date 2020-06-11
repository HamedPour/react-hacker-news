import styled from "styled-components";

export default styled.div`
  user-select: none;
  background-color: #f6f6ef;
  display: flex;
  min-height: 40px;
  align-items: center;
  border: 2px solid blue;

  @media only screen and (max-width: 600px) {
    padding-right: 20px;
    justify-content: flex-end;
  }

  & span {
    font-size: 0.8rem;
    padding: 0 5px;
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`;
