import inquirer from 'inquirer'
import config from './config'
import {createObjectFile} from "js-code-creator"

import packageJson from './generators/package'

const file = createObjectFile('src/', 'name.js')

import {generator} from './generators/babel'

generator()

export default function() {
  inquirer.prompt(getPrompts(config)).then((answers) => {
    console.log(answers)
    console.log(packageJson(answers))
  })
}

function getPrompts(config) {
  return Object.keys(config).map(key => config[key].question)
}

function generateCode(answers) {
  let files = [{
    path: './',
    name: 'package.json',
    file: packageJson(answers)
  }]
}