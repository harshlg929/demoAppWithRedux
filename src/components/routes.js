import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
// import CounterApp from './CounterComponent';
import Home from './home/home';
import Profile from './profile/profile';

const stack = createStackNavigator({
    Home: {
        screen: Home
    },
    Profile: {
        screen: Profile
    },
},
    {
        initialRouteName: "Home",
        // defaultNavigationOptions: {
        //     headerStyle: {
        //         backgroundColor: 'dodgerblue',
        //     },
        //     headerTintColor: '#fff',
        //     headerTitleStyle: {
        //         fontWeight: 'bold',
        //     },
        //     headerTitle: 'Hello'
        // },
    },

);

const App = createAppContainer(stack);

class Routes extends React.Component {
    render() {
        return (
            <App />
        );
    }
}
export default Routes;
