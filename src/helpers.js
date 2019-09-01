
export const chronoMotif = ({ periode, totalTheorique }) => {
  let motifs = [];
  for (let index = 0; index < Math.floor(totalTheorique / periode) + 1; index++) {
    motifs.push(1)
  }
  return motifs;
}

const doubleChiffre = number => (number < 10 ? '0' : '') + number;
export const formatChrono = chrono => {
  const minutes = Math.floor(chrono / 60000);
  const seconds = Math.round((chrono - minutes * 60000) / 1000);
  return doubleChiffre(minutes) + ' : ' + doubleChiffre(seconds);
}
