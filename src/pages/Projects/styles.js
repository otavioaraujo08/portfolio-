import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-direction: column;
  text-align: left;

  @media (max-width: 740px) {
    height: 90vh;
  }
`;