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

  let filteredInput = input;
  let foundAll: boolean = false;

  while (!foundAll) {
    foundAll = true;
    for (const singleNum of stringNumMap) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].includes(singleNum.text)) {
          foundAll = false;
          filteredInput[i] = filteredInput[i].replace(
            singleNum.text,
            singleNum.text[0] +
              singleNum.num +
              singleNum.text[singleNum.text.length - 1]
          );
        }
      }
    }
  }

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
