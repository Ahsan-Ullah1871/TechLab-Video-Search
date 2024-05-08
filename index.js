const store = require("./rtk/app/store");
const { fetchVideo, fetchRelatedVideo } = require("./rtk/videos/videosSlice");

//
const state = store.getState();
const tagsArray = state.video?.video?.video?.tags;
//  Dispatch fetchVideo thunk function
store.dispatch(fetchVideo()).then(async (response) => {
	// Fetching related videos
	if (response?.payload?.tags?.length > 0) {
		await store.dispatch(fetchRelatedVideo(response.payload.tags));
	}
});
