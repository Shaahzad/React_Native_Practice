import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'
import { StatusBar } from 'expo-status-bar'
import { FilterOptions, TASK } from '@/constants/tasks'
import Header from '@/components/Header'
import DateSelector from '@/components/DateSelector'
import FilterTabs from '@/components/FilterTabs'
import TaskCards from '@/components/TaskCards'

const index = () => {
  const inset = useSafeAreaInsets()
  const [activeFilter, setActiveFilter] = useState<FilterOptions>("All")
  return (
    <View style={[styles.container, {paddingTop: inset.top}]}>
      <StatusBar style='light'/>
      <FlatList
      data={TASK}
      keyExtractor={item => item.id}
      renderItem={({item}) => <TaskCards task={item}/>}
      ListHeaderComponent={
        <>
        {/* Header */}
        <Header/>
        {/* DateSelector */}
        <DateSelector/>
        {/* FiltersTabs */}
        <FilterTabs selected={activeFilter} onSelect={setActiveFilter}/>
        </>
      }
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.background
  },
  Text: {
    color: Colors.textPrimary
  },
  list: {
    paddingBottom: 24
  }
})