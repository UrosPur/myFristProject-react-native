import React from 'react';
import {StyleSheet, Text, Button, TextInput, View} from 'react-native';
import ListItem from './src/components/ListItem';
import TextField from './src/components/TextField';

export default class App extends React.Component {

    state = {

        placeName: '',
        places: []

    }

    placeNameChangeHandler = val => {

        this.setState({
            placeName: val
        });

    };

    placeSubmitHandler = () => {

        if (this.state.placeName.trim() === "") {
            return;
        }

        this.setState(prevState => {

            return {
                places: prevState.places.concat(prevState.placeName)

            }

        });

    }


    render() {

        const placesOutput = this.state.places.map((place, i) => (

            <ListItem
                key={i}
                placeName={place}

            />


        ));

        return (
            <View style={styles.container}>

                    <TextField

                        placeName={this.state.placeName}
                        changeName={this.placeNameChangeHandler}
                        placeSubmit={this.placeSubmitHandler}

                    />


                <View>
                    {placesOutput}
                </View>
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
