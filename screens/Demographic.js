import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native';
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
	const [budget, setBudget] = useState(0);
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
				budget: budget,
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
				.doc(userUid)
				.set(userData)
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
		<View style={{backgroundColor: "#efeaed"}}>
			<Image source={require('../assets/image.png')} style={{width:350}} resizeMode="contain"/>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				keyboardShouldPersistTaps="handled"
				style={{ paddingLeft: 20, paddingRight:20, paddingBottom:20, paddingVertical:5 }}
			>
				
				

				<Text
					style={{
						fontSize: 30,
						marginTop: 1,
						paddingHorizontal: 0,
						color: "#2596be",
					}}
				>
					Demographics
				</Text>
				<TextInput
					style={{
						height: 40,
						borderRadius: 8,
						borderColor: "gray",
						borderWidth: 1,
						marginTop: 5,
					}}
					placeholder="  Name"
					onChangeText={(text) => setName(text)}
					value={name}
				/>
				<TextInput
					style={{
						height: 40,
						borderColor: "gray",
						borderWidth: 1,
						marginTop: 15,
						borderRadius: 8,
					}}
					placeholder="  Age"
					keyboardType="numeric"
					onChangeText={(text) => setAge(text)}
					value={age}
				/>
				<TextInput
					style={{
						height: 40,
						borderColor: "gray",
						borderWidth: 1,
						marginTop: 15,
						borderRadius: 8,
					}}
					placeholder="  Budget"
					keyboardType="numeric"
					onChangeText={(text) => setBudget(text)}
					value={budget}
				/>
				<Text
					style={{
						fontSize: 23,
						marginTop: 20,
						paddingHorizontal: 0,
						color: "#2596be",
					}}
				>
					House Preferance?
				</Text>
				<TouchableOpacity onPress={() => setHousestayType("Apartment")}>
					<Text style={{ fontSize: 17, marginTop: 10 }}>
						{housestayType === "Apartment" ? "✅" : "⏺️"} Apartment
					</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => setHousestayType("Cabin")}>
					<Text style={{ fontSize: 17, marginTop: 10 }}>
						{housestayType === "Cabin" ? "✅" : "⏺️"} Cabin
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setHousestayType("House")}>
					<Text style={{ fontSize: 17, marginTop: 10 }}>
						{housestayType === "House" ? "✅" : "⏺️"} House
					</Text>
				</TouchableOpacity>

				<Text
					style={{
						fontSize: 23,
						marginTop: 20,
						paddingHorizontal: 0,
						color: "#2596be",
					}}
				>
					Activity Preference?
				</Text>
				<TouchableOpacity
					onPress={() => setActivityType("Sightseeing")}
				>
					<Text style={{ fontSize: 17, marginTop: 10 }}>
						{activityType === "Sightseeing" ? "✅" : "⏺️"}{" "}
						Sightseeing
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setActivityType("Adventure")}>
					<Text style={{ fontSize: 17, marginTop: 10 }}>
						{activityType === "Adventure" ? "✅" : "⏺️"} Adventure
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setActivityType("Relaxation")}>
					<Text style={{ fontSize: 17, marginTop: 10 }}>
						{activityType === "Relaxation" ? "✅" : "⏺️"} Relaxation
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setActivityType("Culture")}>
					<Text style={{ fontSize: 17, marginTop: 10 }}>
						{activityType === "Culture" ? "✅" : "⏺️"} Culture
					</Text>
				</TouchableOpacity>

				<Text
					style={{
						fontSize: 23,
						marginTop: 20,
						paddingHorizontal: 0,
						color: "#2596be",
					}}
				>
					What is your family type?
				</Text>
				<TouchableOpacity onPress={() => setFamilyType("Single")}>
					<Text style={{ fontSize: 17, marginTop: 10 }}>
						{familyType === "Single" ? "✅" : "⏺️"} Single
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setFamilyType("Couple")}>
					<Text style={{ fontSize: 17, marginTop: 10 }}>
						{familyType === "Couple" ? "✅" : "⏺️"} Couple
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setFamilyType("Family with children")}
				>
					<Text style={{ fontSize: 17, marginTop: 10 }}>
						{familyType === "Family with children" ? "✅" : "⏺️"}{" "}
						Family with Children
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setFamilyType("Family with no children")}
				>
					<Text style={{ fontSize: 17, marginTop: 10 }}>
						{familyType === "Family with no children" ? "✅" : "⏺️"}{" "}
						Family with no children
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setFamilyType("Group of friends")}
				>
					<Text style={{ fontSize: 17, marginTop: 10 }}>
						{familyType === "Group of friends" ? "✅" : "⏺️"} Group
						of friends
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={handleSubmit}>
					<Text
						style={{
							color: "#FFF",
							fontSize: 16,
							fontWeight: "bold",
							textAlign: "center"
						}}
					>
						Submit
					</Text>
				</TouchableOpacity>
				<View height={100}></View>
			</ScrollView>
		</View>
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
