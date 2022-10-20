import React from "react";
import "./Feed.css";
import Post from "./Post";

function Feed(props) {
	const buildFeed = () => {
		let createdPosts = props.posts.map((post) => {
			return (
				<Post key={post.id} id={post.id} body={post.body} image={post.image} />
			);
		});
		return createdPosts;
	};

	return <div className="margin-bottom">{buildFeed()}</div>;
}

export default Feed;
