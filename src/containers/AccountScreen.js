import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import colors from '../styles/colors.json';
import consumer from '../assets/consumer.json';
import AccountHeader from '../components/molecules/AccountHeader';
import AccountDropDown from '../components/molecules/AccountDropDown';

class AccountScreen extends React.Component {

    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
            title: 'Account',
            headerStyle: {
                backgroundColor: colors.mainBgColor,
                borderBottomColor: colors.mainColor,
                borderBottomWidth: 5,
                elevation: 0,
            },
            headerTintColor: colors.textColor,
            headerTitleStyle: {
                flex: 1,
                marginRight: '20%',
                textAlign: 'center'
            },
        });

        this.state = {
            firstName: consumer.firstName,
            lastName: consumer.lastName,
            sex: consumer.sex,
            email: consumer.email,
            description: consumer.description,
        };

        this.saveEmail = this.saveEmail.bind(this);
        this.saveFirstName = this.saveFirstName.bind(this);
        this.saveLastName = this.saveLastName.bind(this);
        this.saveSex = this.saveSex.bind(this);
    }

    saveEmail(email) {
        this.setState({ email: email });
    }

    saveFirstName(firstName) {
        this.setState({ firstName: firstName });
    }

    saveLastName(lastName) {
        this.setState({ lastName: lastName });
    }

    saveSex(sex) {
        this.setState({ sex: sex });
    }

    render() {

        let key = 0;

        return (
            <ScrollView style={{flex: 1, backgroundColor: colors.mainBgColor}} contentContainerStyle={{justifyContent: 'flex-start'}}>
                <AccountHeader/>
                <AccountDropDown
                    lines={[
                        { key: (++key).toString(), type: 'description', description: this.state.description },
                        { key: (++key).toString(), type: 'input', title: 'Email', saveValue: this.saveEmail, value: this.state.email },
                        { key: (++key).toString(), type: 'dropdown', title: 'Sex', saveValue: this.saveSex, value: this.state.sex, items: [{label: 'Man', value: 'man'}, {label: 'Woman', value: 'woman'}] },
                        { key: (++key).toString(), type: 'input', title: 'First name', saveValue: this.saveFirstName, value: this.state.firstName },
                        { key: (++key).toString(), type: 'input', title: 'Last name', saveValue: this.saveLastName, value: this.state.lastName },
                    ]}
                    />
                <AccountDropDown
                    lines={[
                        { key: (++key).toString(), type: 'description', description: this.state.description },
                        { key: (++key).toString(), type: 'input', title: 'Email', saveValue: this.saveEmail, value: this.state.email },
                        { key: (++key).toString(), type: 'dropdown', title: 'Sex', saveValue: this.saveSex, value: this.state.sex, items: [{label: 'Man', value: 'man'}, {label: 'Woman', value: 'woman'}] },
                        { key: (++key).toString(), type: 'input', title: 'First name', saveValue: this.saveFirstName, value: this.state.firstName },
                        { key: (++key).toString(), type: 'input', title: 'Last name', saveValue: this.saveLastName, value: this.state.lastName },
                    ]}
                    />
            </ScrollView>
        );
    }
}

export default AccountScreen;
