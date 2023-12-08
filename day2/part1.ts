interface Round {
  red: number;
  green: number;
  blue: number;
}

export const part1 = (input: string[]): number => {
  const maxRoundObject: Round = {
    red: 12,
    green: 13,
    blue: 14,
  };
  const possibleGameIds: string[] = [];
  const gameIsPossible = (rounds: Round[]): boolean => {
    for (const round of rounds) {
      if (
        round.red > maxRoundObject.red ||
        round.green > maxRoundObject.green ||
        round.blue > maxRoundObject.blue
      ) {
        return false;
      }
    }
    return true;
  };

  for (const game of input) {
    const gameId = game.split(": ")[0].split(" ")[1];
    const rounds = game.split(": ")[1].split("; ");
    const formattedRounds: Round[] = [];

    rounds.forEach((round) => {
      const defaultRound: Round = {
        red: 0,
        green: 0,
        blue: 0,
      };
      const roundArray = round.split(", ");
      roundArray.forEach((round) => {
        const color = round.split(" ")[1];
        const number = parseInt(round.split(" ")[0]);
        defaultRound[color] = number;
      });
      formattedRounds.push(defaultRound);
    });
    if (gameIsPossible(formattedRounds)) {
      possibleGameIds.push(gameId);
    }
  }
  let total = 0;
  possibleGameIds.forEach((id) => {
    total += parseInt(id);
  });

  return total;
};
