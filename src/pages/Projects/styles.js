import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 60rem;
  max-height: 60rem;
  border-radius: 1rem;
  object-fit: cover;
`;

export const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProjectTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-align: left;
`;

export const ProjectSubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-family: 'Roboto', sans-serif;
  color: #c4c4c4;
  text-align: left;
`;
