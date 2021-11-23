import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import DashboardScreen from "./screens/DashboardScreen";

import  firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
})//we are connection these screens to the switch ch navigator, it is the navigation that comes takes you from the loading screen to the login screen and then to the dahboard screen.

const AppNavigator = createAppContainer(AppSwitchNavigator)
//the appnavigator holds the screens and the navigator together.
export default function App() {
  return (
    <AppNavigator />
  )
}