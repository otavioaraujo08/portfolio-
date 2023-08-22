import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 90%;
  height: 93%;
  background-color: #002844;
  border-radius: 1rem;
  border: 1px solid #3d3d4e;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-top: 0.5rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  font-family:
  color: #ffffff;
  margin-left: 1.5rem;
`;

export const HeaderSubTitle = styled.h2`
  width: 20%;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  font-family: 'Hanken Grotesk', sans-serif;
  font-family:
  color: #3d3d4e;
  margin-right: 1.5rem;
`;

export const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;
