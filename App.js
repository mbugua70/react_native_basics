
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';


import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
     <NavigationContainer>
        <Drawer.Navigator screenOptions={{
          drawerActiveBackgroundColor: "#f0e1ff",
          drawerActiveTintColor: "#3c0a6b",
          drawerStyle: {
            backgroundColor: "#ccc"
          }
        }}>
           <Drawer.Screen  name="Welcome" component={WelcomeScreen} options={{
             headerStyle: {backgroundColor: "#3c0a6b"},
             headerTintColor: "#fff",
             drawerLabel: "Home",
             drawerIcon: (({color, size}) => {
               return (
                <Ionicons name="home" size={size} color={color} />
               )
             })
           }}


           />
           <Drawer.Screen  name="User Account" component={UserScreen}
            options={{
              drawerIcon: (({color, size}) => {
                return (
                 <Ionicons name="person" size={size} color={color} />
                )
              })
            }}
           />
        </Drawer.Navigator>
     </NavigationContainer>
    </>
  );
}
