import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { enableScreens } from "react-native-screens";

import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

enableScreens();

function MealsNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Categories"
				screenOptions={{
					headerStyle: {
						backgroundColor: Platform.OS === "android" ? Colors.primary : "",
					},
					headerTintColor: "#fff",
				}}
				// mode="modal"
			>
				<Stack.Screen name="MealDetail" component={MealDetailScreen} />
				<Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
				<Stack.Screen name="Favourites" component={FavouritesScreen} />
				<Stack.Screen name="Filters" component={FiltersScreen} />
				<Stack.Screen
					name="Categories"
					component={CategoriesScreen}
					options={{
						title: "Meal Categories",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default MealsNavigator;
