import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { enableScreens } from "react-native-screens";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButtons";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import CategoryScreen from "../screens/CategoriesScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

enableScreens();

function MealsNavigator(props) {
	return (
		<Stack.Navigator
			initialRouteName="Categories"
			screenOptions={{
				headerStyle: {
					backgroundColor: Platform.OS === "android" ? Colors.primary : "",
				},
				headerTitleStyle: {
					fontFamily: "open-sans-bold",
				},
				// cardStyle: {
				// 	paddingHorizontal: 10,
				// },
				headerBackTitleStyle: { fontFamily: "open-sans" },
				headerTintColor: "#fff",
			}}
		>
			<Stack.Screen
				name="Categories"
				component={CategoryScreen}
				options={{
					headerLeft: () => (
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
			<Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
			<Stack.Screen name="Favourites" component={FavouritesScreen} />
		</Stack.Navigator>
	);
}

export default MealsNavigator;
