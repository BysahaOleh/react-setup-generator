export namespace RSG {
  interface WebpackConfig {
    modules: string[]
    extensions: string
  }
  interface ConfigType {
    question: object
    dependencies?: object
    devDependencies?: object
    packageAddition?: object
    webpackConfig?(answer: object, answers: object)
    generator?(answer: object, answers: object)
  }
}