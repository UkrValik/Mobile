import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../styles/colors.json';

const TeamListItem = (props) => {
    return (
        <View style={styles.container}>
            <Icon
                containerStyle={styles.iconContainer}
                type='material-community'
                name='food-apple-outline'
                size={30}
                color={colors.yellowgreen}
                />
            <View style={styles.textGroup1}>
                <Text style={styles.smallText}>
                    {props.team.challengeName}
                </Text>
                <Text style={styles.bigText}>
                    {props.team.teamName}
                </Text>
            </View>
            <View style={styles.textGroup2}>
                <Text style={styles.smallText}>
                    How long
                </Text>
                <Text style={styles.bigText}>
                    {props.team.activityDays}
                </Text>
            </View>
            <Icon
                containerStyle={styles.iconContainer}
                type='material-community'
                name='chevron-right'
                size={30}
                color={colors.yellowgreen}
                onPress={() => props.navigate('Team', { team: props.team })}
                />
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row', 
        // marginHorizontal: '3%',
        marginVertical: '1%', 
        backgroundColor: colors.lightgray, 
        padding: '1%', 
        borderTopColor: colors.yellowgreen, 
        borderTopWidth: 5,
    },
    iconContainer: {
        justifyContent: 'center', 
        flex: 1,
    },
    textGroup1: {
        flex: 5, 
        flexDirection: 'column', 
        justifyContent: 'center'
    },
    textGroup2: {
        flex: 2, 
        flexDirection: 'column', 
        justifyContent: 'center',
    },
    smallText: {
        fontSize: 12,
        color: colors.textColor,
    },
    bigText: {
        fontSize: 16,
        color: colors.textColor,
    }
});

export default TeamListItem;
