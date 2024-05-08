const { configureStore } = require("@reduxjs/toolkit");
const { default: logger } = require("redux-logger");
const videosReducer = require("../videos/videosSlice");

const store = configureStore({
	reducer: {
		video: videosReducer,
	},
	middleware: (defaultMiddleWare) => {
		return defaultMiddleWare().concat(logger);
	},
});

module.exports = store;
