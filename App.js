import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const [count, setcount] = useState(0);
  const [person, setperson] = useState('');
  const [displaypage0, setpage0] = useState('flex');
  const [displaypage1, setpage1] = useState('none');
  const [displaypage2, setpage2] = useState('none');
  const changePage1 = () => {
    setpage0('none');
    setpage1('flex');
  };
  const changePageBack = () => {
    setpage2('none');
    setpage1('none');
    setpage0('flex');
    setcount(0);
  };
  const changePage2 = () => {
    setpage0('none');
    setpage2('flex');
  };


  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}>
        <View style={styles.bgrange}>
          <ImageBackground style={styles.bgpic} source={require('./src/bgpic2.jpg')}>
            <Text style={styles.toptext}>時有風吹幡動，一僧曰風動，一僧曰幡動，議論不已。惠能進曰：「不是風動，不是幡動，仁者心動。」</Text>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.textarea}>
        <View style={{ flex: 1, backgroundColor: '#DCDCDC', display: displaypage0 }}>
          <View style={[styles.centerstyle, { flex: 1.5 }]}>
            <Text style={styles.downtext}>本次念佛共{count}次</Text>
          </View>
          <View style={[styles.centerstyle, { flex: 2 }]}>
            <TouchableOpacity
              style={[styles.buttontype, { backgroundColor: '#7F7F7F' }]}
              onPress={() => setcount(count + 1)}>
              <Text style={[styles.downtextbutton, { color: '#FCFCFC' }]}>每念完一次請點我</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'flex-end', flex: 4.5 }}>
            <View style={[styles.centerstyle, { flex: 2 }]}>
              <View style={{ flex: 1, width: '90%', flexDirection: 'row' }}>
                <View style={[styles.centerstyle, { flex: 1 }]}>
                  <Text style={styles.downtext}>迴向的對象：</Text>
                </View>
                <View style={[styles.centerstyle, { flex: 1 }]}>
                  <TextInput
                    style={{ width: '100%', height: '50%', backgroundColor: '#FCFCFC', borderRadius: 15, textAlign: 'center' }}
                    onChangeText={(text) => setperson(text)}
                    placeholder='請輸入您想要迴向的對象'></TextInput>
                </View>
              </View>
            </View>
            <View style={{ flex: 2.5, flexDirection: 'row' }}>
              <View style={{ flex: 1, top: '5%', alignItems: 'center' }}>
                <TouchableOpacity
                  style={[styles.buttontype, styles.centerstyle, { backgroundColor: '#FCFCFC', width: '60%' }]}
                  onPress={changePage1}
                >
                  <Text style={[styles.downtextbutton, { color: '#000000' }]}>迴向</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, top: '5%', alignItems: 'center' }}>
                <TouchableOpacity
                  style={[styles.buttontype, styles.centerstyle, { backgroundColor: '#000000', width: '60%' }]}
                  onPress={changePage2}>
                  <Text style={[styles.downtextbutton, { color: '#FCFCFC' }]}>不迴向</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: '#DCDCDC', flexDirection: 'column', display: displaypage1 }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <Text style={[styles.downtext, { lineHeight: 60 }]}>本次念佛共{count}次</Text>
            <Text style={[styles.downtext, { lineHeight: 60 }]}>迴向予{person}</Text>
          </View>
          <View style={[styles.centerstyle, { flex: 1 }]}>
            <TouchableOpacity
              style={[styles.buttontype, { backgroundColor: '#7F7F7F', width: '30%', top: 0, alignItems: 'center' }]}
              onPress={changePageBack}>
              <Text style={[styles.downtextbutton, { color: '#FCFCFC' }]}>返回</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: '#DCDCDC', flexDirection: 'column', display: displaypage2 }}>
          <View style={[styles.centerstyle, { flex: 3 }]}>
            <Text style={{ fontSize: 18, width: '80%', textAlign: 'center' }}>一炬之火，數千百人各以炬來分取，熟食除冥，此炬如故，福亦如之。</Text>
            <Text style={{ fontSize: 16, lineHeight: 40 }}>將功德迴向予他人，功德並不會耗損哦！</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>

            <Text style={[styles.downtext, { lineHeight: 60 }]}>本次念佛共{count}次</Text>
          </View>
          <View style={[styles.centerstyle, { flex: 2 }]}>
            <TouchableOpacity
              style={[styles.buttontype, { backgroundColor: '#7F7F7F', width: '30%', top: 0, alignItems: 'center' }]}
              onPress={changePageBack}>
              <Text style={[styles.downtextbutton, { color: '#FCFCFC' }]}>返回</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  centerstyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgrange: {
    flex: 6,
    width: '100%',
  },
  textarea: {
    flex: 4,
    backgroundColor: '#F1EDEA',
    width: '100%',
    flexDirection: 'column',
  },
  bgpic: {
    height: '100%',
    alignItems: 'center',
  },
  toptext: {
    top: '22%',
    width: '65%',
    fontSize: 18,
    lineHeight: 35,
    textAlign: 'justify',
  },
  downtext: {
    fontSize: 22,
  },
  buttontype: {
    padding: '3%',
    borderRadius: 20,
  },
  downtextbutton: {
    fontSize: 25,
  },
});
