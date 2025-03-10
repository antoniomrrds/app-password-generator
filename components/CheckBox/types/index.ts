export enum TypeOfPassword {
  UppercaseLetters = 1,
  LowercaseLetters = 2,
  Numbers = 3,
  SpecialCharacters = 4,
}

export const getText = (value: TypeOfPassword) => {
  switch (value) {
    case TypeOfPassword.UppercaseLetters:
      return "ABC";
    case TypeOfPassword.LowercaseLetters:
      return "abc";
    case TypeOfPassword.Numbers:
      return "123";
    case TypeOfPassword.SpecialCharacters:
      return "!@#";
  }
};

export const generateOptions = <T extends object>(
  enumType: T,
  getText: (value: T[keyof T]) => string,
) => {
  return Object.entries(enumType)
    .filter(([, value]) => typeof value === "number")
    .map(([, value]) => ({
      value: value as T[keyof T],
      label: getText(value as T[keyof T]),
    }));
};

export const options = generateOptions(TypeOfPassword, getText);
