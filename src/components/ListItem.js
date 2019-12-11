import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }
    
    render() {
        const { name, shift } = this.props.employee;


        return (
            <TouchableWithoutFeedback onPress = {this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <View style = {styles.containerStyle}>
                            <Text style = { styles.titleStyle}>
                                {name} 
                            </Text>
                        </View>
                        
                </CardSection>
                </View>
            </TouchableWithoutFeedback>
            
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        
    },
    containerStyle: {
        alignItems: 'center'
    }
}

export default ListItem;