import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';


const screens = {
    Splash: {
        screen: SplashScreen
    },
    Home: {
        screen: HomeScreen
    }
}

const HomeStack = createStackNavigator(screens)