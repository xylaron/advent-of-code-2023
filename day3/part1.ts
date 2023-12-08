interface SymbolCoordinate {
  row: number;
  position: number;
}

interface NumberCoordinate {
  row: number;
  positions: number[];
  value: number;
}

//positions are 0 indexed

export const part1 = (input: string[]): number => {
  const numbers = "1234567890";
  const dot = ".";

  const symbolCoordinates: SymbolCoordinate[] = [];
  input.forEach((row, rowIndex) => {
    const rowArray = row.split("");
    rowArray.forEach((char, position) => {
      if (char === dot || numbers.includes(char)) {
        return;
      }
      symbolCoordinates.push({
        row: rowIndex,
        position: position,
      });
    });
  });

  const numberCoordinates: NumberCoordinate[] = [];
  input.forEach((row, rowIndex) => {
    const rowArray = row.split("");
    rowArray.forEach((char, position) => {
      if (!numbers.includes(char) || numbers.includes(rowArray[position - 1])) {
        return;
      }

      let otherPositions: number[] = [];
      const startPosition = position;
      let endPosition = position;
      while (numbers.includes(rowArray[endPosition + 1])) {
        endPosition++;
        otherPositions.push(endPosition);
      }
      const value = parseInt(row.substring(startPosition, endPosition + 1));
      numberCoordinates.push({
        row: rowIndex,
        positions: [startPosition, ...otherPositions],
        value,
      });
    });
  });

  const partNumbers: number[] = [];
  numberCoordinates.forEach((numberCoordinate) => {
    const { row, positions, value } = numberCoordinate;
    if (
      symbolCoordinates.some(
        (symbol) =>
          (symbol.row === row && symbol.position === positions[0] - 1) ||
          (symbol.row === row &&
            symbol.position === positions[positions.length - 1] + 1) ||
          (symbol.row === row - 1 && symbol.position === positions[0]) ||
          (symbol.row === row + 1 && symbol.position === positions[0]) ||
          (symbol.row === row - 1 &&
            symbol.position === positions[positions.length - 1]) ||
          (symbol.row === row + 1 &&
            symbol.position === positions[positions.length - 1]) ||
          (symbol.row === row - 1 && symbol.position === positions[0] - 1) ||
          (symbol.row === row + 1 && symbol.position === positions[0] - 1) ||
          (symbol.row === row - 1 &&
            symbol.position === positions[positions.length - 1] + 1) ||
          (symbol.row === row + 1 &&
            symbol.position === positions[positions.length - 1] + 1) ||
          (positions.length === 3 &&
            symbol.row === row + 1 &&
            symbol.position === positions[1]) ||
          (positions.length === 3 &&
            symbol.row === row - 1 &&
            symbol.position === positions[1])
      )
    ) {
      partNumbers.push(value);
    }
  });
  console.log(partNumbers);

  let total = 0;
  partNumbers.forEach((number) => {
    total += number;
  });

  return total;
};
