const rewire = require('rewire')
const defaults = rewire('react-scripts/scripts/build.js') // If you ejected, use this instead: const defaults = rewire('./build.js')
let config = defaults.__get__('config')

config.output.filename = 'static/js/index.js'
config.plugins[5].options.filename = 'static/css/index.css'
config.optimization.splitChunks = {
	cacheGroups: {
		default: false
	}
}

config.optimization.runtimeChunk = false
