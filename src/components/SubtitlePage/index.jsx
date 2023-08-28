import { styled } from 'styled-components';

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

export const SubtitlePage = ({ title, children }) => {
  return <ApresentationSubText>{title || children}</ApresentationSubText>;
};
