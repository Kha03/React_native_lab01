import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
export default function Login_2({ navigation }) {
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const [secureText, setSecureText] = useState(true);

  return (
    <LinearGradient
      colors={["#FBCB00", "#BF9A00"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <View
        style={{
          marginBottom: 75,
          marginLeft: 40,
          alignSelf: "flex-start",
        }}
      >
        <Text style={styles.text_header}>LOGIN</Text>
      </View>
      <View style={styles.input_content}>
        <View style={styles.text_input}>
          <Icon name="person" size={32} />
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#000"
            style={{ width: "100%", fontSize: 18 }}
            autoFocus={true}
          />
        </View>

        <View style={styles.text_input}>
          <Icon name="lock" size={32} />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#000"
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
      <View>
        <Text style={[styles.text_header, { fontSize: 20 }]}>
          CREATE ACCOUNT
        </Text>
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
  input_content: {
    gap: 20,
  },
  text_header: {
    fontSize: 30,
    fontWeight: "700",
  },
  text_input: {
    width: 340,
    height: 50,
    backgroundColor: "#C4C4C44D",
    borderColor: "#F2F2F2",
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 5,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    height: 23,
    width: 23,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonSelected: {
    height: 15,
    width: 15,
    borderRadius: 20,
    backgroundColor: "#000",
  },
  radioText: {
    marginLeft: 14,
    fontSize: 18,
  },
  btn: {
    marginTop: 60,
    marginBottom: 45,
    width: 340,
    height: 50,
    backgroundColor: "#060000",
    alignItems: "center",
    justifyContent: "center",
  },
  btn_text: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
});
