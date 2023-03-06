const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const initialState = {
	video: {
		loading: false,
		video: {},
		error: "",
	},
	related_video: {
		loading: false,
		videos: [],
		error: "",
	},
};

//convert view of video and sorting base on view
const convertViews = (view) => {
	if (view.endsWith("k")) {
		const num = parseFloat(view) * 1000;
		return Math.round(num);
	}
	return parseInt(view);
};

// create async thunk
const fetchVideo = createAsyncThunk(
	"video/fetch_video",
	async (_, thunkAPI) => {
		const response = await fetch("http://localhost:9000/videos");
		const video = await response.json();

		return video;
	}
);


// 
const fetch_related_video = createAsyncThunk(
	"related_video/fetch_related_video",
	async (tags) => {
		const response = await fetch(
			`http://localhost:9000/videos?tags_like=${tags.join(
				"&tags_like="
			)}`
		);
		const videos = await response.json();
		const sorting_videos = videos.sort(
			(a, b) => convertViews(b.views) - convertViews(a.views)
		);
		return sorting_videos;
	}
);

// Create Slice
const videosSlice = createSlice({
	name: "videos",
	initialState,
	extraReducers: (builder) => {
		// Video fetch
		builder.addCase(fetchVideo.pending, (state, action) => {
			state.video.loading = true;
			state.video.error = "";
		});
		builder.addCase(fetchVideo.fulfilled, (state, action) => {
			state.video.loading = false;
			state.video.video = action.payload;
			state.video.error = "";
		});
		builder.addCase(fetchVideo.rejected, (state, action) => {
			state.video.loading = false;
			state.video = {};
			state.video.error = action.error;
		});

		// Related video fetch
		builder.addCase(fetch_related_video.pending, (state, action) => {
			state.related_video.loading = true;
			state.related_video.error = "";
		});
		builder.addCase(
			fetch_related_video.fulfilled,
			(state, action) => {
				state.related_video.loading = false;
				state.related_video.videos = action.payload;
				state.related_video.error = "";
			}
		);
		builder.addCase(fetch_related_video.rejected, (state, action) => {
			state.related_video.loading = false;
			state.related_video.videos = [];
			state.related_video.error = action.error;
		});
	},
});

module.exports = videosSlice.reducer;
module.exports.fetchVideo = fetchVideo;
module.exports.fetchRelatedVideo = fetch_related_video;
