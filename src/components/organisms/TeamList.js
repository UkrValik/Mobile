import React from 'react';
import { ScrollView } from 'react-native';
import TeamListItem from '../molecules/TeamListItem';

const TeamList = (props) => {
    return (
        <ScrollView style={{marginTop: 3}}>
            {props.teams.map(team => (<TeamListItem key={team.teamId} team={team}/>))}
        </ScrollView>
    );
}

export default TeamList;
