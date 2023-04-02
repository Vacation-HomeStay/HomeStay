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
					images: doc.data().images,
				}))
			);
		});
	}, []);

	return (
		<FlatList
			data={residences}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item }) => (
				<TouchableOpacity
					onPress={() =>
						navigation.navigate("Details", { id: item.id })
					}
				>
					<View style={styles.container}>
						<Text style={styles.hostName}>{item.host_name}</Text>
						<Text style={styles.cost}>{"$"+item.cost}</Text>
            <Image source={{uri: item.images[0]}} style={styles.image}/>
						
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
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
		width: 200,
		height: 200,
		marginHorizontal: 10,
	},
});

export default ResidenciesList;
