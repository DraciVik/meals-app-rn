import React, { useLayoutEffect } from "react";

import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButtons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const MealDetailScreen = (props) => {
	const mealId = props.route.params.mealId;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	useLayoutEffect(() => {
		props.navigation.setOptions({
			title: selectedMeal.title,
			headerRight: () => (
				<HeaderButtons HeaderButtonComponent={HeaderButton}>
					<Item
						title="Favorite"
						iconName="ios-star"
						onPress={() => {
							console.log("Mark as favorite");
						}}
					/>
				</HeaderButtons>
			),
		});
	});

	return (
		<View style={styles.screen}>
			<Text>{selectedMeal.title}</Text>
			<Button
				title="Navigate to Home"
				onPress={() => props.navigation.popToTop()}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default MealDetailScreen;
