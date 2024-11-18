export default {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["frontend/jest.setup.js"],
    testMatch: ["**/__tests__/**/*.[jt]s?(x)"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    }
  };
  