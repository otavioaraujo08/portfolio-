import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-direction: column;
  text-align: left;

  @media (max-width: 740px) {
    gap: 2rem;
    height: 90vh;
  }
`;

export const ApresentationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const InsigthsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: left;
  gap: 5rem;
`;
