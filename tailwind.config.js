module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8B8CFC',
          DEFAULT: '#8B8CFC',
          dark: '#6765D8',
        },
        secondary: {
          light: '#C2C3FA',
          DEFAULT: '#282946',
          dark: '#43447E',
        },
        tertiary: {
          light: '#9AC4FF',
          DEFAULT: '#282946',
          dark: '#CEC3FF',
        },
      },
    },
  },
  plugins: [],
};
