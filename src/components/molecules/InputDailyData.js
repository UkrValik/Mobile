import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../../styles/colors.json';

const InputDailyData = (props) => {
    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Text style={{color: colors.textColor}}>
                    Choose date
                </Text>
                <DropDownPicker 
                    containerStyle={{width: Dimensions.get('screen').width / 24 * 7}}
                    labelStyle={{color: colors.textColor}}
                    arrowColor={colors.textColor}
                    defaultValue='18.09.2020'
                    items={[
                        {label: '18.09.2020', value: '18.09.2020'},
                        {label: '19.09.2020', value: '19.09.2020'},
                        {label: '20.09.2020', value: '20.09.2020'}
                ]}/>
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={{color: colors.textColor}}>
                    Input data
                </Text>
                {props.manualDataInput && (
                    <View style={{flexDirection: 'row', }}>
                        <Input
                            containerStyle={{width: Dimensions.get('screen').width / 24 * 7}}
                            onChangeText={() => {}}
                            />
                        <Icon
                            type='material-community'
                            name='chevron-right'
                            color={colors.textColor}
                            onPress={props.toggleDataInput}
                            />
                    </View>
                )}
                {!props.manualDataInput && (
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon
                            type='material-community'
                            name='chevron-left'
                            color={colors.textColor}
                            onPress={props.toggleDataInput}
                            />
                        <Button
                            style={{width: Dimensions.get('screen').width / 24 * 7, paddingVertical: 5}}
                            buttonStyle={{backgroundColor: colors.mainBgColor}}
                            titleStyle={{fontSize: 14, color: colors.textColor}}
                            title='Get data from tracker'
                            />
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2, 
        borderColor: colors.altColor, 
        backgroundColor: colors.midgray,
        flexDirection: 'row', 
        width: '90%',
        // height: Dimensions.get('screen').height / 7,
        paddingVertical: Dimensions.get('screen').height / 28,
        alignItems: 'center', 
        justifyContent: 'space-around', 
        alignSelf: 'center',
        marginTop: 20,
    }
});

export default InputDailyData;
