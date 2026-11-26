import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Login } from '../screens/Login'
import Welcome from '../screens/Welcome'
import { Register } from '../screens/Register'

export type RootStackParamList = {
    Welcome: undefined,
    Login : undefined,
    Register: undefined,

}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const StackNavigator = () => {
    return(
        <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{headerShown: false}}>
            <Stack.Screen name = 'Welcome' component={Welcome}/>
            <Stack.Screen name = 'Login' component={Login}/>
            <Stack.Screen name = 'Register' component={Register}/>
        </Stack.Navigator>

    )

}