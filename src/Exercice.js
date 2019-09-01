import React from 'react';
import styled from 'styled-components'
import StopButton from './StopButton';
import { chronoMotif, formatChrono } from './helpers';


const getTransformValue = (ref) => {
  const { transform } = window.getComputedStyle(ref.current);
  if (transform === 'none') return 0;
  return parseFloat(transform.split(',')[4].trim());
}

const getTransformDuration = motif => {
  const speed = motif.size / motif.periode;
  const distance = motif.totalPratique();
  return distance / speed;

}

const ExerciceContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 3px solid #000;
`

const MotifScroller = styled.div`
  max-width: 100%;
  height: 100%;
  position: relative;
  height: 100px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 0px;
    border-left: 1px dashed black;
  }
`

const MotifContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  margin-left: 50%;
  transform: translateX(${({ transform }) => transform}px);
  ${({ animated, motifAnimationCss }) => animated && motifAnimationCss}
  ${({ animated, motifParams }) => animated && `
    transition: transform ${getTransformDuration(motifParams)}s linear;
  `}
  svg {
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 240px;
  }
`

const Duration = styled.span`
`

const Exercice = ({ motifParams, Motif, motifAnimationCss }) => {

  const motifRef = React.useRef()

  const [motifAnimated, setMotifAnimated] = React.useState(false)
  const [motifDuration, setMotifDuration] = React.useState(0)
  const [motifTransform, setMotifTransform] = React.useState(0)
  const [exerciceEnd, setExerciceEnd] = React.useState(false)

  const togglePlayPause = () => {
    // play
    if (!motifAnimated) {
      setExerciceEnd(false)
      setMotifAnimated(true);
    }
    // pause
    if (motifAnimated) {
      setMotifTransform(getTransformValue(motifRef))
      setMotifAnimated(false)
    }
  }

  const handleEndExercice = () => {
    setExerciceEnd(true)
    setMotifDuration(0)
  }

  React.useEffect(() => {
    let timeout;
    if (motifAnimated > 0) {
      timeout = setTimeout(() => {
        setMotifDuration(motifDuration + 1000)
      }, 1000);
    }
    if (!motifAnimated && motifDuration) {
      clearTimeout(timeout)
    }
    return () => {
      clearTimeout(timeout)
    }
  })

  return (
      <ExerciceContainer>
        <MotifScroller>
          <MotifContainer
            animated={motifAnimated}
            motifParams={motifParams}
            motifAnimationCss={motifAnimationCss}
            onTransitionEnd={handleEndExercice}
            transform={motifTransform}
            ref={motifRef}
          >
            {chronoMotif(motifParams).map((_, ind) => (
              <Motif
                key={ind}
                size={motifParams.size}
                position={ind}
              />
            ))}
          </MotifContainer>
        </MotifScroller>
        <Duration>{formatChrono(motifDuration)}</Duration>
        <StopButton started={motifAnimated && !exerciceEnd} onClick={togglePlayPause} />
      </ExerciceContainer>
  );
}

export default Exercice;
