import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Review from "../components/Review";

const reviewsRef = db.collection("reviews");
const usersRef = db.collection("users");

const iternaryRef = db.colleection("itnerary");

const SpecificResidence = (item) => {
	nav = item["route"]["params"]["navigation"];
	item = item["route"]["params"]["item"];



	const [reviews, setReviews] = useState([]);
	const [itinerary, setItinerary] = useState([])
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
	console.log(reviews);

	return (
		<View paddingTop={50}>
			<Text>Reviews for {console.log(reviews)}</Text>
			{reviews.map((singlereview,i) => (
				<Review rating={singlereview.rating} reviewText={singlereview.review} user_uid= {singlereview.user_id} date = {singlereview.date.seconds}></Review>
				
			))}
		</View>
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
