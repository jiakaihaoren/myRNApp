import React, {useState, useEffect} from 'react';
import { Text, View, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const MoveList = () => {
    const [movelistData,setMovelistData] = useState([]);
    useEffect(()=>{
        fetchMovelistData();
    },[]);

    const fetchMovelistData = () => {
        fetch(`https://jiakaihaoren.github.io/mySources/myRNApp/jsons/movielist.json`)
        .then(data=>data.json())
        .then(data=>{
            if (data && data.total > 0) {
                setMovelistData(data.subject)
            }
        }).catch((err)=>{
            console.warn(err);
        })
    };

    const renderMovelistData = () => 
    (<ScrollView>
        {movelistData.map((data,index)=>
            <View key={index} style={styles.movelistDataWrapper}>
                <Image source={{uri:data.url}} style={{height:300, width:'100%'}}></Image>
                <View style={styles.movelistDataText}>
                    <Text>{data.title}</Text>
                </View>
                
            </View>
        )}
    </ScrollView>);

    return(
        <View style={{width:'100%',height:'100%'}}>
            {movelistData.length === 0 ? 
                <ActivityIndicator size="large" style={{flex:1}}></ActivityIndicator>:renderMovelistData()}            
        </View>
    )
}

const styles = StyleSheet.create({
    movelistDataWrapper:{
      alignItems:"center"
    },
    movelistDataText:{
        margin: 10,
    }
});

export default MoveList;