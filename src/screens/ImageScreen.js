import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        image={require("../../assets/forest.jpg")}
        score="5"
      />
      <ImageDetail
        title="Beach"
        image={require("../../assets/beach.jpg")}
        score="6"
      />
      <ImageDetail
        title="Mountain"
        image={require("../../assets/mountain.jpg")}
        score="7"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
