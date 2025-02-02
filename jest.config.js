module.exports = {
  // Устанавливаем окружение для тестов (браузерное окружение)
  testEnvironment: 'jsdom',

  // Мокаем модули, которые могут вызвать ошибку
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },

  // Включаем поддержку TypeScript через ts-jest
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  // Включаем поддержку импортов CSS
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  // Включаем поддержку тайпскрипта в тестах
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Настройка для покрытия тестами (опционально)
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx', // Не учитываем entry point
  ],

  // Параметры для моков
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // Настройка для использования watch режима
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],

  // Настроим другие параметры Jest (если нужно)
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
};
