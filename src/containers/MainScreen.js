import React from 'react';
import { StyleSheet, View } from 'react-native';
import TeamList from '../components/organisms/TeamList';
import colors from '../styles/colors.json';
import TEAMS from '../assets/teams.json';

const MainScreen = (props) => {
    return (
        <View style={styles.container}>
            <TeamList teams={TEAMS}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: colors.mainBgColor,
    }
});

export default MainScreen;
