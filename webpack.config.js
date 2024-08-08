const path = require("path");

module.exports = {
  entry: "./src/index.js", // 엔트리 파일
  output: {
    filename: "bundle.js", // 출력 파일 이름
    path: path.resolve(__dirname, "dist"), // 출력 디렉토리
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js 파일에 대해
        exclude: /node_modules/, // node_modules 폴더는 제외
        use: {
          loader: "babel-loader", // Babel을 사용하여 트랜스파일
          options: {
            presets: ["@babel/preset-env"], // 최신 JavaScript를 호환성 있는 코드로 변환
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      "@egjs/flicking-plugins": path.resolve(
        __dirname,
        "node_modules/@egjs/flicking-plugins"
      ),
    },
  },
  devServer: {
    static: path.join(__dirname, "dist"), // 정적 파일 제공
    compress: true,
    port: 9000,
  },
};
