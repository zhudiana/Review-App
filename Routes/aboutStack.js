import { createStackNavigator } from '@react-navigation-stack';
import AboutStack from './homeStack';
import About from '../Screens/about';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About GameZone',
        }
    },
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#eee', height: 60}
    }
});

export default AboutStack;

