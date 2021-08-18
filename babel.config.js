module.exports = {
    presets: ["@babel/preset-env",
        ["@babel/preset-react",
            { runtime: "automatic" }]], // react 17 partner with babel downst require import react when using jsx
}