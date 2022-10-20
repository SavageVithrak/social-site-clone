import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddPost from "./components/AddPost";
import Feed from "./components/Feed";
import Navigation from "./components/Navigation";

function App() {
	const [posts, changePosts] = useState([
		{
			postId: 1,
			username: "Viorel",
			body: "This is a test",
			image:
				"https://image.shutterstock.com/image-photo/word-example-written-on-magnifying-260nw-1883859943.jpg",
		},
		{
			postId: 2,
			username: "Diana",
			body: "This is a different test",
			image:
				"https://img.icons8.com/external-anggara-flat-anggara-putra/344/external-send-email-interface-anggara-flat-anggara-putra.png",
		},
	]);

	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" index element={<Feed posts={posts} />} />
				<Route
					path="/s"
					element={<AddPost posts={posts} changePosts={changePosts} />}
				/>
			</Routes>
		</>
	);
}

// <Navigation />
// <Feed />
export default App;
