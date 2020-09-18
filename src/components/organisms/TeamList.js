import React from 'react';
import { ScrollView } from 'react-native';
import TeamListItem from '../molecules/TeamListItem';

const TeamList = (props) => {
    return (
        <ScrollView>
            <TeamListItem/>
        </ScrollView>
    );
}

export default TeamList;
