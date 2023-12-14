import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet } from 'react-native';
import { Home } from './routes/home';
import { Login } from './routes/login';
import { Signin } from './routes/signin';

const stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
     <stack.Navigator>
      <stack.Screen name='signin' component={Signin}/>
      <stack.Screen name='login' component={Login}/>
      <stack.Screen name='home' component={Home}/>
     </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
