### TechLab Video Search Application

This project is a Node.js application built with Redux Toolkit for state
management. It fetches data from a provided API endpoint and performs related
searches based on the fetched data.

#### Features

- Fetches data from the API endpoint `http://localhost:9000/videos`
  asynchronously using Redux Thunk.
- Performs additional searches based on fetched tags using `tags_like` query
  parameter in the API request.
- Logs the fetched data objects to the console with views-based sorting (higher
  views first).

#### API Usage

1. Initial fetch:

      - Endpoint: `http://localhost:9000/videos`
      - Returns an array of video objects with properties like `title`, `tags`,
        and `views`.

2. Additional search based on tags:
      - Endpoint: `http://localhost:9000/videos?tags_like=tag1&tags_like=tag2`
      - Returns related videos based on the provided tags.

#### Middleware Used

- Redux Logger: Used for logging Redux actions and state changes to the console
  for debugging purposes.
