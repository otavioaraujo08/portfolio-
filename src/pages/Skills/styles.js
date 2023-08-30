import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 860px) {
    min-height: 120vh;
  }
`;

export const SkillsContainer = styled.div`
  max-width: 95%;
  display: flex;
  flex-wrap: wrap;
  align-items: left;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 760px) {
    align-items: center;
    justify-content: center;
  }
`;

export const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid #c32e58;
  border-radius: 1rem;
  width: 7rem;
  height: 8rem;

  @media (max-width: 1200px) {
    width: 5rem;
    height: 6rem;
  }

  @media (max-width: 400px) {
    width: 4rem;
    height: 5rem;
  }
`;

export const SkillTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  color: #ffffff;

  @media (max-width: 1200px) {
    font-size: 0.5rem;
  }
`;

export const SkillLogo = styled.img`
  width: 9rem;
  height: 9rem;
  block-size: fit-content;
`;
