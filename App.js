import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import Demographic from "./screens/Demographic";
import SavedScreen from "./screens/SavedScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import SpecificResidence from "./screens/SpecificResidence";


import Listings from "./screens/Listings"
import { TouchableOpacity } from "react-native";
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function HomeTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Demographic}
				options={{
					tabBarLabel: "Profile",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="person-circle-sharp" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Saved"
				component={SavedScreen}
				options={{
					tabBarLabel: "Saved",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name="bookmark" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Setting"
				component={SettingsScreen}
				options={{
					headerShown: false,
					tabBarLabel: "Settings",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="settings" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false	
				}}
			>
				<Stack.Screen
					options={{ headerShown: false }}
					name="Login"
					component={LoginScreen}
				/>
				<Stack.Screen name="Home" component={HomeTabs} />
				<Stack.Screen name="Demographic" component={Demographic}  />
				<Stack.Screen name="SpecificResidence" component={SpecificResidence}/>
				<Stack.Screen name="Listings" component={Listings}/>
				
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
