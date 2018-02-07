import {isArray} from 'lodash'
import config from '../config'

export default function(answers) {
  let defaultPackageJSON = {
    name: answers.appName,
    version: answers.appVersion,
    description: answers.appDescription,
    main: "index.js",
    scripts: {
      "start": "node ./node_modules/webpack/bin/webpack.js"
    },
    author: answers.authorName + ' <' + answers.authorEmail + '>',
    license: "MIT"
  }

  return JSON.stringify(Object.assign({},
    defaultPackageJSON,
    getDependencies(answers)
  ), null, 2)
}

function getDependencies(answers) {
  let allDependencies = {
    dependencies: {},
    devDependencies: {
      "html-webpack-plugin": "^2.30.1",
      "webpack": "^3.8.1",
      "webpack-dev-server": "^2.9.5"
    }
  }

  Object.keys(answers).map(key => {
    const currentConf = config[key]

    if(currentConf.dependencies) {

      if(isArray(answers[key])) {
        answers[key].map(item => {

          if(currentConf.dependencies[item]) {
            allDependencies.dependencies = Object.assign(allDependencies.dependencies, currentConf.dependencies[item])
          }
        })
      } else {
        if(currentConf.dependencies[answers[key]]) {
          allDependencies.dependencies = Object.assign(allDependencies.dependencies, currentConf.dependencies[answers[key]])
        }
      }
    }
    if(currentConf.devDependencies) {

      if(isArray(answers[key])) {
        answers[key].map(item => {

          if(currentConf.devDependencies[item]) {
            allDependencies.devDependencies = Object.assign(allDependencies.devDependencies, currentConf.devDependencies[item])
          }
        })
      } else {
        if(currentConf.devDependencies[answers[key]]) {
          allDependencies.devDependencies = Object.assign(allDependencies.devDependencies, currentConf.devDependencies[answers[key]])
        }
      }
    }
  })


  return {
    dependencies: sortDependencies(allDependencies.dependencies),
    devDependencies: sortDependencies(allDependencies.devDependencies)
  }
}

function sortDependencies(dependencies) {
  let keys = Object.keys(dependencies).sort()

  let result = {}

  keys.map(function(item) {
    result[item] = dependencies[item]
  })

  return result
}