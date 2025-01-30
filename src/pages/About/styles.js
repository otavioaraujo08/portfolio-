import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-direction: column;
  text-align: left;

  @media (max-width: 740px) {
    gap: 2rem;
  }
`;

export const ApresentationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
