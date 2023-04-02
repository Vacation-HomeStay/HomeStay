import { StyleSheet, Text, View } from "react-native";
import React, {useState, useEffect} from "react";
import { db } from "../firebase";


function getDate(seconds) {
	// var utcSeconds = 1234567890;
	var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
	d.setUTCSeconds(seconds);
	const year = d.getFullYear();
	const month = String(d.getMonth() + 1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");

	// Format the date string in YYYY-MM-DD format
	const formattedDate = month + "/" + day + "/" + year;
	return formattedDate;
}
// ADD REVIEWER NAME TO PROPS

const Review = ({  rating, reviewText, user_uid , date}) => {
  const [userName, setUserName] = useState('');
	useEffect(() => {
		// Get a reference to the Firestore collection
		const usersRef = db.collection("users").doc(user_uid);

		// Get the name of the user
		usersRef
			.get()
			.then((doc) => {
				if (doc.exists) {
					const userData = doc.data();
					const userName = userData.name;
					setUserName(userName);
				} else {
					console.log("No such document!");
				}
			})
			.catch((error) => {
				console.log("Error getting document:", error);
			});
	}, []);
	return (
		<View paddingLeft={20} paddingTop={50} paddingRight={25}>
			<Text>
				{rating} by {userName} at {getDate(date)}
			</Text>
			<Text> comment: {reviewText} </Text>
		</View>
	);
};

export default Review;

const styles = StyleSheet.create({});
