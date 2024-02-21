import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
type Props = {
  assignments:string[],
  remove:(arg0:number)=>void
}
export function Assignments({assignments,remove}:Props) {
  let completed = 0;
  let count = 0;
  const assignmentList = assignments.map(assignment=>
  <Assignment key={count++} title={assignment} remove={remove} index={count}/>
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
