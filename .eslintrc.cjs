module.exports = {
  root: true,
  extends: ["next", "next/core-web-vitals"],
  parserOptions: {
    ecmaVersion: 2022
  },
  rules: {
    "@next/next/no-img-element": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }]
  }
};
