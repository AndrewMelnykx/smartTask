module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  maxWorkers: "50%",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@redux/(.*)$": "<rootDir>/src/components/redux/$1",
    "^@slices/(.*)$": "<rootDir>/src/components/redux/slices/$1",
    "^@data/(.*)$": "<rootDir>src/data/$1",
    "^@users/(.*)$": "<rootDir>src/components/users/$1",

    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(lodash-es|@babel|@testing-library)/)",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  verbose: true,
};
