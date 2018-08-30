import React from 'react';
import {StyleSheet, View} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/image.jpeg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'

export default class App extends React.Component {

    state = {
        places: [],
        selectedPlace: null
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


    placeSelectedHandeler = key => {

        this.setState(prevState => {
            return {
                selectedPlace: prevState.places.find(place => {
                    return place.key === key;

                })
            }


        });
    }

    placeDeletedHandeler = () => {
        this.setState(prevState => {

            return {
                places: prevState.places.filter(place => {
                    return place.key !== prevState.selectedPlace.key;

                }),

                selectedPlace: null

            };

        })


    }

    modalClosedHandeler = () => {

        this.setState({

            selectedPlace: null
        })

    }


    render() {

        return (
            <View style={styles.container}>

                <PlaceDetail
                    selectedPlace={this.state.selectedPlace}
                    onItemDeleted={this.placeDeletedHandeler}
                    onModalClosed={this.modalClosedHandeler}
                />
                <PlaceInput onPlaceAdded={this.placeAddedHandeler}/>
                <PlaceList
                    places={this.state.places}
                    onItemSelected={this.placeSelectedHandeler}
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
