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
			<ResidenciesList city = "Paris"></ResidenciesList>
			<Text>Settings</Text>
			<TouchableOpacity onPress={handleSignOut} style={styles.button}>
				<Text style={styles.buttonText}>Sign out</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SettingsScreen;

const styles = StyleSheet.create({});
