import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  color: #eeeeee;
  background-color: #161d34;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CardApresentation = styled.div`
  width: 30%;
  padding-top: 1.5rem;
  padding-left: 1.5rem;

  & > div {
    position: sticky;
    top: 5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-left: 0;
  }
`;

export const CardInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
