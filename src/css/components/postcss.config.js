module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested")({
      bubble: ["screen"],
    }),
    require("tailwindcss")("./src/css/components/tailwind.config.js"),
    require("autoprefixer"),
  ],
};
