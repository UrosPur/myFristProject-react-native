import React from 'react';
import {StyleSheet, View} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/image.jpeg'

export default class App extends React.Component {

    state = {
        places: []
    }

    placeAddedHandeler = (placeName) => {


        this.setState(prevState => {

            return {
                places: prevState.places.concat({
                    key: Math.random(),
                    name: placeName,
                    image: placeImage
                    // image: {
                    //     uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxQrHNAHw9K1Dz_hQV-lBym4Ij59VRGllHagRxTzWmhjt7dLZ'
                    // }
                }),

            }
        });


    };


    placeDeletedHandeler = key => {

        this.setState(prevState => {
            return {
                places: prevState.places.filter(place => {
                    return place.key !== key;

                })

            };

        });
    }


    render() {

        return (
            <View style={styles.container}>

                <PlaceInput
                    onPlaceAdded={this.placeAddedHandeler}
                />
                <PlaceList
                    places={this.state.places}
                    onItemdeleted={this.placeDeletedHandeler}
                />


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

});
