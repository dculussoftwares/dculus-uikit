// const tailwindcss = require("tailwindcss");
// import tailwindConfig from './src/css/tailwind.config';
// import tailwindConfig from "./src/css/tailwind.config.js";
// import tailwind from "tailwindcss";
const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const tailwindConfig = require("./src/css/tailwind.config.js");
// import autoprefixer from "autoprefixer";
// import tailwindConfig from "./src/css/tailwind.config.js";
module.exports = {
  plugins: ["postcss-preset-env", tailwind(tailwindConfig), autoprefixer],
};
