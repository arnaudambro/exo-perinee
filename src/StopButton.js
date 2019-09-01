import React from 'react';
import styled from 'styled-components'


const StopButtonStyled = styled.button`

  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #000;
  height: 50px;
  width: 200px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
`


const StopButton = ({ onClick, started }) =>
  <StopButtonStyled onClick={onClick} >
    {started ? 'Pause' : 'Démarrer'}
  </StopButtonStyled>

export default StopButton;
