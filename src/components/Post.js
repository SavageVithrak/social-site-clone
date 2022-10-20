import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Post.css";

function Post(props) {
	const [comments, changesComments] = useState([
		{ name: "Derek", comment: "Wow that is amazing" },
		{ name: "Bill Gates", comment: "Testtttt" },
	]);

	const buildComments = () => {
		let createdComments = comments.map((comment) => {
			return (
				<p>
					{comment.name}: {comment.comment}
				</p>
			);
		});
		return createdComments;
	};

	return (
		<div>
			<Card className="card" border="primary">
				<Card.Text className="username-label">{props.username}</Card.Text>
				<Card.Body>
					<Card.Text>{props.body}</Card.Text>
					<Card.Img className="img-max-size" src={props.image} />
				</Card.Body>
				<label>Comments:</label>
				<div className="comment-box">{buildComments()}</div>
				<div className="like-comment">
					<Button variant="primary">Like</Button>
					<input></input>
					<img
						className="send-icon"
						src="https://img.icons8.com/ios-glyphs/344/filled-sent.png"
						alt="Send icon"
					/>
				</div>
			</Card>
		</div>
	);
}

export default Post;
