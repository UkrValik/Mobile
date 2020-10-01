import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../styles/colors.json';

const TeamScreenIcons = (props) => {
    return (
        <View style={{flex: 0.3}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginVertical: 10}}>
                <View style={{flex: 0.4, flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                        type='material-community'
                        name='account-multiple'
                        size={60}
                        />
                    <View style={{flex: 1, marginLeft: 5}}>
                        <Text style={{color: colors.mainColor}}>
                            3
                        </Text>
                        <Text>
                            Active participants
                        </Text>
                    </View>
                </View>
                <View style={{flex: 0.4, flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                        type='material-community'
                        name='star-circle'
                        size={60}
                        />
                    <View style={{flex: 1, flexDirection: 'column', marginLeft: 5}}>
                        <Text style={{color: colors.mainColor}}>
                            1 from 3
                        </Text>
                        <Text>
                            Your rank
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginVertical: 10}}>
                <View style={{flex: 0.4, flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                        type='material-community'
                        name='timer'
                        size={60}
                        />
                    <View style={{flex: 1, flexDirection: 'column', marginLeft: 5}}>
                        <Text style={{color: colors.mainColor}}>
                            {props.team.durationDays}
                        </Text>
                        <Text>
                            Duration
                        </Text>
                    </View>
                </View>
                <View style={{flex: 0.4, flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                        type='material-community'
                        name='flag-outline'
                        size={60}
                        />
                    <View style={{flex: 1, flexDirection: 'column', marginLeft: 5}}>
                        <Text style={{color: colors.mainColor}}>
                            {props.team.endDate}
                        </Text>
                        <Text>
                            End date
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default TeamScreenIcons;
