import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../containers/MainScreen';
import AccountScreen from '../containers/AccountScreen';
import TeamScreen from '../containers/TeamScreen';
import RatingScreen from '../containers/RatingScreen';
import LoginScreen from '../containers/LoginScreen';

const MainStackNavigator = createStackNavigator();

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavigationContainer>
                <MainStackNavigator.Navigator initialRouteName='Login'>
                    <MainStackNavigator.Screen name='Login' component={LoginScreen}/>
                    <MainStackNavigator.Screen name='Main' component={MainScreen}/>
                    <MainStackNavigator.Screen name='Account' component={AccountScreen}/>
                    <MainStackNavigator.Screen name='Team' component={TeamScreen}/>
                    <MainStackNavigator.Screen name='Rating' component={RatingScreen}/>
                </MainStackNavigator.Navigator>
            </NavigationContainer>
        );
    }
}

export default Main;
