
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Picker from 'react-month-picker';
import MonthPicker from './components/MonthPicker';



const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={styles.cardContent}>
        <Text style={styles.Txt1}>Monthly Sales Graph</Text>
        <View style={styles.picker}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="January" value="Jan" />
        <Picker.Item label="Febraury" value="Feb" />
        <Picker.Item label="March" value="Mar" />
        <Picker.Item label="April" value="Apr" />
        <Picker.Item label="May" value="May" />
        <Picker.Item label="June" value="Jun" />
        <Picker.Item label="July" value="Jul" />
        <Picker.Item label="August" value="Aug" />
        <Picker.Item label="September" value="Sept" />
        <Picker.Item label="October" value="Oct" />
        <Picker.Item label="November" value="Nov" />
        <Picker.Item label="December" value="Dec" />
      </Picker>
    </View>
          
      </View>

      <View style={styles.cardContent1}>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('SalesToday.js')}}>
          <View style={styles.cardContent6}>
            <Text style={styles.Txt6}>Top item sold Today</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardContent2}>
            <Text style={styles.Txt2}>Sales Today</Text>{' '}
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardContent3}>
            <Text style={styles.Txt3}>Sales Weekly</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.cardContent4}>
            <Text style={styles.Txt4}>Highest Selling Branch</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardContent3}>
            <Text style={styles.Txt3}>Bill issued Today</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardContent4}>
            <Text style={styles.Txt4}>No. of item sold Today</Text>
          </View>
        </TouchableOpacity>
  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  cardContent: {
    flex: 2,
    marginTop: 50,
    height: 90,
    width: 330,
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop:20
  },
  Txt1: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop:20
   
  },
  cardContent1: {
    flex: 3,
    margingTop: 10,
    backgroundColor: 'white',
    height: 900,
    width: 330,
    flexWrap:'wrap',
    alignContent:'space-evenly',
    justifyContent:'space-evenly',
  },

  cardContent2: {
    height: 70,
    margingTop: 10,
    alignItems: 'left',
    backgroundColor: '#add8e6',
    width: 140,
    paddingTop:20
  },

  Txt2: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  cardContent3: {
    margingTop: 10,
    height:70,
    width:140,
    alignItems: 'right',
    backgroundColor: 'pink',
  },

  Txt3: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  cardContent4: {
    margingTop: 10,
    alignItems: 'right',
    backgroundColor: '#add8e6',
    width: 140,
    height: 80,
  },
  Txt4: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 10,
    marginRight:10
  },

  cardContent5: {
    margingTop: 10,
    alignItems: 'right',
    backgroundColor: '',
    width:140,
    height:80
  },
  Txt5: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },

  cardContent6: {
    margingTop: 10,
    alignItems: 'right',
    backgroundColor:  'pink',
    width: 130,
    height: 120,
  },
  Txt6: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 50,
    marginLeft: 15,
    marginRight:10
  },
  picker: {
    flex: 1,
    paddingTop: 10,
    paddingLeft:150,
    alignItems: "left",
  }
});

export default Flex;

