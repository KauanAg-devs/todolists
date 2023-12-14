import {NavigationContainer} from '@react-navigation/native'
import {Header, createStackNavigator} from '@react-navigation/stack'
import { StyleSheet } from 'react-native';
import { Home } from './routes/home';
import { Login } from './routes/login';
import { Signin } from './routes/signin';

const stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
     <stack.Navigator>
      <stack.Screen name='login'  options={{headerShown: false}} component={Login}/>
      <stack.Screen name='signin' options={{headerShown: false}} component={Signin}/>
      <stack.Screen name='home'   options={{headerShown: false}} component={Home}/>
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
