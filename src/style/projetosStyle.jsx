import styled from "styled-components";

export const Img = styled.img`
  width: 30vw;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
export const Sessao = styled.div`
  display: flex;
  height: 88vh;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const Container = styled.section`
  width: 30vw;
  background-color: chocolate;
  text-align: center;
  border-radius: 20px;
`;
