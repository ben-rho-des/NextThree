module.exports = {
  extends: [
      'alloy',
      'alloy/react',
      'alloy/typescript',
  ],
  env: {
      browser: true,
      node: true,
  },
  globals: {

  },
  rules: {
    "@typescript-eslint/explicit-member-accessibility": "off"
  }
};
