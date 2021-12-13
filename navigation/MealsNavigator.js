import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategorieMealScreen from '../screens/CategorieMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategorieMealScreen
    },
    MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);