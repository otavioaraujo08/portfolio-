import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  height: min(100%, 100vh);
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-direction: column;
  text-align: left;

  @media (max-width: 740px) {
    height: 90vh;
  }
`;

export const ExperienceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-radius: 5px;
  border-left: 5px solid #c32e58;
  padding-left: 1rem;
`;

export const ExperienceData = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  color: #c32e58;

  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`;

export const ExperienceTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  color: #ffffff;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const ExperienceCompany = styled.a`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  color: #c4c4c4;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #c32e58;
    transition: 0.2s ease-in-out;
  }

  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`;
