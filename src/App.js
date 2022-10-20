import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddPost from "./components/AddPost";
import Feed from "./components/Feed";
import Navigation from "./components/Navigation";

function App() {
	const [posts, changePosts] = useState([
		{
			id: "Viorel",
			body: "This is a test",
			image:
				"https://image.shutterstock.com/image-photo/word-example-written-on-magnifying-260nw-1883859943.jpg",
		},
		{
			id: "Diana",
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
				<Route path="/newpost" element={<AddPost />} />
			</Routes>
		</>
	);
}

// <Navigation />
// <Feed />
export default App;
