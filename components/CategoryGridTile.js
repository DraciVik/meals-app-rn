import React from "react";
import {
	TouchableOpacity,
	View,
	StyleSheet,
	Text,
	Platform,
	TouchableNativeFeedback,
} from "react-native";

const CategoryGridTile = ({ onSelect, title, color }) => {
	let TouchableComp = TouchableOpacity;

	if (Platform.OS === "android" && Platform.Version >= 21) {
		TouchableComp = TouchableNativeFeedback;
	}
	return (
		<View style={styles.gridItem}>
			<TouchableComp stlye={{ flex: 1 }} onPress={onSelect}>
				<View style={{ backgroundColor: color, ...styles.container }}>
					<Text numberOfLines={2} style={styles.title}>
						{title}
					</Text>
				</View>
			</TouchableComp>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		borderRadius: 10,
		elevation: 3,
		overflow:
			Platform.OS === "android" && Platform.Version >= 21
				? "hidden"
				: "visible",
		shadowColor: "black",
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
	},
	container: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "flex-end",
		borderRadius: 10,
		padding: 15,
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		textAlign: "right",
	},
});

export default CategoryGridTile;
