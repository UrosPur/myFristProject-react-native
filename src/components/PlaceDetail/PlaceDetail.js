import React from 'react';
import {Modal, View, Text, Image, Button, StyleSheet} from 'react-native';


const placeDetail = props => {

    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image
                    source={props.selectedPlace.image}
                    style={styles.imageStyle}
                >
                </Image>
                <Text style={styles.textStyle}>
                    {props.selectedPlace.name}
                </Text>
                <View>
                    <Button title='delete' color='red' onPress={props.onItemDeleted}/>
                    <Button title='close' color='green' onPress={props.onModalClosed}/>
                </View>
            </View>
        )
    }
    ;


    return (
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null}>
            <View style={styles.modalContainer}>
                {modalContent}

            </View>
        </Modal>
    );

};


const styles = StyleSheet.create({
    modalContainer: {
        margin: 22,
    },
    imageStyle: {
        height: 200,
        width: '100%'
    },
    textStyle: {
        textAlign: 'center',
    },

});

export default placeDetail;