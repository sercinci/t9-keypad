const T9_PHONE_LETTERS = [
  [""],
  [""],
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
  ["m", "n", "o"],
  ["p", "q", "r", "s"],
  ["t", "u", "v"],
  ["w", "x", "y", "z"],
] as Array<Array<string>>;

export const computeWords = async (number: string) => {
  const digits = number.split("").map(Number);
  const letters = digits.map((digit) => T9_PHONE_LETTERS[digit]);
  return letters.reduce(
    (words, letters) =>
      words.map((word) => letters.map((letter) => word + letter)).flat(),
    [""]
  );
};
