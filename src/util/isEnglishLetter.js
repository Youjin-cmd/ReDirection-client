function isEnglishLetter(char) {
  const allowedRegex = /^[a-zA-Z!@#$%^&*()_+{}[\]:;<>,.?~\s\d=\\/-]+$/;
  return allowedRegex.test(char);
}

export default isEnglishLetter;
