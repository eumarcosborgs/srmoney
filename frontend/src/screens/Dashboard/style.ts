import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 16px;

  width: 100%;
  height: 100%;
`;