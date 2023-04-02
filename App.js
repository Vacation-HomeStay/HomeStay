import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useContext, createContext } from 'react';

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
					headerShown: false,
				}}
			>
				<Stack.Screen
					options={{ headerShown: false }}
					name="Login"
					component={LoginScreen}
				/>
				<Stack.Screen name="Home" component={HomeTabs} />
				<Stack.Screen name="Demographic" component={Demographic} />
				<Stack.Screen name="SpecificResidence" component={SpecificResidence}/>
				<Stack.Screen name="Listings" component={Listings}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
const LikedPostsContext = createContext();

// Create a provider component to wrap your app and provide the context to its children
const LikedPostsProvider = ({ children }) => {
  const [likedPosts, setLikedPosts] = useState([]);

  // Function to add a post to the likedPosts array
  const addLikedPost = (post) => {
    setLikedPosts([...likedPosts, post]);
  };

  // Function to remove a post from the likedPosts array
  const removeLikedPost = (post) => {
    const updatedLikedPosts = likedPosts.filter((likedPost) => likedPost.id !== post.id);
    setLikedPosts(updatedLikedPosts);
  };

  // Value object containing the likedPosts array and functions to add and remove posts from it
  const value = {
    likedPosts,
    addLikedPost,
    removeLikedPost,
  };

  // Return the provider component with the value object as its value prop
  return (

// Custom hook to easily access the liked posts context and its values from any component
const useLikedPosts = () => {
  const context = useContext(LikedPostsContext);
  if (context === undefined) {
    throw new Error('useLikedPosts must be used within a LikedPostsProvider');
  }
  return context;
};

export { LikedPostsProvider, useLikedPosts };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
