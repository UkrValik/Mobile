import React from 'react';
import { Icon } from 'react-native-elements';
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
                borderBottomColor: colors.mainColor,
                borderBottomWidth: 5,
                elevation: 0,
            },
            headerTintColor: colors.textColor,
            headerTitleStyle: {
                flex: 1,
                marginLeft: '20%',
                textAlign: 'center'
            },
            headerRight: () => (
                <Icon
                    type='material-community'
                    name='account'
                    containerStyle={{flex: 1, justifyContent: 'center',marginRight: 10}}
                    color={colors.mainColor}
                    size={26}
                    />
            )
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
