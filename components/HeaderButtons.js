import React from "react";
import { Platform, StyleSheet } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const CustormHeaderButton = (props) => {
	return (
		<HeaderButton
			{...props}
			IconComponent={Ionicons}
			iconSize={23}
			color={Platform.OS === "android" ? "white" : Colors.primary}
		/>
	);
};

const styles = StyleSheet.create({});

export default CustormHeaderButton;
