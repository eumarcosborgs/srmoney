import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

export const Container = styled.header`
  width: 100%;
  height: 24rem;
  padding: 0.75rem 3rem;

  background-color: ${theme.background};

  main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.75rem;

    h1 {
      font-size: 1rem;
      color: ${theme.white};

      transition: filter 0.2s;

      &:hover {
        cursor: pointer;
        filter: brightness(0.8);
      }
    }
    
  
    img {
      max-width: 3.5rem;
      max-height: 2.75rem;
    }

    @media(max-width: 720px) {
      padding: 1rem 1.5rem;
    }

  }
`;

export const SignOutButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  background: ${theme.white};

  border: none;

  font-weight: 500;

  font-size: 1rem;

  img {
    margin-right: 0;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;