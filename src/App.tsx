import CourseGoal from './components/CourseGoal.tsx';
import FavoriteItem from './components/FavoriteItem.tsx';
import Header from './components/Header.tsx';

// import CourseGoalType from './types/CourseGoalType';


import goalsImg from './assets/goals.jpg'
import { useState } from 'react';

export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const[goals, setGoals] = useState<CourseGoalType[]>([]);

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoalType = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth!'
      };
      return [...prevGoals, newGoal];
    });
  };


  return (
    <main>
      <Header img={{ src: goalsImg, alt: 'A list of goals'}} >
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
      
      <FavoriteItem 
        title="Learn React + TS" 
        description="Learn it from the ground up"
        route="www.google.com"/>
    </main>
  );
};
