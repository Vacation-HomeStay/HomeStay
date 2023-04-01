import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default function CarouselCardItem( {item	, index} ) {
	const [isLiked, setIsLiked] = useState(false);
	const toggleLike = () => {
		setIsLiked(!isLiked);
	  }
	return (
		<View style={styles.container} key={index}>
			<Image source={{ uri: item.imgUrl }} style={styles.image} />
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text style={styles.header}>{item.title}</Text>
				<TouchableOpacity onPress={toggleLike}>
					<AntDesign name={isLiked ? "heart" : "hearto"} size={24} color="#ff7875" paddingRight={20} style={styles.header}/>
				</TouchableOpacity>
			</View>

			<Text style={styles.body}>{item.body}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		borderRadius: 8,
		width: ITEM_WIDTH,
		paddingBottom: 40,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
	},
	image: {
		width: ITEM_WIDTH,
		height: 300,
	},
	header: {
		color: "#222",
		fontSize: 28,
		fontWeight: "bold",
		paddingLeft: 20,
		paddingTop: 20,
	},
	heartIcon: {
		name: "heart",
		size: 24,
		color: "black",
		paddingTop: 20,
		paddingRight: 20,
	},
	body: {
		color: "#222",
		fontSize: 18,
		paddingLeft: 20,
		paddingLeft: 20,
		paddingRight: 20,
	},
});

