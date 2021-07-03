import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useThemedValues } from '../Theming';
import getStyles from "./Styles/EpisodeDetailScreenStyles";
import Axios from '../../API/AxiosConfig'
import { FlatList } from 'react-native-gesture-handler';
import { texts, useLocalization } from "../Localization";

const dummyEpisode = {
    "id": 1,
    "name": "Pilot",
    "air_date": "December 2, 2013",
    "episode": "S01E01",
    "characters": [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/35",
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/62",
        "https://rickandmortyapi.com/api/character/92",
        "https://rickandmortyapi.com/api/character/127",
        "https://rickandmortyapi.com/api/character/144",
        "https://rickandmortyapi.com/api/character/158",
        "https://rickandmortyapi.com/api/character/175",
        "https://rickandmortyapi.com/api/character/179",
        "https://rickandmortyapi.com/api/character/181",
        "https://rickandmortyapi.com/api/character/239",
        "https://rickandmortyapi.com/api/character/249",
        "https://rickandmortyapi.com/api/character/271",
        "https://rickandmortyapi.com/api/character/338",
        "https://rickandmortyapi.com/api/character/394",
        "https://rickandmortyapi.com/api/character/395",
        "https://rickandmortyapi.com/api/character/435"
    ],
    "url": "https://rickandmortyapi.com/api/episode/1",
    "created": "2017-11-10T12:56:33.798Z"
}

const EpisodeDetailScreen = (props) => {

    const { styles, colors } = useThemedValues(getStyles);
    const loc = useLocalization();

    const [characterList, setCharacterList] = useState([])

    // test api for characters in episode
    useEffect(() => {
        Axios.get('character')
            .then(response => {
                let characters = response.data.results
                setCharacterList(characters)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const _renderCharactersItem = ({ item }) => {

        return (
            <View style={styles.characterButton}>
                <Text style={styles.characterNameText} numberOfLines={1}>{item.name}</Text>
            </View>
        )
    }

    const _onPress_Episode = () => {
        props.navigation.navigate("character-detail-screen");
    }

    //homescreende bu ekrana navigate ederken gelen parametreleri bu şekilde alıyoruz
    const { dummy1, dummy2 } = props.route.params

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={_onPress_Episode}>
                <Text style={{ color: 'white' }}>{dummy1 + " " + dummy2}</Text>
            </TouchableOpacity>
            <View style={styles.episodeNameContainer}>
                <Text style={styles.episodeNameText}>{dummyEpisode.name}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}>{loc.t(texts.season)}{dummyEpisode.episode.slice(1, 3)}</Text>
                <Text style={styles.detailsText}>{loc.t(texts.episode)}{dummyEpisode.episode.slice(4, 6)}</Text>
                <Text style={styles.detailsText}>{loc.t(texts.airDate)} {dummyEpisode.air_date}</Text>
            </View>
            <View style={styles.characterTitleContainer}>
                <Text style={styles.characterTitleText}>{loc.t(texts.characters)}</Text>
            </View>
            <FlatList
                data={characterList}
                renderItem={_renderCharactersItem}
                keyExtractor={item => item.id}
                style={styles.flatListContainer}
            />
        </View>
    );
};

export default EpisodeDetailScreen;