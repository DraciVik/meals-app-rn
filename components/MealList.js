import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "../components/MealItem";

const MealList = (props) => {
	const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
	const renderMealItem = (itemData) => {
		const isFavorite = favoriteMeals.some(
			(meal) => meal.id === itemData.item.id
		);
		return (
			<MealItem
				title={itemData.item.title}
				onSelectMeal={() => {
					props.navigation.navigate("MealDetail", {
						mealId: itemData.item.id,
						title: itemData.item.title,
						isFav: isFavorite,
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

	return (
		<View style={styles.list}>
			<FlatList
				data={props.listData}
				renderItem={renderMealItem}
				style={{ width: "100%" }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
	},
});
export default MealList;
