import React from 'react';
import { ScrollView, View } from 'react-native';
import TeamList from '../components/organisms/TeamList';
import colors from '../styles/colors.json';

const MainScreen = (props) => {
    return (
        <View style={{flex: 1, backgroundColor: colors.mainBgColor}}>
            <TeamList/>
        </View>
    );
}

export default MainScreen;
