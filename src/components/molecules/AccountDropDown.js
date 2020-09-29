import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../styles/colors.json';
import AccountDataLine from '../atoms/AccountDataLine';

class AccountDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconRotated: false,
        };
    }

    toggleExpanded() {
        this.setState({ iconRotated: !this.state.iconRotated });
    }

    render() {
        return (
            <View>
                <View style={{flexDirection: 'row', marginLeft: '5%'}}>
                    <Icon
                        type='material-community'
                        name='chevron-down'
                        containerStyle={{margin: 3, borderRadius: 0, backgroundColor: colors.mainColor}}
                        color={colors.mainBgColor}
                        iconStyle={{transform: [{rotate: (this.state.iconRotated ? 180 : 0) + 'deg'}]}}
                        onPress={() => this.toggleExpanded()}
                        />
                    <Text style={{textAlignVertical: 'center', color: colors.mainColor}}>
                        Main personal data
                    </Text>
                </View>
                <View style={{display: this.state.iconRotated ? 'flex' : 'none'}}>
                    {this.props.lines.map(line => (<AccountDataLine {...line} />))}
                </View>
            </View>
        );
    }
}

export default AccountDropDown;
