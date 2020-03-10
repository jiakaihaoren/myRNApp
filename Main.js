import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import { Router, Stack, Scene} from 'react-native-router-flux';
import App from './App';
import MoveList from './components/move/MoveList';
import SplashScreen from 'react-native-splash-screen'
const Main = () => {
    useEffect(()=>{
        setTimeout(()=>{SplashScreen.hide()}, 2000)
    },[])
    return(            
        <Router sceneStyle={{backgroundColor:'white'}}>
            <Stack key="root">
                <Scene key="app" component={App} title="" hideNavBar={true}/>
                <Scene key="movelist" component={MoveList} title="稻城之行图片" />
            </Stack>
        </Router>   
      
    )
}

export default Main;