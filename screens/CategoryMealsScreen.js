import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = (props) => {
	const catId = props.route.params.categoryId;
	const availableMeals = useSelector((state) => state.meals.filteredMeals);

	const displayedMeals = availableMeals.filter(
		(meal) => meal.categoryIds.indexOf(catId) !== -1
	);
	if (displayedMeals.length === 0 || !displayedMeals) {
		return (
			<View style={styles.content}>
				<DefaultText>No meals found, maybe check your filters?</DefaultText>
			</View>
		);
	}
	return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default CategoryMealsScreen;
