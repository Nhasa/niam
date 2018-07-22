module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "linebreak-style": "off",
    "implicit-arrow-linebreak": "off",
  },
  "globals": {
    "document": false,
    "window": false,
    "navigator": false,
    "fetch": false,
  },
};