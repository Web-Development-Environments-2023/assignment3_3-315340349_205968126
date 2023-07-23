module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    host: "dani.cs.bgu.ac.il"
    // host: "localhost"
  }
  // publicPath: process.env.NODE_ENV === "production" ? "/LAB12/" : "/"
};
