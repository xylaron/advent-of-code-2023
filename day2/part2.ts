interface Round {
  red: number;
  green: number;
  blue: number;
}

export const part2 = (input: string[]): number => {
  const maxRoundObject: Round = {
    red: 12,
    green: 13,
    blue: 14,
  };
  const formattedGames: Round[][] = [];

  for (const game of input) {
    const rounds = game.split(": ")[1].split("; ");
    const formattedRounds: Round[] = [];

    rounds.map((round) => {
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
    formattedGames.push(formattedRounds);
  }

  let maxColorsEachGame = formattedGames.map((game) => {
    const reds = game.map((round) => round.red);
    const greens = game.map((round) => round.green);
    const blues = game.map((round) => round.blue);
    const maxRed = Math.max(...reds);
    const maxGreen = Math.max(...greens);
    const maxBlue = Math.max(...blues);
    return {
      red: maxRed,
      green: maxGreen,
      blue: maxBlue,
    };
  });

  const powerList = maxColorsEachGame.map((game) => {
    return game.red * game.green * game.blue;
  });

  console.log(powerList);

  let total = 0;
  powerList.forEach((power) => {
    total += power;
  });

  return total;
};
