import styled from "styled-components";

export default styled.div`
  user-select: none;
  color: #828282;
  display: flex;
  min-height: 40px;
  align-items: center;

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
