import React from 'react';
import { View, Text, StyleSheet, ColorPropType } from 'react-native';
import { Input } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../../styles/colors.json';

const AccountDataLine = (props) => {
    if (props.type === 'input') {
        return (
            <View style={{marginLeft: '5%'}}>
                <Text style={{marginLeft: 3, color: colors.textColor, marginBottom: 3}}>
                    {props.title}
                </Text>
                <Input
                    value={props.value}
                    placeholder={props.title}
                    onChangeText={(text) => props.saveValue(text)}
                    inputContainerStyle={{borderWidth: 1, borderColor: colors.borderColor, paddingBottom: 0, marginBottom: -15}}
                    containerStyle={{paddingLeft: 3, paddingRight: '5%'}}
                    style={{color: colors.textColor, marginLeft: '3%'}}
                    />
            </View>
        );
    } else if (props.type === 'dropdown') {
        return (
            <View style={{marginLeft: '5%', marginBottom: '3%'}}>
                <Text style={{marginLeft: 3, color: colors.textColor}}>
                    {props.title}
                </Text>
                <DropDownPicker
                    items={[
                        {label: 'Man', value: 'man'},
                        {label: 'Woman', value: 'woman'}
                    ]}
                    defaultValue={props.value}
                    onChangeItem={item => props.saveValue(item.value)}
                    containerStyle={{height: 40, marginLeft: 0, marginRight: '5%'}}
                    style={{backgroundColor: colors.mainBgColor, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderColor: colors.borderColor}}
                    itemStyle={{justifyContent: 'flex-start'}}
                    dropDownStyle={{backgroundColor: colors.mainBgColor, borderBottomRightRadius: 0, borderBottomLeftRadius: 0}}
                    />
            </View>
        );
    } else if (props.type === 'description') {
        return (
            <View style={{marginLeft: '5%'}}>
                <Text style={{color: colors.textColor, marginLeft: 3, marginBottom: '2%'}}>
                    {props.description}
                </Text>
            </View>
        );
    }
}

export default AccountDataLine;
