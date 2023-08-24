import styled from 'styled-components';

const InsightsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
`;

const InsightsNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  color: #c32e58;

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 770px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

const InsightsText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  color: #eeeeee;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 770px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

export const Insights = ({ number, text }) => {
  return (
    <InsightsBox>
      <InsightsNumber>{number}</InsightsNumber>
      <InsightsText>{text}</InsightsText>
    </InsightsBox>
  );
};
