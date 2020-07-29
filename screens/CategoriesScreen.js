import React from "react";

import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<CategoryGridTile
				id={itemData.item.id}
				title={itemData.item.title}
				itemData={itemData}
				color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate({
						name: "CategoryMeals",
						params: {
							categoryId: itemData.item.id,
						},
					});
				}}
			/>
		);
	};

	return (
		<FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
	);
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
