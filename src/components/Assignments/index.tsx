import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import {useState} from 'react'
type Props = {
  assignments:string[],
  remove:(arg0:number)=>void
}
export function Assignments({assignments,remove}:Props) {
  const [completed, setCompleted] = useState(0);
  let count = 0;
  function addCompleted(num:number){
    setCompleted(completed + num );
  }
  const assignmentList = assignments.map(assignment=>
  <Assignment key={count++} title={assignment} remove={remove} index={count} addCompleted={addCompleted}/>
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
          <span>{completed} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignmentList}
      </div>
    </section>
  );
}
