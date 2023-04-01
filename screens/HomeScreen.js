import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";
import CarouselCards from "../components/CarouselCards";
import { SafeAreaView } from "react-native-safe-area-context";
import Demographic from "./Demographic";
import SavedScreen from "./SavedScreen";
import SettingsScreen from "./SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeScreen = () => {
	const navigation = useNavigation();

	const handleSignOut = () => {
		auth.signOut()
			.then(() => {
				navigation.replace("Login");
			})
			.catch((error) => alert(error.message));
	};
	
	return (
		<View style={styles.container}>
			<SafeAreaView>
				<CarouselCards />
			</SafeAreaView>

			<Text>Email: {auth.currentUser?.email}</Text>
			<Text>{auth.currentUser.uid}</Text>


		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		backgroundColor: "#0782F9",
		width: "60%",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
		marginTop: 40,
	},
	buttonText: {
		color: "white",
		fontWeight: "700",
		fontSize: 16,
	},
});
