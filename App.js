import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultScreen from './src/screens/ResultScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow: ResultScreen
  }, 
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'BusinessSearch',
      //headerShown: false,
      cardStyle: {
        backgroundColor: "rgba(0,0,0,0)",
      }
    }
    
  }
);

export default createAppContainer(navigator);