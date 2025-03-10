import { TypeOfPassword } from "@/components/CheckBox/types";

const ALPHABET_LOWER_CASE = "abcdefghijklmnopqrstuvwxyz";
const ALPHABET_UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SPECIAL_CHARACTERS = "!@#$%^&*()_-+=[{]};:>|./?";

export const generateRandomString = (
  length: number,
  passwordOptions: string[],
): string => {
  if (length <= 0) {
    throw new Error("O comprimento da senha deve ser maior que zero.");
  }

  if (passwordOptions.length === 0) {
    throw new Error("Nenhuma opção de senha foi selecionada.");
  }

  let characters = "";

  const optionMap: Record<string, string> = {
    [TypeOfPassword.UppercaseLetters]: ALPHABET_UPPER_CASE,
    [TypeOfPassword.LowercaseLetters]: ALPHABET_LOWER_CASE,
    [TypeOfPassword.Numbers]: NUMBERS,
    [TypeOfPassword.SpecialCharacters]: SPECIAL_CHARACTERS,
  };

  passwordOptions.forEach((option) => {
    const charactersForOption = optionMap[option];

    if (charactersForOption) {
      characters += charactersForOption;
    } else {
      alert("Opção de senha inválida: ${option}");
    }
  });

  if (!characters) {
    throw new Error("Nenhum tipo válido de caractere foi selecionado.");
  }

  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};
