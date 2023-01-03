import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatsScreens from "../screens/ChatsScreen";
import NotImplementedScreen from "../screens/NotImplementedScreen";
import {Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return(
    <Tab.Navigator initialRouteName="Chats" 
      screenOptions={{
        tabBarStyle: { backgroundColor: 'whitesmoke'},
        headerStyle: { backgroundColor: 'whitesmoke'},
        tabBarActiveTintColor: '#CB3636',
        tabBarInactiveTintColor: '#2d2d2d'
      }}
      
    >
      <Tab.Screen name="Status" component={NotImplementedScreen} options={{ 
          tabBarIcon: ({color, size}) => (
          <MaterialIcons name="update" size={size} color={color} />
        ) 
        }} 
      />
      <Tab.Screen name="Calls" component={NotImplementedScreen} options={{ 
          tabBarIcon: ({color, size}) => (
          <Ionicons name="call-outline" size={size} color={color} />
        ) 
        }}  
      />
      <Tab.Screen name="Camera" component={NotImplementedScreen}  options={{ 
          tabBarIcon: ({color, size}) => (
          <Ionicons name="camera-outline" size={size} color={color} />
        ) 
        }} 
      />
      <Tab.Screen
            name="Chats" 
            component={ChatsScreens}  
            options={{ 
              tabBarIcon: ({color, size}) => (
                <Ionicons name="ios-chatbubbles-outline" size={size} color={color} />
                ),
              headerRight: () => (
                <Entypo name="new-message" size={18} color={'#CB3636'} style={{marginRight: 10}} />
              ),
            }} 
         />
      <Tab.Screen name="Settings" component={NotImplementedScreen} options={{ 
          tabBarIcon: ({color, size}) => (
          <Ionicons name="settings-outline" size={size} color={color} />
        ) 
        }}  
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator;