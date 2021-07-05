import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useThemedValues } from '../Theming';
import getStyles from "./Styles/CharacterDetailScreenStyles";
import Axios from '../../API/AxiosConfig'
import { texts, useLocalization } from "../Localization";


const CharacterDetailScreen = (props) => {

    const { styles, colors } = useThemedValues(getStyles);
    const loc = useLocalization();

    const [character, setCharacter] = useState({
        "created": "", 
        "episode": [], 
        "gender": "", 
        "id": 0, 
        "image": " ", // fix "source.uri should not be an empty screen" warning -> " ", undefined, "x", default image url
        "location": {"name": "", "url": ""}, 
        "name": "", 
        "origin": {"name": "", "url": ""}, 
        "species": "", 
        "status": "", 
        "type": "", 
        "url": ""
    })

    const { characterId } = props.route.params

    useEffect(()=>{
        Axios.get('character/'+characterId)
            .then(response =>{
                characterDetail = response.data
                setCharacter(characterDetail)
            })
            .catch(error => {
                console.log(error)
            })
    },[])
 
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