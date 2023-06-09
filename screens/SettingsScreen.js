import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";
import ResidenciesList from "./ResidenciesList";

const SettingsScreen = () => {
	const navigation = useNavigation();

	const handleSignOut = () => {
		auth.signOut()
			.then(() => {
				navigation.replace("Login");
			})
			.catch((error) => alert(error.message));
	};
	return (
		<View>
			<Text
				style={{
					fontSize: 30,
					marginTop: 55,
					paddingHorizontal: 140,
					color: "#2596be",
				}}
			>
				Settings
			</Text>
			<View style={{marginLeft:99}}>
				<TouchableOpacity onPress={handleSignOut} style={styles.button}>
					<Text style={styles.buttonText}>Sign out</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SettingsScreen;

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#1E88E5",
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderRadius: 12,
		width: 200,
		marginTop: 290,
	},
	buttonText: {
		color: "#FFF",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
});
