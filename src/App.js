import React from 'react';
import styled from 'styled-components'
import Motif1, { motif1animationCss, motif1params } from './Motif1';
import Motif2, { motif2animationCss, motif2params } from './Motif2';
import Exercice from './Exercice';

window.location.reload(true)

const AppContainer = styled.div`
  background: pink;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

function App() {

  return (
    <AppContainer>
      <Exercice
        Motif={Motif1}
        motifAnimationCss={motif1animationCss}
        motifParams={motif1params}
      />
      <Exercice
        Motif={Motif2}
        motifAnimationCss={motif2animationCss}
        motifParams={motif2params}
      />
    </AppContainer>
  );
}

export default App;
