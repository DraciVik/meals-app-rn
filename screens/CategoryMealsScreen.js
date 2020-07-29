import React, { useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
	const catId = props.route.params.categoryId;

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) !== -1
	);
	return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
