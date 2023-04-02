import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	FlatList,
	Image,
} from "react-native";
import { db, auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const residencesRef = db.collection("individual_residence");
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
const ResidenciesList = ({ city }) => {
	const navigation = useNavigation();

	const [residences, setResidences] = useState([]);

	useEffect(() => {
		const matchingResidences = residencesRef.where("city", "==", city);

		// get the matching documents
		matchingResidences.get().then((querySnapshot) => {
			setResidences(
				querySnapshot.docs.map((doc) => ({
					id: doc.id,
					host_name: doc.data().host_name,
					cost: doc.data().cost,
					first_day: doc.data().open_days[0].seconds,
					second_day: doc.data().open_days[1].seconds,
					images: doc.data().images,
					city: doc.data().city,
					contact: doc.data().host_contact,
					room_number: doc.data().number_of_rooms,
				}))
			);
		});
	}, []);

	return (
		<View padding={30} >
			<Text style = {{color: "#2596be", fontSize:30, textAlign: "center"}}>Homestays in {city}</Text>
			<FlatList
				contentContainterStyle={styles.packagesListContainer}
				data={residences}
				keyExtractor={(item) => {
					item.id.toString();
				}}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("SpecificResidence", {
								navigation: navigation,
								item: item,
							})
						}
					>
						<View style={styles.container}>
							<Text style={styles.hostName}>
								{item.host_name}
							</Text>
							<Text style={styles.cost}>
								{"$" + item.cost + "/night"}
							</Text>
							{/* change styling */}
							<Text style={styles.cost}>
								{getDate(item.first_day)}{" "}
							</Text>
							<Text>to</Text>
							<Text style={styles.cost}>
								{getDate(item.second_day)}{" "}
							</Text>
							<Image
								source={{ uri: item.images[0] }}
								style={styles.image}
							/>
							<View style={{ marginTop: 40 }}></View>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 100,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	hostName: {
		fontSize: 18,
		fontWeight: "bold",
		marginTop: 10,
	},
	cost: {
		fontSize: 16,
		marginBottom: 10,
	},
	image: {
		width: "155%",
		height: "155%",
		borderRadius: 10,
		marginHorizontal: 10,
		marginVertical: 1,
	},
	packagesList: {
		backgroundColor: "#89CFF0",
	},
	packagesListContainer: {
		backgroundColor: "#1a1d27",
		paddingVertical: 8,
		marginHorizontal: 8,
	},
});

export default ResidenciesList;
