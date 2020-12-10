import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
	Categories: CategoriesScreen,	// short-form
	CategoryMeals: {	// long-form
		screen: CategoryMealsScreen
		// ...long-form allows for extra configurations
	},
	MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);