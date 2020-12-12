import React from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
	const renderMealItem = itemData => {
		return (
			<MealItem
				title={itemData.item.title}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				image={itemData.item.imageUrl}
				onSelectMeal={() => {}}
			/>
		);
	};

	const catId = props.navigation.getParam('categoryId');
	
	const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

	return (
		<View style={styles.screen}>
			<FlatList
				data={displayedMeals}
				keyExtractor={item => item.id}	// unneccessary with modern RN.. now automatically looks for id field
				renderItem={renderMealItem}
				style={{width: '100%'}}/>
		</View>
	);
};

CategoryMealsScreen.navigationOptions = navigationData => {
	const catId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
	return {
		headerTitle: selectedCategory.title
	}
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
	}
});

export default CategoryMealsScreen;