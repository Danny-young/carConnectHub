import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Link } from 'expo-router';
import { TabBarIcon } from './navigation/TabBarIcon';
import { MaterialIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';


const categories = [
  {
    name:"Tiny homes",
    icon: "home"
  },

  {
    name:"Cabins",
    icon: "house-siding"
  },
  {
    name:"Trending",
    icon: "local-fire-department"
  },
  {
    name:"Play",
    icon: "videogame-asset"
  },
  
  {
    name:"BeachFront",
    icon: "beach-access"
  },
  {
    name:"Countryside",
    icon: "nature-people"
  },
];

interface Props {
  onCategoryChanged: (category: string) => void;
}


const ExploreHeader = ({ onCategoryChanged }: Props) => {
const scrollRef = useRef<ScrollView>(null);
  const itemRef = useRef<Array<TouchableOpacity | null >>([]) ;
  const [activeIndex, setActiveIndex] = useState(0);

  const selectCategory = (index: number) => {
  const selected = itemRef.current[index];
  setActiveIndex(index);
  selected?.measure((x) => {
    scrollRef.current?.scrollTo({x: x + 16, y: 0, animated: true});
  });

  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  onCategoryChanged(categories[index].name)
};

  return (
    <SafeAreaView>

      <View style={styles.container}>
        <View style={styles.actionRow}>
        <Link href={'/(modals)/booking'} asChild>
        <TouchableOpacity style={styles.searchBtn}>
        <TabBarIcon name={"search"} />
            <View>
              <Text style={{fontFamily: 'SpaceMono'}}>
                Search 
              </Text>
            </View>
        </TouchableOpacity>
        
        </Link>
        
        <TouchableOpacity style={styles.filterBtn}>
        <TabBarIcon name={"options-outline"} />
        </TouchableOpacity>
        </View>
     
      
      <ScrollView 
      ref={scrollRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
        gap:20,
        paddingHorizontal: 16,
      }} >
          {categories.map((item, index) =>
          (
            <TouchableOpacity
            onPress={()=> selectCategory(index)} 
              key={index}
              ref={(el) => {itemRef.current[index] = el}}
              style={activeIndex === index ? styles.categoryBtnActive : styles.categoriesBtn}>
              <MaterialIcons size={24} name={item.icon as any} color={activeIndex === index ? 'blue': 'grey'}/>
              <Text 
              style={activeIndex === index ? styles.categoryTextActive: styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
      </View>
   
    </SafeAreaView>
  )
}
 const styles = StyleSheet.create({
   container: {
     backgroundColor: '#fff',
     height:130,
   },
   actionRow: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     paddingHorizontal:24,
     paddingBottom:16,
     gap:10

   },
   filterBtn: {
     padding:10,
     borderWidth:1,
     borderColor: 'grey',
     borderRadius:24,
   },
   searchBtn: {
      flexDirection: 'row',
      alignItems:'center',
      gap:10,
      borderWidth: StyleSheet.hairlineWidth,
      flex:1,
      padding:14,
      borderRadius: 30,
      backgroundColor: '#fff',

      elevation:2,
      shadowColor: '#000',
      shadowOpacity: 0.12,
      shadowRadius: 8,
      shadowOffset: {
        width:1,
        height:1,
                     },
   },

   categoryText: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    color:'grey',
   },

   categoryTextActive: {
    fontSize: 14,
    fontFamily: 'SpaceMono',
    color:'blue',
   },

   categoryBtnActive: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
    borderBottomColor: '#000',
    borderBottomWidth:2,
   },

   categoriesBtn: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
    
   },

})

export default ExploreHeader