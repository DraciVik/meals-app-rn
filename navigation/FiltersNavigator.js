import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import FiltersScreen from "../screens/FiltersScreen";
import HeaderButton from "../components/HeaderButtons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Colors from "../constants/Colors";

const Stack = createStackNavigator();

function FiltersNavigator(props) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Platform.OS === "android" ? Colors.primary : "",
				},
				headerTitleStyle: {
					fontFamily: "open-sans-bold",
				},
				headerTintColor: "#fff",
			}}
		>
			<Stack.Screen
				name="Filter"
				component={FiltersScreen}
				options={{
					title: "Filter Meals",
					headerLeft: () => (
						<HeaderButtons HeaderButtonComponent={HeaderButton}>
							<Item
								title="Menu"
								iconName="ios-menu"
								onPress={() => props.navigation.toggleDrawer()}
							/>
						</HeaderButtons>
					),

					headerRight: (navData) => (
						<HeaderButtons HeaderButtonComponent={HeaderButton}>
							<Item
								title="Save"
								iconName="ios-save"
								onPress={() =>
									console.log(props.route.state.routes[0].params.save())
								}
							/>
						</HeaderButtons>
					),
				}}
				navigation={props.navigation}
			/>
		</Stack.Navigator>
	);
}

export default FiltersNavigator;
