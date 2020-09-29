import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../containers/MainScreen';
import AccountScreen from '../containers/AccountScreen';
import colors from '../styles/colors.json';

const MainStackNavigator = createStackNavigator();

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavigationContainer>
                <MainStackNavigator.Navigator initialRouteName='Main'>
                    <MainStackNavigator.Screen name='Main' component={MainScreen}/>
                    <MainStackNavigator.Screen name='Account' component={AccountScreen}/>
                </MainStackNavigator.Navigator>
            </NavigationContainer>
        );
    }
}

export default Main;
