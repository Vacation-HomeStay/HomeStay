import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";

import {
	View,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native";
import { db, auth } from "../firebase";

const usersRef = db.collection("users");

export default function Demographic() {
	const navigation = useNavigation();
	const [age, setAge] = useState("");
	const [housestayType, setHousestayType] = useState("");
	const [activityType, setActivityType] = useState("");
	const [name, setName] = useState("");
	const [familyType, setFamilyType] = useState("");
	const handleSubmit = () => {
		// handle form submission, e.g. send data to Firestore
		complete =
			age != "" &&
			housestayType != "" &&
			activityType != "" &&
			name != "" &&
			familyType != "";
		if (complete) {
			const userData = {
				name: name,
				age: age,
				preferences: {
					housestayType: housestayType,
					activityType: activityType,
					familyType: familyType,
				},
			};
			
			// Add the user's data to the Firestore collection
			userUid = auth.currentUser.uid;
			console.log(userUid);
			usersRef
				.doc(userUid).set(userData)
				.then(() => {
					// alert("User data added to Firestore!");
					navigation.replace("Home");
				})
				.catch((error) => {
					alert("Error adding user data to Firestore: " + error);
				});
		} else {
			Alert.alert("Please fill out all fields");	
		}
	};
	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			keyboardShouldPersistTaps="handled"
			style={{ padding: 20 }}
		>
			<Text style={{ fontSize: 20 }}>Demographics</Text>
			<TextInput
				style={{
					height: 40,
					borderColor: "gray",
					borderWidth: 1,
					marginTop: 10,
				}}
				placeholder="Name"
				onChangeText={(text) => setName(text)}
				value={name}
			/>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				placeholder="Age"
				keyboardType="numeric"
				onChangeText={(text) => setAge(text)}
				value={age}
			/>
			<Text>House Preferance?</Text>
			<TouchableOpacity onPress={() => setHousestayType("Apartment")}>
				<Text>
					{housestayType === "Apartment" ? "✅" : "⏺️"} Apartment
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setHousestayType("Cabin")}>
				<Text>{housestayType === "Cabin" ? "✅" : "⏺️"} Cabin</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setHousestayType("House")}>
				<Text>{housestayType === "House" ? "✅" : "⏺️"} House</Text>
			</TouchableOpacity>

			<Text>Activity Preference?</Text>
			<TouchableOpacity onPress={() => setActivityType("Sightseeing")}>
				<Text>
					{activityType === "Sightseeing" ? "✅" : "⏺️"} Sightseeing
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setActivityType("Adventure")}>
				<Text>
					{activityType === "Adventure" ? "✅" : "⏺️"} Adventure
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setActivityType("Relaxation")}>
				<Text>
					{activityType === "Relaxation" ? "✅" : "⏺️"} Relaxation
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setActivityType("Culture")}>
				<Text>{activityType === "Culture" ? "✅" : "⏺️"} Culture</Text>
			</TouchableOpacity>

			<Text>What is your family type?</Text>
			<TouchableOpacity onPress={() => setFamilyType("Single")}>
				<Text>{familyType === "Single" ? "✅" : "⏺️"} Single</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setFamilyType("Couple")}>
				<Text>{familyType === "Couple" ? "✅" : "⏺️"} Couple</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => setFamilyType("Family with children")}
			>
				<Text>
					{familyType === "Family with children" ? "✅" : "⏺️"} Family
					with Children
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => setFamilyType("Family with no children")}
			>
				<Text>
					{familyType === "Family with no children" ? "✅" : "⏺️"}{" "}
					Family with no children
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setFamilyType("Group of friends")}>
				<Text>
					{familyType === "Group of friends" ? "✅" : "⏺️"} Group of
					friends
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={handleSubmit}>
				<Text style={styles.buttonText}>Submit</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	button: {
		backgroundColor: "#1E88E5",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		marginTop: 20,
	},
	buttonText: {
		color: "#FFF",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
});
