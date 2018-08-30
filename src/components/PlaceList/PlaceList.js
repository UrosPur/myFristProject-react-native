import React from 'react';
import {FlatList, StyleSheet} from "react-native";
import ListItem from "../ListItem/ListItem";

const placeList = props => {

    return (

        <FlatList
            style={styles.listStyle}
            data={props.places}
            renderItem={(info) => (
                <ListItem
                    placeName={info.item.name}
                    placeImg={info.item.image}
                    onItemPressed={() => props.onItemdeleted(info.item.key)}
                />
            )}
        >
        </FlatList>

    );


};

const styles = StyleSheet.create({
    listStyle: {
        width: '100%',
    }

});


export default placeList;