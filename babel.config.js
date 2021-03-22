module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    "babel-plugin-macros",
    ["babel-plugin-optimize-clsx", { "libraries": ["tailwindcss-classnames"] }]
  ]
}
