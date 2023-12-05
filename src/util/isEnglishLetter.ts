function isEnglishLetter(char: string) {
  const allowedRegex = /^[a-zA-Z!@#$%^&*()_+{}[\]:;<>,.?~\s\d=\\/-]+$/;
  return allowedRegex.test(char);
}

export default isEnglishLetter;
