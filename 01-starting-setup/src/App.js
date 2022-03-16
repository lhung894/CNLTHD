/*=============*/
/* COMPONENTS */
/*============*/
/*import Functional from "./Components/Functional.js";
import Class from "./Components/Class";
function App() {
  return (
      <div>
          <div>
              <h2>Let's get started!</h2>
          </div>
          <Class></Class>
      </div>
  );
}

export default App;*/

/*====================*/
/* STYLING COMPONENTS */
/*====================*/
// import React, { useState } from 'react';
//
// import CourseGoalList from './components/StylingComponents/CourseGoals/CourseGoalList/CourseGoalList';
// import CourseInput from './components/StylingComponents/CourseGoals/CourseInput/CourseInput';
// import './App.css';
//
// const App = () => {
//     const [courseGoals, setCourseGoals] = useState([
//         { text: 'Do all exercises!', id: 'g1' },
//         { text: 'Finish the course!', id: 'g2' }
//     ]);
//
//     const addGoalHandler = enteredText => {
//         setCourseGoals(prevGoals => {
//             const updatedGoals = [...prevGoals];
//             updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
//             return updatedGoals;
//         });
//     };
//
//     const deleteItemHandler = goalId => {
//         setCourseGoals(prevGoals => {
//             const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
//             return updatedGoals;
//         });
//     };
//
//     let content = (
//         <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
//     );
//
//     if (courseGoals.length > 0) {
//         content = (
//             <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
//         );
//     }
//
//     return (
//         <div>
//             <section id="goal-form">
//                 <CourseInput onAddGoal={addGoalHandler} />
//             </section>
//             <section id="goals">
//                 {content}
//                 {/* {courseGoals.length > 0 && (
//           <CourseGoalList
//             items={courseGoals}
//             onDeleteItem={deleteItemHandler}
//           />
//         ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
//         } */}
//             </section>
//         </div>
//     );
// };
//
// export default App;

/*====================*/
/* FORM */
/*====================*/
import Register from "./components/Form/Register";
function App() {
    return (
        <div>
            <Register></Register>
        </div>
    );
}

export default App;
