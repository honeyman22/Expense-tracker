import "./app.d";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import LoginScreen from "./screens/auth/login-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/dashboard";
import ExpenseReport from "./screens/expense-report";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ title: "Welcome", headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "",
            headerShown: false,
            headerShadowVisible: false,
            headerBackVisible: true,
          }}
        />
        <Stack.Screen
          name="expense-report"
          component={ExpenseReport}
          options={{
            title: "",
            headerShown: true,
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
