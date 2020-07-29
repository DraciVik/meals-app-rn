import React from "react";
import { Platform } from "react-native";
import { enableScreens } from "react-native-screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import FavoritesNavigator from "./FavoritesNavigator";

// import FavouritesScreen from "../screens/FavouritesScreen";
import Colors from "../constants/Colors";
import MealsNavigator from "./MealsNavigator";

const MealsFavTabNavigator =
	Platform.OS === "android"
		? createMaterialBottomTabNavigator()
		: createBottomTabNavigator();

enableScreens();

function TabNavigator() {
	return (
		<NavigationContainer>
			<MealsFavTabNavigator.Navigator
				activeColor={"white"}
				shifting={true}
				barStyle={{ backgroundColor: Colors.primary }}
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						if (route.name === "Categories") {
							iconName = "ios-restaurant";
						} else if (route.name === "Favorites") {
							iconName = "ios-star";
						}
						return <Ionicons name={iconName} size={25} color={color} />;
					},
				})}
			>
				<MealsFavTabNavigator.Screen
					name="Categories"
					component={MealsNavigator}
					options={{ tabBarColor: Colors.primary }}
				/>
				<MealsFavTabNavigator.Screen
					name="Favorites"
					component={FavoritesNavigator}
					options={{ tabBarColor: Colors.accentColor }}
				/>
			</MealsFavTabNavigator.Navigator>
		</NavigationContainer>
	);
}

export default TabNavigator;
