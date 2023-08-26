import styled from 'styled-components';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { PiHammer } from 'react-icons/pi';

const Chip = styled.div`
  width: 100%;
  max-width: 11rem;
  height: 2rem;
  border-radius: 1rem;
  border: 1px solid #c32e58;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: all 0.2s ease-in-out;
`;

const ChipTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  color: #ffffff;
`;

export const Module = ({ icon, title }) => {
  const iconSelector = () => {
    switch (icon) {
      case 'home': {
        return <AiOutlineHome />;
      }
      case 'user': {
        return <AiOutlineUser />;
      }
      default: {
        return <PiHammer />;
      }
    }
  };

  return (
    <Chip>
      {iconSelector()}

      <ChipTitle>{title}</ChipTitle>
    </Chip>
  );
};
