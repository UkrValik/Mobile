import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import VerticalStatusBar from '../atoms/VerticalStatusBar';
import colors from '../../styles/colors.json';

const MonthChallengeDiagram = (props) => {
    let days = [];
    for (let i = props.from; i <= props.till; ++i) {
        days.push(i);
    }
    return (
        <View style={{flex: 0.2, marginTop: 10}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
                <Text style={{marginLeft: -30, marginTop: -10, alignSelf: 'flex-start', color: colors.midgray}}>
                    {props.month}-
                </Text>
                <View style={{ borderWidth: 1, borderColor: colors.borderColor, width: '80%', height: Dimensions.get('screen').height / 5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                    {props.consumer.scores.map(score => (
                        <VerticalStatusBar key={score.date} percent={100 * score.score / 100} color={colors.yellowgreen} days={10}/>
                    ))}
                </View>
            </View>
            <View style={{flexDirection: 'row', width: '80%', justifyContent: 'space-between', alignSelf: 'center'}}>
                {days.map(day => (
                    <Text key={day.toString()} style={{color: colors.midgray}}>
                        {day.toString()}
                    </Text>
                ))}
            </View>
        </View>
    );
}

export default MonthChallengeDiagram;
