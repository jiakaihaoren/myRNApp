import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

const Home = () => {
    const [swiperData, setSwiperData] = useState([]);
    useEffect(()=>{
        fetch("https://jiakaihaoren.github.io/mySources/myRNApp/jsons/swiper.json")
        .then(data=>data.json())
        .then(data=>{
            setSwiperData(data.subject);           
        })
    },[])
    const goMoveList = () => {
        Actions.movelist();
    }
    return(
        <View>
            <View style={{height:200}}> 
                {swiperData.length === 0 ? <ActivityIndicator size="large" style={{flex:1}}></ActivityIndicator>:           
                <Swiper showsButtons={true} autoplay={true} loop={true}>
                    {swiperData.map((value,index)=> (
                        <View style={styles.slide} key={index}>
                            <Image source={{uri:value.url}} style={{width:'100%',height:'100%'}}></Image>
                        </View>
                    ))}
                </Swiper>}
            </View>
            <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                <View style={styles.imageWrapper}> 
                    <Image source={require('../../images/nav1.png')} style={{width:60, height:60}}></Image>
                    <Text>新闻资讯</Text>
                </View>
                <View style={styles.imageWrapper}> 
                    <Image source={require('../../images/nav2.png')} style={{width:60, height:60}}></Image>
                    <Text>图片分享</Text>
                </View>
                <View style={styles.imageWrapper}> 
                    <Image source={require('../../images/nav3.png')} style={{width:60, height:60}}></Image>
                    <Text>商品购买</Text>
                </View>
                <View style={styles.imageWrapper}> 
                    <Image source={require('../../images/nav4.png')} style={{width:60, height:60}}></Image>
                    <Text>留言反馈</Text>
                </View>
                <TouchableHighlight style={styles.imageWrapper} onPress={()=>{goMoveList()}} underlayColor='white'>
                    <View> 
                        <Image source={require('../../images/nav5.png')} style={{width:60, height:60}}></Image>
                        <Text>稻城之行</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.imageWrapper}> 
                    <Image source={require('../../images/nav6.png')} style={{width:60, height:60}}></Image>
                    <Text>联系我们</Text>
                </View>                    
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    imageWrapper:{
        width:'33%',
        height:100,
        alignItems:'center',
        justifyContent:'center'
    }
  })

export default Home;