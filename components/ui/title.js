import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from "react-native";

import Colors from "../../constants/colors";

const Title = ({ children }) => {
  const { width, height } = useWindowDimensions();

  let defaultFontSize = 26;

  if (height < 400) {
    defaultFontSize = 20;
  }
  return (
    <Text style={[styles.title, { fontSize: defaultFontSize }]}>
      {children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    // fontSize: 26,
    // fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "#fff",
    padding: 10,
    maxwidth: "80%",
    width: 300,
  },
});
