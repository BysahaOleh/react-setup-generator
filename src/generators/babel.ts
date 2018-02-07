import {createObjectFile} from 'js-code-creator'

export function generator() {
	const file = createObjectFile('src/', 'index.js')

	file.createImport('react', 'React')
	file.createImport('react-dom', ['render'])

	file.createImport('./container/App', 'App')

	file.createFunctionRun('bottom', 'render', ['<App/>', 'document.getElementById(\'app\')'])

	console.log(file.getString())
}

