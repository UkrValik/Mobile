import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import TeamScreenIcons from '../components/atoms/TeamScreenIcons';
import MonthChallengeDiagram from '../components/molecules/MonthChallengeDiagram';
import ChallengeHeader from '../components/atoms/ChallengeHeader';
import InputDailyData from '../components/molecules/InputDailyData';
import RatingButton from '../components/atoms/RatingButton';
import colors from '../styles/colors.json';
import teamResponse from '../assets/team.json';

class TeamScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team: this.props.route.params.team,
            manualDataInput: true,
        };
        this.props.navigation.setOptions({
            title: this.state.team.teamName,
            headerStyle: {
                backgroundColor: colors.mainBgColor,
                borderBottomColor: colors.mainColor,
                borderBottomWidth: 5,
                elevation: 0,
            },
            headerTintColor: colors.mainColor,
            headerTitleStyle: {
                flex: 1,
                marginRight: '20%',
                textAlign: 'center',
                color: colors.textColor,
            },
        });

        this.toggleDataInput = this.toggleDataInput.bind(this);
    }

    toggleDataInput() {
        this.setState({ manualDataInput: !this.state.manualDataInput });
    }

    render() {

        return (
            <ScrollView style={{backgroundColor: colors.mainBgColor}}>
                <ChallengeHeader/>
                <TeamScreenIcons team={this.state.team}/>
                <MonthChallengeDiagram consumer={teamResponse.participants[0]} team={teamResponse} month='Sep' from={18} till={27}/>
                <InputDailyData toggleDataInput={this.toggleDataInput} manualDataInput={this.state.manualDataInput}/>                
                <RatingButton navigate={this.props.navigation.navigate}/>
            </ScrollView>
        );
    }
}

export default TeamScreen;
