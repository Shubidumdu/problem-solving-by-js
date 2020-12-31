const doTests = (inputs, results, solution) => {
  inputs.map((input, index) => {
    const result = results[index];
    const stringInput = JSON.stringify(input);
    const stringResult = JSON.stringify(result);
    return test(`${index}) ${stringInput} should be ${stringResult}`, () => {
      const answer = solution(...input);
      if (typeof result === 'object') expect(answer).toEqual(result);
      else expect(answer).toBe(result);
    }, 10000);
  });
};

export default doTests;
