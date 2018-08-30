import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';


const listItem = props => {

    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listContainer}>
                <Text style={styles.listItems}>{props.placeName} </Text>
                <Image
                    style={styles.placeImage}
                    source={props.placeImg}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    listItems: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eeee',
        flexDirection: 'row',
        alignItems: 'center'
    },

    listContainer: {
        width: '100%',
        margin: 5
    },
    placeImage: {
        margin: 8,
        height: 30,
        width: 30
    }
});


export default listItem;