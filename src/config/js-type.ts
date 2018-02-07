import {jsType} from '../constants'

export default {
  question: {
    type: 'list',
    name: 'jsType',
    message: 'Select need',
    choices: [
      jsType.babel,
      jsType.ts
    ]
  },
  devDependencies: {
    [jsType.babel.value]: {
      'babel-core': '^6.26.0',
      'babel-loader': '^7.1.2'
    },
    [jsType.ts.value]: {
      'ts-loader': '^3.2.0',
      'typescript': '^2.6.2'
    }
  },
  webpackConfig: (answer) => {
    switch(answer) {
      case jsType.babel.value:
        return {
          modules: [`{test: /\\.(js|jsx)$/,exclude: /(node_modules|bower_components)/,use: {loader: 'babel-loader'}}`],
          extensions: ['.jsx']
        }
      case jsType.ts.value:
        return {
          modules: [`{ test: /\\.(ts|tsx)?$/, loader: 'ts-loader' }`],
          extensions: ['.ts', '.tsx']
        }
    }
  },
  variables: {
    jsx: [
      {
        type: 'jsx',
        tag: 'Provider',
        attr: {
          store: 'store'
        }
      }
    ]
  },
  generator: (answer, variables) => {
    if(answer === jsType.babel.value) {

    }
  }
}