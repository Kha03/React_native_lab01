import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./components/welcome";
import Welcome_2 from "./components/welcome_2";
import ForgetPass from "./components/forgetpass";
import Verifi from "./components/verifi";
import Login from "./components/Login";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Welcome_2" component={Welcome_2} />
        <Stack.Screen name="Forget" component={ForgetPass} />
        <Stack.Screen name="verifi" component={Verifi} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
