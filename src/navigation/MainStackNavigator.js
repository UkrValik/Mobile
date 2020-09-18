import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../containers/MainScreen';
import colors from '../styles/colors.json';

const MainStackNavigator = createStackNavigator();

class Main extends React.Component {
    constructor() {
        super();
        this.mainScreenOptions = {
            title: 'Main',
            headerStyle: {
                backgroundColor: colors.mainBgColor,
                
            }
        }
    }

    render() {
        return (
            <NavigationContainer>
                <MainStackNavigator.Navigator>
                    <MainStackNavigator.Screen name='Main' component={MainScreen} options={this.mainScreenOptions}/>
                </MainStackNavigator.Navigator>
            </NavigationContainer>
        );
    }
}

export default Main;
