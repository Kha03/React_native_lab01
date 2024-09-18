import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Welcome_2({ navigation }) {
  return (
    <LinearGradient
      colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
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
          <Text style={styles.btn_text}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_sign}>
          <Text
            style={styles.btn_text}
            onPress={() => navigation.navigate("Forget")}
          >
            SIGN IN
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={[styles.title, styles.sub_work]}>HOW WE WORK? </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    marginBottom: 60,
    width: 142,
    height: 142,
    borderRadius: 70, // Sử dụng số thay vì '50%' cho React Native
    borderWidth: 15,
    borderColor: "#000",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 50,
  },
  sub_title: {
    fontSize: 15,
    width: 302,
    marginBottom: 94,
  },
  sub_work: {
    fontSize: 18,
    marginTop: 20,
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
  },
});
