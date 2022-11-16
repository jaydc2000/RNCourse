import { StyleSheet, View, Button, TextInput, FlatList, keyExtractor } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] =useState([]);

  const addGoalHandler = (enteredGoalText) => {
    console.log(enteredGoalText)
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, key: Math.random().toString()},
    ]);
  };
  console.log({courseGoals})

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return <GoalItem 
              onDeleteItem={deleteGoalHandler} 
              text={itemData.item.text}
              id={itemData.item.key}
              />
        }} 
          keyExtractor={(item, index)=> {
            return item.id;
        } }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  
  goalsContainer: {
    flex: 5
  },

});
