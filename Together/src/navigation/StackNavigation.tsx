import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Login } from '../screens/Login'
import Welcome from '../screens/Welcome'

export type RootStackParamList = {
    Welcome: undefined,
    Login : undefined

}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const StackNavigator = () => {
    return(
        <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{headerShown: false}}>
            <Stack.Screen name = 'Welcome' component={Welcome}/>
            <Stack.Screen name = 'Login' component={Login}/>
        </Stack.Navigator>

    )

}