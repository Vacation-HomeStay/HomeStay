import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View, Image
} from "react-native";
import { db, auth } from "../firebase";
const docRef = db.collection("users");

const LoginScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigation = useNavigation();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				userUid = auth.currentUser.uid;
				usersRef = docRef.doc(userUid);
				usersRef.get().then((doc) => {
					if (doc.exists) {
						console.log("EXISTS");
						// navigation.replace("WithDemographic");
						navigation.replace("Home");
					} else {
						console.log("NO EXISTS");
						navigation.replace("Demographic");
					}
				});
			}
		});

		return unsubscribe;
	}, []);

	const handleSignUp = () => {
		auth.createUserWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
				console.log("Registered with:", user.email);
			})
			.catch((error) => alert(error.message));
	};

	const handleLogin = () => {
		auth.signInWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
				console.log("Logged in with:", user.email);
			})
			.catch((error) => alert(error.message));
	};

	return (

		<>
		<Image source={require('../assets/image.png')} style={{width:350, marginTop: 50, marginHorizontal: 20}} resizeMode="contain"/>
		<KeyboardAvoidingView style={styles.container} behavior="padding">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Email"
					value={email}
					onChangeText={(text) => setEmail(text)}
					style={styles.input}
				/>
				<TextInput
					placeholder="Password"
					value={password}
					onChangeText={(text) => setPassword(text)}
					style={styles.input}
					secureTextEntry
				/>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity onPress={handleLogin} style={styles.button}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={handleSignUp}
					style={[styles.button, styles.buttonOutline]}
				>
					<Text style={styles.buttonOutlineText}>Register</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
		
		
		
		
		
		
		
		
		</>
		
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	inputContainer: {
		width: "80%",
	},
	input: {
		backgroundColor: "white",
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 15,
	},
	buttonContainer: {
		width: "60%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 40,
	},
	button: {
		backgroundColor: "#0782F9",
		width: "100%",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
	},
	buttonOutline: {
		backgroundColor: "white",
		marginTop: 5,
		borderColor: "#0782F9",
		borderWidth: 2,
	},
	buttonText: {
		color: "white",
		fontWeight: "700",
		fontSize: 16,
	},
	buttonOutlineText: {
		color: "#0782F9",
		fontWeight: "700",
		fontSize: 16,
	},
});
