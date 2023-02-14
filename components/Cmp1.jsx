import { StatusBar } from "expo-status-bar";
import { useState, useCallback, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useSelector, useDispatch } from "react-redux";

// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

const asyncCall = async (e) => {
  // debugger;
  // await st.myMtd1(e);
  setTimeout(() => {
    e();
    alert("sdfgsdg");
  }, 2000);
  // e();
};

function Cmp1() {
  const [St1, setSt1] = useState("aa");
  const st = useSelector((state) => state);
  const vl = useSelector((state) => state.value);
  const dispatch = useDispatch();

  console.log("Use Selector", st);

  useEffect(() => {
    const crr=new Date();
    st.myMtd1(() => {
      setSt1(String(crr.getSeconds()));
    });
  }, [St1]);

  return (
    <View>
      <Text>Current Value: {vl}</Text>
      <View style={{ width: "100%", height: 1, backgroundColor: "red" }}></View>
      <Text>{St1}</Text>
      {/* <Text>{await st.myMtd1(7,8)}</Text> */}
      {/* {await asyncCall()} */}
    </View>
  );
}

export default Cmp1;
