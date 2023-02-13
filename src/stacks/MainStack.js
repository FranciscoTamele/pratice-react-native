import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../views/SignIn";
import Signup from "../views/Signup";
import Preload from "../views/Preload";
import Menu from "../views/Menu";

const Stack = createNativeStackNavigator();
export default () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">

                <Stack.Screen
                    name="Preload"
                    component={Preload}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen name="SignIn"
                              component={SignIn}
                              options={{
                                  headerShown: false,
                              }}
                />

                <Stack.Screen
                    name="SignUp"
                    component={Signup}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Menu"
                    component={Menu}
                    options={{
                        headerShown:false
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
