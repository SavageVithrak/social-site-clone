import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPost from "./components/AddPost";
import Feed from "./components/Feed";
import Navigation from "./components/Navigation";

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" index element={<Feed />} />
				<Route path="/newpost" element={<AddPost />} />
			</Routes>
		</>
	);
}

// <Navigation />
// <Feed />
export default App;
