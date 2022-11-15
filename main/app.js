function addTokens(input, tokens){
    if (input.length < 6)
    throw new Error("Input should have at least 6 characters");

  if (typeof input !== "string") throw new Error("Invalid input");

  tokens.forEach((element) => {
    if (typeof element.tokenName !== "string")
      throw new Error("Invalid array format");
  });

  if (!input.includes("...")) {
    return input;
  }
  if (input.includes("...")) {
    tokens.forEach((element) => {
      input=input.replace("...", "$"+"{"+element.tokenName+"}");
    });
    return input;
  }

}

const app = {
    addTokens: addTokens
}

module.exports = app;