# PROJECT_02-WEBPACK

// for windows environment
// "build": "set NODE_ENV=production& webpack"

// for mac Environment
// "build": "NODE_ENV=production webpack",

// for universal , install cross-env npm install -D cross-env then use below
// "build": "cross-env NODE_ENV=production& webpack",

### In Order to have backward compatibility make sure sure that you have the following hidden file

.browserslistrc

new CopyPlugin({
patterns: [
{ from: './src/assets', to: 'assets' }
]
}),
