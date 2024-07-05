import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import { FontAwesome6, AntDesign } from '@expo/vector-icons';


import { SafeAreaView } from 'react-native-safe-area-context';

const UserType = () => {
  return (
    <SafeAreaView>
    <View >
    <Text style={styles.header}>Profile</Text>
   {/*  <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={[
        { label: 'Football', value: 'football'},
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' },
      ]}
    />
 */}    

 <View style={{display:'flex', flexDirection:'row', gap:10, alignItems:'center', marginBottom:40}}>
  <Image
    source={{uri: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}}
    style={{width: 50, height: 50, borderRadius: 50,}}
   />
   <View>
  <Text>Danny_Young</Text>
  <Text>danielbampoeocran@gmail.com</Text>
   </View>
 </View>


 <View>
  <TouchableOpacity style={styles.pages}>
  <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:15}}>
  <FontAwesome6 name="user-pen" size={24} color="black" />
 <Text>Edit Profile</Text>
  </View>
  <AntDesign name="arrowright" size={24} color="black" />
 
  </TouchableOpacity>
  <TouchableOpacity style={styles.pages}>
  <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:15}}>
  <FontAwesome6 name="user-pen" size={24} color="black" />
 <Text>Favourite</Text>
  </View>
  <AntDesign name="arrowright" size={24} color="black" />
 
  </TouchableOpacity>
  <TouchableOpacity style={styles.pages}>
  <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:15}}>
  <FontAwesome6 name="user-pen" size={24} color="black" />
 <Text>My car</Text>
  </View>
  <AntDesign name="arrowright" size={24} color="black" />
 
  </TouchableOpacity>
  <TouchableOpacity style={styles.pages}>
  <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:15}}>
  <FontAwesome6 name="user-pen" size={24} color="black" />
 <Text>My Address</Text>
  </View>
  <AntDesign name="arrowright" size={24} color="black" />
 
  </TouchableOpacity>
  <TouchableOpacity style={styles.pages}>
  <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:15}}>
  <FontAwesome6 name="user-pen" size={24} color="black" />
 <Text>Language</Text>
  </View>
  <AntDesign name="arrowright" size={24} color="black" />
 
  </TouchableOpacity>
  <TouchableOpacity style={styles.pages}>
  <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:15}}>
  <FontAwesome6 name="user-pen" size={24} color="black" />
 <Text>Terms and Condition</Text>
  </View>
  <AntDesign name="arrowright" size={24} color="black" />
 
  </TouchableOpacity>
  <TouchableOpacity style={styles.pages}>
  <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:15}}>
  <FontAwesome6 name="user-pen" size={24} color="black" />
 <Text>Help & Support</Text>
  </View>
  <AntDesign name="arrowright" size={24} color="black" />
  </TouchableOpacity>
  <TouchableOpacity style={styles.pages}>
  <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:15}}>
  <FontAwesome6 name="user-pen" size={24} color="black" />
 <Text>Logout</Text>
  </View>
  <AntDesign name="arrowright" size={24} color="black" />
 
  </TouchableOpacity>
 </View>
    </View>
    </SafeAreaView>
  )
}

export default UserType


const styles = StyleSheet.create({
  header:{
    fontFamily: 'mon-b',
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pages:{display:'flex', 
    flexDirection:'row', 
    justifyContent:'space-between', 
    paddingHorizontal:20, 
    marginBottom:35 

  }

})