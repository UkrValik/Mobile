import React from 'react';
import { View, StyleSheet } from 'react-native';

const VerticalStatusBar = (props) => {
    return (
        <View style={{
            height: props.percent.toString() + '%', 
            backgroundColor: props.color,
            width: (100 / props.days - 2).toString() + '%',
            marginHorizontal: 1,
            }}>
        </View>
    );
}

export default VerticalStatusBar;
