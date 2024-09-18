import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import { useState, useRef } from "react";

export default function Verifi({ navigation }) {
  const [code, setCode] = useState([...Array(6)].map(() => ""));
  const inputs = useRef([]);

  const processInput = (text, slot) => {
    if (/[^0-9]/.test(text)) return;
    const newCode = [...code];
    newCode[slot] = text;
    setCode(newCode);

    if (text !== "" && slot !== code.length - 1) {
      inputs.current[slot + 1].focus(); // Focus next input
    }

    if (newCode.every((num) => num !== "")) {
      onComplete(newCode.join("")); // Call onComplete when all inputs are filled
    }
  };

  const onKeyPress = (e, slot) => {
    if (e.nativeEvent.key === "Backspace" && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1].focus();
    }
  };

  const onComplete = (completedCode) => {
    //do something
  };

  return (
    <LinearGradient
      colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <View
        style={{
          marginBottom: 62,
        }}
      >
        <Text style={styles.text_header}>CODE</Text>
      </View>
      <View>
        <Text style={[styles.text_header, { fontSize: 20 }]}>VERIFICATION</Text>
      </View>
      <View style={{ marginTop: 22, marginBottom: 18 }}>
        <Text style={[styles.text_header, styles.text_sub]}>
          Enter onetime password sent on
        </Text>
        <Text style={[styles.text_header, styles.text_sub]}>
          ++849092605798
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {code.map((num, idx) => (
          <TextInput
            key={idx}
            keyboardType="numeric"
            maxLength={1}
            value={num}
            style={{
              width: 50,
              height: 50,
              borderWidth: 1,
              borderColor: "#000",
              textAlign: "center",
            }}
            autoFocus={idx === 0}
            onChangeText={(text) => processInput(text, idx)}
            onKeyPress={(e) => onKeyPress(e, idx)}
            ref={(ref) => (inputs.current[idx] = ref)}
          />
        ))}
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.btn_text}>VERIFY CODE</Text>
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
  text_header: {
    fontSize: 60,
    fontWeight: "700",
    textAlign: "center",
  },
  text_sub: {
    fontSize: 15,
  },
  btn: {
    width: 340,
    height: 50,
    backgroundColor: "#E3C000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 34,
  },
  btn_text: {
    fontSize: 18,
    fontWeight: "700",
  },
});
