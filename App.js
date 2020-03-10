import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './components/tabbars/Home.js';
import Me from './components/tabbars/Me.js';
import Search from './components/tabbars/Search.js';
import Shop from './components/tabbars/Shop';
import Icon from 'react-native-vector-icons/FontAwesome';
const App = () =>  {
  const [selectedTab, setSelectedTab] = useState('Home');
  return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={selectedTab === 'Home'}
            title="Home"
            renderIcon={() => <Icon name="home" size={25} color="gray" />}
            renderSelectedIcon={() => <Icon name="home" size={25} color="blue" />}
            onPress={() => setSelectedTab('Home')}
            >
            <Home></Home>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'Search'}
            title="搜索"
            renderIcon={() => <Icon name="search" size={25} color="gray" />}
            renderSelectedIcon={() => <Icon name="search" size={25} color="blue" />}
            onPress={() => setSelectedTab('Search')}
            >
            <Search></Search>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'Shop'}
            title="购物车"
            renderIcon={() => <Icon name="shopping-cart" size={25} color="gray" />}
            renderSelectedIcon={() => <Icon name="shopping-cart" size={25} color="blue" />}
            badgeText="0"
            onPress={() => setSelectedTab('Shop')}
            >
            <Shop></Shop>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'Me'}
            title="Me"
            renderIcon={() => <Icon name="user-o" size={25} color="gray" />}
            renderSelectedIcon={() => <Icon name="user" size={25} color="blue" />}
            onPress={() => setSelectedTab('Me')}
            >
            <Me></Me>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
