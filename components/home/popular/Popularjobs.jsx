import React from 'react'

import styles from './popularjobs.style'
import { View, Text ,TouchableOpacity,FlatList,ActivityIndicator} from 'react-native'

import {COLORS,SIZES} from '../../../constants'

import PopularJobCard from '../../common/cards/popular/PopularJobCard'

import { useState } from 'react'
import { useRouter } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Popularjobs = () => {

  const router = useRouter();
  const isLoading = false;
  const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.headerTitle}>Popular jobs</Text>

        <TouchableOpacity>

          <Text>Show All</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.cardsContainer}>

        {
          isLoading? (
            <ActivityIndicator size="large" color={COLORS.primary}/>
          ):error ? (
            <Text>
              Something Went Wrong
            </Text>
          ) : (
            <FlatList
             data={[1,2,3,4,5]}
            
            renderItem = {
              ({item}) => (
                <PopularJobCard item={item}/>
          )
          
            }

            keyExtractor = {
              item => item?.job_id
            }
            contentContainerStyle = {{columnGap:SIZES.medium}}
            horizontal
            />

            
          )
        }

      </View>




    </View>
  )
}

export default Popularjobs