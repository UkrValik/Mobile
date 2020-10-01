import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import colors from '../../styles/colors.json';

const RatingButton = (props) => {
    return (
        <View style={{marginTop: 20}}>
            <Button
                icon={{
                    name: 'chevron-right',
                    size: 15,
                    color: 'white'
                }}
                iconRight
                buttonStyle={{backgroundColor: colors.mainColor}}
                title='To rating'
                />
        </View>
    );
}

export default RatingButton;
