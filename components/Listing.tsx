import { View, Text, FlatList, ListRenderItem, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { defaultStyles } from '@/constants/Styles';
import { Link } from 'expo-router';
import { Listing } from '@/interfaces/listing';
import { TabBarIcon } from './navigation/TabBarIcon';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';

interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings: items, category }: Props) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    console.log('RELOAD LISTINGS', items.length);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200); // Simulate loading time of 1 second for demonstration purposes

  }, [category]);

  const renderRow: ListRenderItem<Listing> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
    <TouchableOpacity>
      <Animated.View style={styles.listing} entering={FadeInRight} exiting={FadeInLeft}>
         <Image source={{uri: item.medium_url}} style={styles.image}/>
         <TouchableOpacity  style={{position: 'absolute', right:30, top:30}}>
          <TabBarIcon name='heart-outline'/>
         </TouchableOpacity>

         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{ fontSize:16, fontFamily: 'SpaceMono'}}>{item.name}</Text>
         <View style={{flexDirection: 'row'}}>
          <Ionicons name='star' size={16}/>
          {/* <Text style= {{fontFamily: 'SpaceMono'}}>
            {item.review_scoring_rating} 
  
          </Text> */}
         </View>
         </View>
         <View style= {{flexDirection: 'row', gap:4}}>
          <Text style={{fontFamily: 'SpaceMono'}}>Ghc {item.price}</Text>
          <Text style={{fontFamily: 'SpaceMono'}}>night</Text>
         </View>
      </Animated.View>
    </TouchableOpacity>
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <FlatList
        renderItem={renderRow}
        ref={listRef}
        data={loading ? [] : items}
      />
    
    </View>
  );
};


const styles = StyleSheet.create({
  listing: {
    padding: 16
  },
  image: {
    width: '100%',
    height: 300,  
    borderRadius: 10,  
  }

})
export default Listings;
