import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text } from 'react-native';

import { employeesFetch } from '../actions';
//import { Spinner } from '../components/common';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentDidMount() {
        this.props.employeesFetch();
        
    }

    keyExtractor = (item) => item.uid;

    renderRow({ item }) {
        return (
            <ListItem employee={item} {...this.props}/>
        );
    }

    
    render() {
        //if (!this.props.employees.length) return <Text>New? Click Add</Text>;
        return (
            <FlatList
                data = {this.props.employees}
                keyExtractor = {this.keyExtractor}
                renderItem={this.renderRow.bind(this)}
            
            />

            
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) =>{
        return {...val, uid }; // puts objs in array
    });

    return { employees };
   
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);