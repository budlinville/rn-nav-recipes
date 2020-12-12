import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const MealsNavigator = createStackNavigator({
	Categories: CategoriesScreen,
	CategoryMeals: {
		screen: CategoryMealsScreen
	},
	MealDetail: MealDetailScreen
}, {
	// initialRouteName: 'Categories',	// uses first key-value pair by default
	mode: 'modal',
	defaultNavigationOptions: defaultStackNavOptions
	// navigationOptions: {} // Use this line to configure a nested navigator that is being used as a screen
	// i.e. use it for setting tab icons in a nestedm navigator
});

const FavNavigator = createStackNavigator({
	Favorites: FavoritesScreen,
	MealDetail: MealDetailScreen
}, {
	defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: tabInfo => (
				<Ionicons
					name="ios-restaurant"
					size={25}
					color={tabInfo.tintColor}
				/>
			),
			tabBarColor: Colors.primary	// only works with shifting
		}
	},
	Favorites: {
		screen: FavNavigator,
		navigationOptions: {
			// tabBarLabel: 'Favorites!',
			tabBarIcon: tabInfo => (
				<Ionicons
					name="ios-star"
					size={25}
					color={tabInfo.tintColor}
				/>
			),
			tabBarColor: Colors.accent
		}
	}
};

const MealsFavTabNavigator = Platform.OS === 'android'
	? createMaterialBottomTabNavigator(tabScreenConfig, {
		activeColor: "white",
		shifting: true,	// label only applies to active tab
		// barStyle: { backgroundColor: Colors.primary } // change tab bar bg color if shifting is false
	})
	: createBottomTabNavigator(tabScreenConfig, {
		tabBarOptions: {
			activeTintColor: Colors.accent
		}
	});

export default createAppContainer(MealsFavTabNavigator);