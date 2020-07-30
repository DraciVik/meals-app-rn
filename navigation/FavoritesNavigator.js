import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { enableScreens } from "react-native-screens";

import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import CategoryScreen from "../screens/CategoriesScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import HeaderButton from "../components/HeaderButtons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

enableScreens();

function MealsNavigator(props) {
	return (
		<Stack.Navigator
			initialRouteName="Favourites"
			screenOptions={{
				headerStyle: {
					backgroundColor: Platform.OS === "android" ? Colors.primary : "",
				},
				headerTintColor: "#fff",
			}}
		>
			<Stack.Screen
				options={{ title: "Your Favorites" }}
				name="Favourites"
				component={FavouritesScreen}
				options={{
					headerLeft: (navData) => (
						<HeaderButtons HeaderButtonComponent={HeaderButton}>
							<Item
								title="Menu"
								iconName="ios-menu"
								onPress={() => props.navigation.toggleDrawer()}
							/>
						</HeaderButtons>
					),
				}}
			/>

			<Stack.Screen name="MealDetail" component={MealDetailScreen} />
		</Stack.Navigator>
	);
}

export default MealsNavigator;
