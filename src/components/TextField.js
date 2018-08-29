import React from 'react';
import {TextInput, View, StyleSheet, Button} from "react-native";


const textField = (props) => {

        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    placeholder='an awesome place'
                    value={props.placeName}
                    onChangeText={props.changeName}
                />

                <Button
                    onPress={props.placeSubmit}
                    style={styles.placeButton}
                    title="Add"/>

            </View>

        );

};


const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    }

});


export default textField;