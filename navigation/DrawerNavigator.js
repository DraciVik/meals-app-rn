import React from "react";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import FiltersNavigator from "./FiltersNavigator";
import Colors from "../constants/Colors";

const MainNavigator = createDrawerNavigator();
enableScreens();

const DrawerNavigator = () => {
	return (
		<NavigationContainer>
			<MainNavigator.Navigator
				drawerContentOptions={{
					activeTintColor: Colors.accentColor,
					labelStyle: {
						fontFamily: "open-sans-bold",
					},
				}}
			>
				<MainNavigator.Screen
					name="MealsFavs"
					component={TabNavigator}
					options={{
						title: "Meals",
					}}
				/>

				<MainNavigator.Screen name="Filters" component={FiltersNavigator} />
			</MainNavigator.Navigator>
		</NavigationContainer>
	);
};

export default DrawerNavigator;
