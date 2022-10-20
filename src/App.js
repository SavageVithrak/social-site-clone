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
			body: "Where is my toothbrush?",
			image:
				"https://as2.ftcdn.net/v2/jpg/04/43/66/71/1000_F_443667180_AaSXt7IPgZWYlnrfZ5X1kyfu0IbtL5dh.jpg",
			likes: 5,
		},
		{
			postId: 2,
			username: "Diana",
			body: "This is a different test",
			image:
				"https://img.icons8.com/external-anggara-flat-anggara-putra/344/external-send-email-interface-anggara-flat-anggara-putra.png",
			likes: 23,
		},
		{
			postId: 3,
			username: "Ross",
			body: "Please work!!!",
			image:
				"https://storage.googleapis.com/siteassetsswd/198/slideshow/663/20200625074107_56_o_1ba8en13b14c61b15hei1bd63jlc.jpg",
			likes: 11,
		},
	]);

	return (
		<>
			<Navigation />
			<Routes>
				<Route index path="/home" element={<Feed posts={posts} />} />
				<Route
					exact
					path="/newpost"
					element={<AddPost posts={posts} changePosts={changePosts} />}
				/>
			</Routes>
		</>
	);
}

// <Navigation />
// <Feed />
export default App;
