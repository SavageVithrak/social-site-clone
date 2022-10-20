import React from "react";
import "./Feed.css";
import Post from "./Post";

function Feed(props) {
	const buildFeed = () => {
		let existingPosts = props.posts.map((post) => {
			return (
				<Post
					key={post.id}
					username={post.username}
					body={post.body}
					image={post.image}
					likes={post.likes}
				/>
			);
		});
		return existingPosts;
	};

	return <div className="margin-bottom">{buildFeed()}</div>;
}

export default Feed;
