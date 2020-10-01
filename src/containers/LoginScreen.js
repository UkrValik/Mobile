import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import colors from '../styles/colors.json';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
            title: 'Login',
            headerStyle: {
                backgroundColor: colors.mainBgColor,
                borderBottomColor: colors.mainColor,
                borderBottomWidth: 5,
                elevation: 0,
            },
            headerTintColor: colors.mainColor,
            headerTitleStyle: {
                color: colors.textColor,
                flex: 1,
                textAlign: 'center'
            }
        });
    }

    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Input/>
                <Input/>
                <Button
                    title='Sign in'
                    onPress={() => this.props.navigation.navigate('Main')}
                    />
            </View>
        );
    }
}

export default LoginScreen;
