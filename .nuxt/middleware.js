const middleware = {}

middleware['fetchRegions'] = require('../middleware/fetchRegions.js')
middleware['fetchRegions'] = middleware['fetchRegions'].default || middleware['fetchRegions']

export default middleware
