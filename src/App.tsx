import CourseGoalList from './components/CourseGoalList.tsx';
// import FavoriteItem from './components/FavoriteItem.tsx';
import Header from './components/Header.tsx';

import goalsImg from './assets/goals.jpg'
import { useState } from 'react';
import NewGoal from './components/NewGoal.tsx';

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
}

export default function App() {
  const[goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
      setGoals(prevGoals => {
      const newGoal: CourseGoal = {
          id: Math.random(),
          title: goal,
          description: summary
      };
      return [...prevGoals, newGoal];
      });
  };

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
  };
 
  return (
    <main>
      <Header img={{ src: goalsImg, alt: 'A list of goals'}} >
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal}/>

      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
{/*       
      <FavoriteItem 
        title="Learn React + TS" 
        description="Learn it from the ground up"
        route="https://www.google.com/"/> */}
    </main>
  );
};
