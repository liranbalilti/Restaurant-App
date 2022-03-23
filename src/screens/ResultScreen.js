import React,{useState,useEffect} from 'react';
import {View,Image, Text, StyleSheet, FlatList } from 'react-native';

import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {

    const [result,setResult] = useState(null);
    const id = navigation.getParam('id');
    
    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`); 
        setResult(response.data);

    }

    useEffect(() => {
        getResult(id);
    },[]);

    if(!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.textStyle}>Results Show</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18
    },
    image: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;