import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.content_text}>
        <Text style={styles.title}>
          GROW{"\n"}
          YOUR BUSINESS
        </Text>
      </View>
      <View>
        <Text style={[styles.title, styles.sub_title]}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={[styles.content_btn, styles.btn_text]}>
        <TouchableOpacity style={styles.btn_sign}>
          <Text
            style={styles.btn_text}
            onPress={() => navigation.navigate("Welcome_2")}
          >
            LOG IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_sign}>
          <Text style={styles.btn_text}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00CCF9",
  },
  circle: {
    marginBottom: 90,
    width: 140,
    height: 140,
    borderRadius: 70, // Sử dụng số thay vì '50%' cho React Native
    borderWidth: 15,
    borderColor: "#000",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 60,
  },
  sub_title: {
    fontSize: 15,
    width: 302,
    marginBottom: 94,
  },
  content_btn: {
    justifyContent: "center",
    gap: 40,
    flexDirection: "row",
  },
  btn_text: {
    fontSize: 20,
    fontWeight: "700",
  },
  btn_sign: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: "#E3C000",
    borderRadius: 10,
  },
});
