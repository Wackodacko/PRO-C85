import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

export default class LoadingScreen extends Component {
    render() {// before the checkloggedin screen the text loading will come.
        return (
          <View style={styles.container}>
            <Text>Loading</Text>
          </View>
        );
      }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });