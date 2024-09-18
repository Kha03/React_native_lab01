import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
export default function Login_3({ navigation }) {
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: 140,
          height: 140,
          marginBottom: 30,
        }}
      >
        <Image
          source={require("../assets/eyeball.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </View>
      <View style={styles.input_content}>
        <View style={styles.text_input}>
          <Icon name="person" size={32} color="#386FFC" />
          <TextInput
            placeholder="Plesae input user name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#C4C4C4"
            style={{ width: "100%", fontSize: 18 }}
            autoFocus={true}
          />
        </View>

        <View style={styles.text_input}>
          <Icon name="lock" size={32} color="#386FFC" />
          <TextInput
            placeholder="Please input password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#C4C4C4"
            secureTextEntry={secureText}
            style={{ width: "83%", fontSize: 18 }}
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
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.btn_text}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 38,
          width: 320,
        }}
      >
        <Text style={{ fontSize: 18 }}>Register</Text>
        <Text style={{ fontSize: 18 }}>Forgot Password</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.line}></View>
        <Text style={{ fontSize: 18, marginHorizontal: 4 }}>
          Other Login Methods
        </Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.social_content}>
        <View
          style={[
            styles.social_item,
            { backgroundColor: "#3AB4FF", display: "relative" },
          ]}
        >
          <Image source={require("../assets/Union.png")} style={styles.uni} />
          <Image source={require("../assets/person.png")} />
        </View>
        <View style={[styles.social_item, { backgroundColor: "#F4AA47" }]}>
          <Image source={require("../assets/wifi.png")} />
        </View>
        <View style={[styles.social_item, { backgroundColor: "#3A579C" }]}>
          <Image source={require("../assets/face.png")} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input_content: {
    gap: 20,
  },
  text_input: {
    width: 320,
    height: 50,
    borderColor: "#C4C4C4",
    borderBottomWidth: 1,
    paddingBottom: 5,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 5,
  },
  btn: {
    marginTop: 40,
    marginBottom: 20,
    width: 320,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#386FFC",
    alignItems: "center",
    justifyContent: "center",
  },
  btn_text: {
    fontSize: 18,
    color: "#fff",
  },
  line: {
    width: 60,
    height: 1,
    backgroundColor: "#0E18F5",
  },
  social_content: {
    flexDirection: "row",
    width: 320,
    justifyContent: "space-between",
    marginTop: 30,
  },
  social_item: {
    width: 74,
    height: 74,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  uni: {
    position: "absolute",
    top: 2,
    right: 2,
  },
});
