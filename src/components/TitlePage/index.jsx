import styled from 'styled-components';

const ApresentationText = styled.h2`
  font-size: 2.7rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  color: #eeeeee;

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 770px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }

  & strong {
    color: #c32e58;
  }

  & span {
    color: #c32e58;
  }
`;

export const TitlePage = ({ title, children }) => {
  return <ApresentationText>{title || children}</ApresentationText>;
};
