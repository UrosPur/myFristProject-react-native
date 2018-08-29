import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const listItem = props => {


    return (
        <View style={styles.listContainer} >
            <Text style={styles.listItems}>
                {props.placeName}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({

    listItems: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eeee'

    },

    listContainer:{
        width: '100%',
        margin: 5
    }




});


export default listItem;