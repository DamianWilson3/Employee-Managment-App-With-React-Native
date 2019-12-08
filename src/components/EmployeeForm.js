import React, { Component } from 'react';
import { View, Text, Picker} from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';



class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        label= 'Name'
                        placeholder= 'Mavis'
                        value = {this.props.name}
                        onChangeText = {value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label = 'Phone'
                        placeholder= 'XXX-XXX-XXXX' 
                        value = {this.props.phone}
                        onChangeText = {value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection style = {{ flexDirection: 'column', height: 100}}>
                    <Text style = {styles.pickerTextStyle}>Select Shift:</Text>
                    <Picker
                        selectedValue = {this.props.shift}
                        onValueChange= {value => this.props.employeeUpdate({ prop: 'shift', value })}
                        style = {styles.pickerStyle}
                    >
                        <Picker.Item label='Monday' value='Monday' />
                        <Picker.Item label='Tuesday' value='Tuesday' />
                        <Picker.Item label='Wednesday' value='Wednesday' />
                        <Picker.Item label='Thursday' value='Thursday' />
                        <Picker.Item label='Friday' value='Friday' />
                        <Picker.Item label='Saturday' value='Saturday' />
                        <Picker.Item label='Sunday' value='Sunday' />
                    </Picker>
                </CardSection>

            </View>
        );
    }
}

const styles = {
    pickerTextStyle : {
        fontSize: 15,
        paddingLeft: 20,
        paddingTop: 5
    },

    pickerStyle : {
        flex: 1, 
        paddingTop: 5, 
        marginLeft: 40, 
        
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return {name, phone, shift };
}

export default connect(mapStateToProps, {employeeUpdate} )(EmployeeForm);