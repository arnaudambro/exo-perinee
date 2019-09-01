import React from 'react';
import { css } from 'styled-components'
import { chronoMotif } from './helpers';

export const motif2params = {
  periode: 8 + 1 + 1 + 1,
  totalTheorique: 60 * 10,
  totalPratique: function() { return chronoMotif(this).length * this.size },
  size: 240,
}

export const motif2animationCss = css`
  transform: translateX(-${chronoMotif(motif2params).length * motif2params.size}px);
`

const Motif1 = ({ size, style }) =>
      <svg width={size} height={size * 50 / 120} viewBox="0 0 1104 433" style={style} >
  <g id="Page-1" stroke="none" fill="none" fillRule="evenodd">
      <polyline id="Path-2" stroke="#979797" strokeWidth="15" points="0 429 800 429 850 29 900 429 1000 429 1050 229 1100 429"></polyline>
  </g>
</svg>

export default Motif1;
