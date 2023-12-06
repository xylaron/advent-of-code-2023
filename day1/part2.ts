export const part2 = (input: string[]): number => {
  const stringNumMap: { text: string; num: number }[] = [
    { text: "one", num: 1 },
    { text: "two", num: 2 },
    { text: "three", num: 3 },
    { text: "four", num: 4 },
    { text: "five", num: 5 },
    { text: "six", num: 6 },
    { text: "seven", num: 7 },
    { text: "eight", num: 8 },
    { text: "nine", num: 9 },
  ];

  let filteredInput: string[] = input;

  let stop: boolean = false;
  do {
    stop = true;
    for (let i = 0; i < stringNumMap.length; i++) {
      for (let j = 0; j < input.length; j++) {
        if (filteredInput[j].includes(stringNumMap[i].text)) {
          stop = false;
          filteredInput[j] = filteredInput[j].replace(
            stringNumMap[i].text,
            stringNumMap[i].num.toString()
          );
        }
        console.log(filteredInput[j]);
      }
      console.log("----------------------------------------------------");
    }
  } while (!stop);

  const resultArray: string[] = [];

  for (const i of filteredInput) {
    let result: string = "";
    for (const j of i) {
      if (parseInt(j)) {
        result += j;
      }
    }
    if (result.length == 1) {
      result = result + result;
    }
    if (result.length > 1) {
      result = result[0] + result[result.length - 1];
    }
    resultArray.push(result);
  }

  let answer: number = 0;
  for (const num in resultArray) {
    answer += parseInt(resultArray[num]);
  }

  return answer;
};
