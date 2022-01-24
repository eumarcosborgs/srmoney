import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

interface OptionProps { 
  isActive: boolean;
}

export const Container = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;

  background-color: ${theme.white};

  box-shadow: 0px 0px 1.5rem -1px rgba(0, 0, 0, 0.1);

  width: 20rem;
  min-width: 14rem;
  
  height: 100vh;
  padding: 1rem 2rem;

  border-radius: 0.1rem; 

  @media(max-width: 720px) {
    display: none;
  }
`;

export const PoweredBy = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  
  top: 55vh;
  padding: 1rem 0;
  border-top: 1px solid ${theme.lightGray};

  a {
    font-size: 1rem;
    font-weight: 500;

    span {
      font-weight: 700;
    }

    transition: filter 0.2s;

    &:hover {
      span {
        filter: brightness(1.8);
      }
    }
  }
`;

export const Option = styled(motion.div).attrs({ whileHover: { x: 7 } })<OptionProps>`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  border-bottom: 1px solid ${theme.lightGray};
  padding: 1rem 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;


    img {
      margin-right: 0.5rem;
    }

    p {
      font-size: 0.85rem;
      color: ${theme.darkGray};
      font-weight: 500;
    }
  }

  ${props =>
    props.isActive &&
    css`
      pointer-events: none;

      position: relative;
      left: 0.75rem;

      border-bottom: 1px solid ${theme.black};

      div p {
        font-size: 0.85rem;
        font-weight: bold;
        color: ${theme.black};
      }
  `}
`;