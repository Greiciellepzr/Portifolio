import styled from "styled-components";

export const Img = styled.img`
  width: 30vw;
  border-radius: 20px;

  @media (max-width: 800px) {
    width: 80vw;
  }
`;
export const Sessao = styled.section`
  display: flex;
  align-items: center;
  border: solid;
  height: 88vh;
  justify-content: center;
  background-color: hotpink;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const Div = styled.div`
  margin-left: 30px;

  @media (max-width: 800px) {
    width: 80vw;
    text-align: center;
  }
`;
