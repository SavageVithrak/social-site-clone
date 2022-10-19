import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Post.css";

// TODO: Add props
function Post(props) {
	return (
		<div>
			<Card className="card" border="primary">
				<Card.Text className="username-label">{props.userName}</Card.Text>
				<Card.Body>
					<Card.Text>{props.text}</Card.Text>
					<Card.Img className="img-max-size" src={props.image} />
				</Card.Body>
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
