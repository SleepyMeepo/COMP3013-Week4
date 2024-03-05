import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import {useState} from 'react'
type Props = {
  assignments:{title:string,completed:number}[],
  remove:(arg0:number)=>void,
  updateAssignment:(arg0:number,arg1:number)=>void,
}
export function Assignments({assignments,remove, updateAssignment}:Props) {

  const [currCompleted,setCurrCompleted] = useState(0);
  let count = 0;
  function getCurrentNumOfCompleted() :void {
    let counter = 0;
    for(let i=0; i<assignments.length; i++){
      if(assignments[i].completed==1){
        counter++;

      }
    }
    setCurrCompleted(counter);
  }
  const assignmentList = assignments.map((assignment)=>
  <Assignment key={count++} title={assignment.title} remove={remove} index={count} updateAssignment={updateAssignment} completed={assignment.completed} updateCounter={getCurrentNumOfCompleted}/>
  );


  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{currCompleted} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignmentList}
      </div>
    </section>
  );
}
