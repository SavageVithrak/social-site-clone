import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import "./Post.css";

function AddPost(props) {
	let newPostId = props.posts.length + 1;

	const [formValues, changeFormValues] = useState({
		// Make sure postId isn't getting double incremented
		postId: newPostId,
		username: "",
		body: "",
		image: "",
		// Default form values
	});

	const handleChange = (event) => {
		let fieldValue = event.target.value;
		let fieldName = event.target.name;
		const newState = { ...formValues };

		newState[fieldName] = fieldValue;
		changeFormValues(newState);
	};

	const submit = () => {
		props.changePosts((posts) => {
			let newPosts = [...posts, formValues];
			return newPosts;
		});
		toastr["success"]("New post added!", "Success");
		newPostId++;
		changeFormValues({ postId: newPostId, username: "", body: "", image: "" });
		console.log(props.posts);
		// TODO: add Toastr notification
	};

	return (
		<Card className="card">
			<header>Create a new post</header>
			<br />
			<Form>
				{/* Username field */}
				<Form.Group className="row" controlId="postUsername">
					<Form.Label>Username:</Form.Label>
					<Form.Control
						name="username"
						value={formValues.username}
						onChange={(event) => handleChange(event)}
					/>
				</Form.Group>
				{/* Body field */}
				<Form.Group className="row" controlId="postBody">
					<Form.Label>Post text:</Form.Label>
					<Form.Control
						name="body"
						value={formValues.body}
						onChange={(event) => handleChange(event)}
					/>
				</Form.Group>
				{/* Body field */}
				<Form.Group className="row" controlId="postImage">
					<Form.Label>Image link:</Form.Label>
					<Form.Control
						name="image"
						value={formValues.image}
						onChange={(event) => handleChange(event)}
					/>
				</Form.Group>
				{/* Submit Button */}
				<Button onClick={() => submit()}>Post</Button>
			</Form>
		</Card>
	);
}

export default AddPost;
