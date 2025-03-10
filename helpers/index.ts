import { TypeOfPassword } from "@/components/CheckBox/types";

const ALPHABET_LOWER_CASE = "abcdefghijklmnopqrstuvwxyz";
const ALPHABET_UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SPECIAL_CHARACTERS = "!@#$%^&*()_-+=[{]};:>|./?";

export const generateRandomString = (
  length: number,
  passwordOptions: string[],
): string => {
  let characters = "";

  passwordOptions.forEach((option) => {
    switch (Number(option)) {
      case TypeOfPassword.UppercaseLetters:
        characters += ALPHABET_UPPER_CASE;
        break;
      case TypeOfPassword.LowercaseLetters:
        characters += ALPHABET_LOWER_CASE;
        break;
      case TypeOfPassword.Numbers:
        characters += NUMBERS;
        break;
      case TypeOfPassword.SpecialCharacters:
        characters += SPECIAL_CHARACTERS;
        break;
    }
  });

  let result = "";

  for (let i = 1; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};
