import { DiGithubBadge } from 'react-icons/di';
import { SiLinkedin } from 'react-icons/si';
import { VscRepo } from 'react-icons/vsc';
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 90%;
  min-height: 45rem;
  height: 100%;
  background-color: #161d34;
  border-radius: 1rem;
  border: 1px solid #3d3d4e;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (max-width: 1240px) {
    min-height: 0;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-top: 1.5rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  font-family:
  color: #eeeeee;
  margin-left: 1.5rem;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
    margin-left: 1rem;
  }

  @media (max-width: 900px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

export const HeaderSubTitle = styled.h2`
  width: 20%;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  font-family:
  color: #eeeeee;
  margin-right: 1.5rem;

  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }

  @media (max-width: 900px) {
    font-size: 0.6rem;
  }

  @media (max-width: 760px) {
    font-size: 0.8rem;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`;

export const ImageContent = styled.img`
  width: fit-content;
  height: 19rem;
  border-radius: 1rem;

  @media (max-width: 1250px) {
    height: 15rem;
  }

  @media (max-width: 900px) {
    height: 10rem;
  }

  @media (max-width: 768px) {
    height: 8rem;
  }
`;

export const InformationText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  font-family:
  color: #eeeeee;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 900px) {
    font-size: 0.8rem;
  }

  @media (max-width: 760px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const IconButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  border-radius: 50%;
  background: linear-gradient(90deg, #3d3d4e 0%, #3d3d4e 100%);
  border: 3px solid #eeeeee;
  cursor: pointer;

  &:hover {
    border: 3px solid #c32e58;
  }

  @media (max-width: 1200px) {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 900px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 760px) {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 400px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const GithubIcon = styled(DiGithubBadge)`
  width: 2.2rem;
  height: 2.2rem;
  color: #eeeeee;

  &:hover {
    color: #c32e58;
  }

  @media (max-width: 1200px) {
    width: 1.6rem;
    height: 1.6rem;
  }

  @media (max-width: 900px) {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

export const LinkedinIcon = styled(SiLinkedin)`
  width: 1.5rem;
  height: 1.5rem;
  color: #eeeeee;

  &:hover {
    color: #c32e58;
  }

  @media (max-width: 1200px) {
    width: 1.1rem;
    height: 1.1rem;
  }

  @media (max-width: 900px) {
    width: 0.9rem;
    height: 0.9rem;
  }
`;

export const VSIcon = styled(VscRepo)`
  width: 2rem;
  height: 2rem;
  color: #eeeeee;

  &:hover {
    color: #c32e58;
  }

  @media (max-width: 1200px) {
    width: 1.1rem;
    height: 1.1rem;
  }
`;

export const SwitchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;
