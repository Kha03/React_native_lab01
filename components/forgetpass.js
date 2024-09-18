import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function ForgetPass({ navigation }) {
  return (
    <LinearGradient
      colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <View style={styles.lock}>
        <Image source={require("../assets/Lock.png")} style={styles.lock_img} />
      </View>
      <View>
        <Text style={styles.text_header}>FORGET</Text>
        <Text style={styles.text_header}> PASSWORD</Text>
      </View>
      <View>
        <Text style={[styles.text_header, styles.text_sub]}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>
      <View style={[styles.input_style, styles.size_form]}>
        <Icon name="mail" size={30} color="#000" style={styles.imageStyle} />
        <TextInput
          style={{ flex: 1, fontSize: 14 }}
          placeholder="Email"
          placeholderTextColor="#000"
          underlineColorAndroid="transparent"
        />
      </View>
      <View>
        <TouchableOpacity
          style={[styles.btn, styles.size_form]}
          onPress={() => navigation.navigate("verifi")}
        >
          <Text style={{ fontSize: 18, fontWeight: 700 }}>NEXT</Text>
        </TouchableOpacity>
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
  lock: {
    width: 105,
    height: 117,
    marginBottom: 37,
  },
  lock_img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  text_header: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
  },
  text_sub: {
    marginTop: 32,
    width: 302,
    height: 53,
    fontSize: 15,
    marginBottom: 10,
  },
  size_form: {
    height: 45,
    width: 302,
  },
  input_style: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C4C4C4",
    borderWidth: 0.5,
  },
  imageStyle: {
    margin: 10,
    resizeMode: "stretch",
    alignItems: "center",
  },
  btn: {
    marginTop: 43,
    backgroundColor: "#E3C000",
    justifyContent: "center",
    alignItems: "center",
  },
});
