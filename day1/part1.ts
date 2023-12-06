export const part1 = (input: string[]): number => {
  const resultArray: string[] = [];

  for (const i of input) {
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
    console.log(result);
    resultArray.push(result);
  }

  let answer: number = 0;
  for (const num in resultArray) {
    answer += parseInt(resultArray[num]);
  }

  return answer;
};
