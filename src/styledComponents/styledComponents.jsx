import styled from 'styled-components';
import robotImg from '../images/robot.gif';

export const Container = styled.section`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: url(${robotImg});
background-position: center center;
background-size: cover;
background-repeat: no-repeat;

@media screen and (min-width: 60rem) {
  background-position: left center;
  background-size: contain;
}
`;

export const CtaBtn = styled.button`
  cursor: pointer;
  outline: white;
  width: 12.5rem;
  height: 3rem;
  font-family: Courier, monospace;
  font-size: 1.2rem;
  color: white;
  background: #ff3482;
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0.3rem 0.3rem 1.8rem 1.2rem rgba(0, 0, 0, 0.5); 

  &:hover,
  &:focus {
    filter: brightness(95%);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    cursor: default;
    filter: brightness(30%);
  }

  @media screen and (min-width: 60rem) {
    box-shadow: 0.1rem 0.1rem 1.2rem 0.8rem rgba(0, 0, 0, 0.2);
  }
`;
