import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	Button, ScrollView
} from "react-native";

import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Review from "../components/Review";

const reviewsRef = db.collection("reviews");
const usersRef = db.collection("users");

const itineraryRef = db.collection("itinerary");

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

const SpecificResidence = (item) => {
	nav = item["route"]["params"]["navigation"];
	item = item["route"]["params"]["item"];

	const [reviews, setReviews] = useState([]);
	const [itinerary, setItinerary] = useState([]);
	useEffect(() => {
		const matchingReviews = reviewsRef.where("vacationid", "==", item.id);

		// get the matching documents
		matchingReviews.get().then((querySnapshot) => {
			setReviews(
				querySnapshot.docs.map((doc) => ({
					user_id: doc.data().reviewer_uid,
					date: doc.data().dateofstay,
					rating: doc.data().reviews.rating,
					review: doc.data().reviews.review,
				}))
			);
		});
	}, []);

	useEffect(() => {
		const documentRef = db.collection("itinerary").doc(item.id);

		documentRef.get().then((doc) => {
			if (doc.exists) {
				const data = doc.data().itinerary;
				setItinerary((prevState) => [...prevState, data]);
			} else {
				console.log("No such document!");
			}
		});
	}, []);

	return (
		<ScrollView> 
			<View paddingTop={50}>
			
			<Text style = {{fontSize: 27,
						marginTop: 15,
						paddingHorizontal: 15,
						color: "#2596be"}} >{item.host_name}'s Homestay from {getDate(item.first_day)} to {getDate(item.second_day)}</Text>
			<Text style = {{fontSize: 15,
						marginTop: 10,
						paddingHorizontal: 15,
						fontSize:20,
						fontWeight: 'bold'}}> ${item.cost}/night</Text>
			<Text style = {{fontSize: 30,
						marginTop: 34,
						paddingHorizontal: 15,
						color: "#2596be",
						}} >Reviews</Text>
			{reviews.map((singlereview, i) => (
				<Review
					rating={singlereview.rating}
					reviewText={singlereview.review}
					user_uid={singlereview.user_id}
					date={singlereview.date.seconds}
				></Review>
			))}
			<Text style = {{fontSize: 30,
						marginTop: 45,
						paddingHorizontal: 15,
						color: "#2596be"}} >Itinerary</Text>
			<Text style = {{marginTop:30, marginHorizontal:50}}> {itinerary[0]}</Text>
		</View>
		<Button title="Book" style={{fontSize: 20, color: 'blue'}}
  styleDisabled={{color: 'red'}}> Book</Button>
		</ScrollView>
		
	);
};

export default SpecificResidence;

const styles = StyleSheet.create({});

/*
	3. Get Itinerary -> ak
	4. Show Itinerary -> jk

	5. Show data in item variable -> jk & ak

	6. Image Slider
	*/
