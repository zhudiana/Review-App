import { createStackNavigator, CreateStackNavigator } from 'react-navigation-stack';
import Home from '../Screens/home';
import ReviewDetails from '../Screens/reviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone',
            //headerStyle: {backgroundColor: '#eee'}
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
           // headerStyle: {backgroundColor: '#eee'}
        }
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#eee', height: 60}
    }
});

export default HomeStack;

