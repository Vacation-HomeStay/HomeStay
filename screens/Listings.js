import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";
import ResidenciesList from "./ResidenciesList";
import { db } from "../firebase";

const Listings = (city) => {
	const navigation = useNavigation();
	city = city["route"]["params"]["city"];
	
	const handleSignOut = () => {
		auth.signOut()
			.then(() => {
				navigation.replace("Login");
			})
			.catch((error) => alert(error.message));
	};
	return (
		<View>
			<ResidenciesList city = {city}></ResidenciesList>
			<Text>{console.log(city)}</Text>
			<Text>{city}</Text>
			<TouchableOpacity onPress={handleSignOut} style={styles.button}>
				<Text style={styles.buttonText}>Sign out</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Listings;

const styles = StyleSheet.create({});
