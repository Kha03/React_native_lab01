import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
export default function Register({ navigation }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [sex, setSex] = useState(null);

  const options = ["Male", "Female "];
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.text_header}>REGISTER</Text>
      </View>
      <View style={styles.input_content}>
        <View style={styles.text_input}>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#000"
            style={{ width: "100%", fontSize: 16 }}
            autoFocus={true}
          />
        </View>
        <View style={styles.text_input}>
          <TextInput
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            placeholderTextColor="#000"
            style={{ width: "100%", fontSize: 16 }}
          />
        </View>
        <View style={styles.text_input}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#000"
            style={{ width: "100%", fontSize: 16 }}
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
        <View style={styles.text_input}>
          <TextInput
            placeholder="Birthday"
            value={birthday}
            onChangeText={setBirthday}
            placeholderTextColor="#000"
            style={{ width: "100%", fontSize: 16 }}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "flex-start",
          width: 340,
          gap: 30,
        }}
      >
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.radioButtonContainer}
            onPress={() => setSex(option)}
          >
            <View style={styles.radioButton}>
              {sex === option && <View style={styles.radioButtonSelected} />}
            </View>
            <Text style={styles.radioText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.btn_text}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>When you agree to terms and conditions</Text>
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
  input_content: {
    gap: 20,
  },
  text_header: {
    fontSize: 25,
    fontWeight: "700",
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
    marginTop: 20,
    marginBottom: 20,
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
});
