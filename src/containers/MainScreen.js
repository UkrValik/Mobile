import React from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import TeamList from '../components/organisms/TeamList';
import colors from '../styles/colors.json';
import TEAMS from '../assets/teams.json';

class MainScreen extends React.Component {

    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
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
                    onPress={() => props.navigation.navigate('Account')}
                    />
            )
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <TeamList teams={TEAMS}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: colors.mainBgColor,
    }
});

export default MainScreen;
