// https://babeljs.io/

module.exports = {
  presets: [
    [require('@babel/preset-env'), { modules: false }],
    require('@babel/preset-react'),
  ],
  plugins: [require('@babel/plugin-proposal-class-properties')],
}
