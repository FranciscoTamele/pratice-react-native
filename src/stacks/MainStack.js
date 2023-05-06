import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// redux
import Store from '../reducers/Store'
import { Provider } from "react-redux";

import SignIn from "../views/SignIn";
import Signup from "../views/Signup";
import Preload from "../views/Preload";
import Menu from "../views/Menu";
import Thunk from "../views/Thunk";

const Stack = createNativeStackNavigator();
export default () => {

    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="thunk">

                    <Stack.Screen
                        name="Preload"
                        component={Preload}
                        options={{
                            headerShown: false,
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
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name="Menu"
                        component={Menu}
                        options={{
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name={"thunk"}
                        component={Thunk}
                        options={{headerShown:false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
