import React from 'react';

import NewGoal from './components/NewGoal/NewGoal';
import GoalList from './components/Goallist/GoalList';
import './App.css';

function App() {
  const courseGoals = [{
    id: 'cg1',
    text: "Finish the course"
  },
  {
    id: 'cg1',
    text: "Learn as much as you can"
  },
  {
    id: 'cg1',
    text: "Help your friends!"
  },
];
  
const addNewGoalHandler = (newGoal) => {
  courseGoals.push(newGoal);
};

  return (
  <div className = "course-goals">
    <h2> 
      Course Goals
    </h2>
    <NewGoal />
    <GoalList goals = {courseGoals} />
  </div>
  );
}

export default App;
