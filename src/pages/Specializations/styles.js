import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  height: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-direction: column;
  text-align: left;

  @media (max-width: 740px) {
    height: 90vh;
  }
`;

export const SpecializationsContainer = styled.div`
  width: max(70%, 10rem);
  border: 1px solid #c32e58;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const SpecializationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`;

export const SpecializationName = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  color: #c32e58;

  @media (max-width: 1200px) {
    font-size: 0.9rem;
  }

  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

export const SpecializationDescription = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  color: #c4c4c4;

  @media (max-width: 1200px) {
    font-size: 0.9rem;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`;
