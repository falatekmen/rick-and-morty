import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useThemedValues } from '../Theming';
import getStyles from "./Styles/HomeScreenStyles";
import Axios from '../../API/AxiosConfig'
import { FlatList } from 'react-native-gesture-handler';
import { texts, useLocalization } from "../Localization";

const HomeScreen = (props) => {

    const { styles, colors } = useThemedValues(getStyles);
    const loc = useLocalization();

    const [episodeList, setEpisodeList] = useState([])

    useEffect(() => {
        Axios.get('episode')
            .then(response => {
                let episodes = response.data.results
                setEpisodeList(episodes)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const _renderEpisodesItem = ({ item }) => {

        return (
            <View style={styles.episodeButton}>
                <Text style={styles.episodeText}>
                    {loc.t(texts.season)}{item.episode.slice(1, 3)} - {loc.t(texts.episode)}{item.episode.slice(4, 6)}
                </Text>
                <Text style={styles.episodeNameText} numberOfLines={1}>{item.name}</Text>
            </View>
        )
    }

    //başka bir ekrana navigate ederken bu şekilde navigasyon parametreleri gönderebiliyoruz
    const _onPress_Episode = () => {
        props.navigation.navigate("episode-detail-screen", {
            dummy1: 'dummy1',
            dummy2: 'dummy2'
        });
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={_onPress_Episode}>
                <Text style={{color:'white'}}>Go to Episode Screen</Text>
            </TouchableOpacity>
            <FlatList
                data={episodeList}
                renderItem={_renderEpisodesItem}
                keyExtractor={item => item.id}
                style={styles.flatListContainer}
            />
        </View>
    );
};

export default HomeScreen;