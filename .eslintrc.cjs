module.exports = {
    extends: [
      "lxsmnsyc/typescript/solid",
    ],
    parserOptions: {
      "project": "./tsconfig.eslint.json",
      "tsconfigRootDir": __dirname,
    },
    overrides: [
      {
        // Define the configuration for `.astro` file.
        files: ["*.astro"],
        // Allows Astro components to be parsed.
        parser: "astro-eslint-parser",
      },
      // ...
    ],
    rules: {
        "import/no-extraneous-dependencies": [
          "error", {
            "devDependencies": [
              "**/*.test.tsx",
              "vite.config.ts"
            ]
          }
        ],
        "react/jsx-filename-extension": "off",
        "camelcase": "off",
        "react/button-has-type": "off",
        "react/jsx-props-no-spreading": "off",
        "react/require-default-props": "off",
        "react-hooks/rules-of-hooks": "off",
        "react/jsx-no-undef": "off",
        "react/prop-types": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "react/no-unknown-property": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "react/jsx-props-no-spreading": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-no-bind": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "max-len": "off",
        "linebreak-style": "off",
        "import/prefer-default-export": "off",
        "react/no-namespace": "off",
        "@typescript-eslint/no-misused-promises": "off",
      }
  }