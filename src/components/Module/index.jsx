import styled from 'styled-components';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineExperiment,
} from 'react-icons/ai';
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

  @media (max-width: 768px) {
    max-width: 7rem;
    height: 1.5rem;
  }
`;

const ChipTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const ChipIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 1rem;
    height: 1rem;
  }
`;

export const Module = ({ icon, title }) => {
  const iconSelector = () => {
    switch (icon) {
      case 'home': {
        return <AiOutlineHome size={20} />;
      }
      case 'user': {
        return <AiOutlineUser size={23} />;
      }
      case 'experience': {
        return <AiOutlineExperiment size={22} />;
      }
      default: {
        return <PiHammer size={20} />;
      }
    }
  };

  return (
    <Chip>
      <ChipIcon>{iconSelector()}</ChipIcon>

      <ChipTitle>{title}</ChipTitle>
    </Chip>
  );
};
