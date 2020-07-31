import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const FavouritesScreen = (props) => {
	const favMeals = useSelector((state) => state.meals.favoriteMeals);
	if (favMeals.length === 0 || !favMeals) {
		return (
			<View style={styles.content}>
				<DefaultText>No favorite meals found. Start adding some!</DefaultText>
			</View>
		);
	}

	return <MealList listData={favMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default FavouritesScreen;
