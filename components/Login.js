import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 70 }}>
        <Text style={styles.text_header}>LOGIN</Text>
      </View>
      <View style={{ gap: 30 }}>
        <View style={styles.text_input}>
          <TextInput
            placeholder="Email"
            inputMode="email"
            keyboardType="email-address"
            placeholderTextColor="#000"
            style={{ width: "100%", fontSize: 16 }}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.text_input}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#000"
            secureTextEntry={secureText}
            style={{ width: "90%", fontSize: 16 }}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSecureText(!secureText)}
          >
            <Icon
              name={secureText ? "visibility-off" : "visibility"}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.btn_text}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={[styles.text_info]}>
          When you agree to terms and conditions
        </Text>
        <Text
          style={[styles.text_info, { color: "#5D25FA", marginVertical: 14 }]}
        >
          For got your password?
        </Text>
        <Text style={[styles.text_info]}>Or login with</Text>
      </View>
      <View style={styles.login_social}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.btn_login, { backgroundColor: "#25479B" }]}
        >
          <View style={{ width: 35, height: 35 }}>
            <Image
              source={require("../assets/facebook_icon.png")}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_login} activeOpacity={0.8}>
          <View style={{ width: 35, height: 35 }}>
            <Image
              source={require("../assets/zalo_icon.png")}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.btn_login, { backgroundColor: "transparent" }]}
        >
          <View style={{ width: 35, height: 35 }}>
            <Image
              source={require("../assets/google_icon.png")}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31AA5230",
    alignItems: "center",
    justifyContent: "center",
  },
  text_header: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
  },
  text_input: {
    width: 340,
    height: 50,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 15,
    backgroundColor: "#C4C4C44D",
  },
  btn: {
    marginTop: 50,
    width: 340,
    height: 50,
    backgroundColor: "#E53935",
    alignItems: "center",
    justifyContent: "center",
  },
  btn_text: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
  text_info: {
    fontWeight: 400,
    fontSize: 14,
    textAlign: "center",
  },
  login_social: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: 339,
    borderWidth: 1,
    borderColor: "#0680F1",
  },
  btn_login: {
    width: 339 / 3,
    height: 50,
    backgroundColor: "#0680F1",
    alignItems: "center",
    justifyContent: "center",
  },
});
