import React from 'react';
import { css } from 'styled-components'
import { chronoMotif } from './helpers';

export const motif1params = {
  periode: 8 + 4,
  totalTheorique: 60 * 10,
  totalPratique: function() { return chronoMotif(this).length * this.size },
  size: 240,
}

export const motif1animationCss = css`
  transform: translateX(-${motif1params.totalPratique()}px);
`

const Motif1 = ({ size, style }) =>
  <svg width={size} height={size * 60 / 120} viewBox="0 0 1203 156" style={style} >
      <g id="Page-1" stroke="none" fill="none" fillRule="evenodd">
          <polyline id="Path" stroke="#979797" strokeWidth="15" points="-5.21024348e-16 153 800 153 800 3 1200 3 1200 153"></polyline>
      </g>
  </svg>

export default Motif1;
