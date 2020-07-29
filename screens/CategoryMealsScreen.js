import React, { useLayoutEffect } from "react";

import { View, StyleSheet, FlatList, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props) => {
	const renderMealItem = (itemData) => {
		return (
			<MealItem
				title={itemData.item.title}
				onSelectMeal={() => {
					props.navigation.navigate("MealDetail", {
						mealId: itemData.item.id,
					});
				}}
				navigation={props.navigation}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				image={itemData.item.imageUrl}
			/>
		);
	};
	const catId = props.route.params.categoryId;

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) !== -1
	);
	console.log(displayedMeals);
	return (
		<View style={styles.screen}>
			<FlatList
				data={displayedMeals}
				renderItem={renderMealItem}
				style={{ width: "100%" }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
	},
});

export default CategoryMealsScreen;
