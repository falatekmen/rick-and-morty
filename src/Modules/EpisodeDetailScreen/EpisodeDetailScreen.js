import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useThemedValues } from '../Theming';
import getStyles from "./Styles/EpisodeDetailScreenStyles";
import Axios from '../../API/AxiosConfig'
import { FlatList } from 'react-native-gesture-handler';
import { texts, useLocalization } from "../Localization";

const dummyCharacter = [{
    "created": "2017-12-31T20:39:35.047Z",
    "episode": ["https://rickandmortyapi.com/api/episode/3"],
    "gender": "Male",
    "id": 300,
    "image": "https://rickandmortyapi.com/api/character/avatar/300.jpeg",
    "location": { "name": "Anatomy Park", "url": "https://rickandmortyapi.com/api/location/5" },
    "name": "Roger",
    "origin": { "name": "Earth (C-137)", "url": "https://rickandmortyapi.com/api/location/1" },
    "species": "Human",
    "status": "Dead",
    "type": "",
    "url": "https://rickandmortyapi.com/api/character/300"
}]

const EpisodeDetailScreen = (props) => {

    const { styles, colors } = useThemedValues(getStyles);
    const loc = useLocalization();

    //render edilecek karakterlerin listesi- flatlist
    const [characterList, setCharacterList] = useState([
    ])

    //bölüm detayları
    const [episodeDetail, setEpisodeDetail] = useState([])

    // homescreende bu ekrana navigate ederken gelen parametrelerin alınması
    const { episodeId } = props.route.params

    // homescreende seçilen bölümün detayları
    useEffect(() => {
        Axios.get('episode/' + episodeId)
            .then(response => {
                let episodeDetail = response.data
                setEpisodeDetail(episodeDetail)

                //bölümde bulunan karakterlerin id'lerini, gelen datadadaki url'lerin son kısmından alma
                for (var i = 0; i < episodeDetail.characters.length; i++) {
                    var charactersUrlInEpisode = episodeDetail.characters[i]
                    var charactersIdInUrl = charactersUrlInEpisode.slice(42, charactersUrlInEpisode.length)

                    // karakter id'leri ile API den karakter detaylarının çekilip state'e atılması
                    takeCharacters(charactersIdInUrl)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    // verilen id'ye göre karakter detaylarını api'den çekilmesi
    const takeCharacters = (id) => {
        Axios.get('character/' + id)
            .then(response => {
                let characterDetail = response.data
                setCharacterList(characterDetail)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const _renderCharactersItem = ({ item }) => {
        console.log('flatlist')
        return (
            <TouchableOpacity onPress={() => {
                props.navigation.navigate("character-detail-screen", {
                    characterId: item.id
                });
            }}>
                <View style={styles.characterButton}>
                    <Text style={styles.characterNameText} numberOfLines={1}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.episodeNameContainer}>
                <Text style={styles.episodeNameText}>{episodeDetail.name}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}>{loc.t(texts.episode)}{episodeDetail.episode}</Text>
                <Text style={styles.detailsText}>{loc.t(texts.airDate)} {episodeDetail.air_date}</Text>
            </View>
            <View style={styles.characterTitleContainer}>
                <Text style={styles.characterTitleText}>{loc.t(texts.characters)}</Text>
            </View>
            <FlatList
                data={dummyCharacter} // !!!
                renderItem={_renderCharactersItem}
                keyExtractor={item => item.id}
                style={styles.flatListContainer}
            />
        </View>
    );
};

export default EpisodeDetailScreen;