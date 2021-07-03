import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useThemedValues } from '../Theming';
import getStyles from "./Styles/CharacterDetailScreenStyles";
import Axios from '../../API/AxiosConfig'
import { texts, useLocalization } from "../Localization";

const character = {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
}

const CharacterDetailScreen = () => {

    const { styles, colors } = useThemedValues(getStyles);
    const loc = useLocalization();

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: character.image }}
                    style={styles.image}
                />
            </View>
            <View style={styles.characterNameContainer}>
                <Text style={styles.characterName}>{character.name}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.detailText} >{loc.t(texts.status)}{character.status}</Text>
                <Text style={styles.detailText} >{loc.t(texts.species)}{character.species}</Text>
                <Text style={styles.detailText} >{loc.t(texts.gender)}{character.gender}</Text>
                <Text style={styles.detailText} >{loc.t(texts.type)}{character.type}</Text>
                <Text style={styles.detailText} >{loc.t(texts.origin)}{character.origin.name}</Text>
                <Text style={styles.detailText} >{loc.t(texts.location)}{character.location.name}</Text>
            </View>
        </View>
    );
};

export default CharacterDetailScreen;