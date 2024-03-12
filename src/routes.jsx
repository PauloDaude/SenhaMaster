import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/Home';
import Passwords from './pages/Passwords';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#392de9',
        tabBarLabelStyle: { paddingBottom: 4 },
        headerShown: false
      }}
    >
      <Tab.Screen
        name={'Início'}
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Ionicons
                size={size}
                color={color}
                name={focused ? 'home' : 'home-outline'}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name={'Senhas'}
        component={Passwords}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Ionicons
                size={size}
                color={color}
                name={focused ? 'lock-closed' : 'lock-closed-outline'}
              />
            );
          }
        }}
      />
    </Tab.Navigator>
  );
};
