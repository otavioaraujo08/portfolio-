import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
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
  gap: 0.6rem;
`;

export const ApresentationText = styled.h2`
  font-size: 2.7rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  color: #eeeeee;

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 770px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const ApresentationSubText = styled.h2`
  width: 78%;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  color: #c4c4c4;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.7rem;
  }

  & strong {
    color: #c32e58;
  }
`;
