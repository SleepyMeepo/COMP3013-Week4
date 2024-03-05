import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import {useState} from 'react'


function App() {
  const [assignments, setAssignments] = useState<{title:string; completed:number}[]>([]);
  const setAssign = (assign:{title:string, completed:number}) => {
    setAssignments(oldAssignments =>[...oldAssignments,assign])
  }
  function removeAssignment(key:number):void {
    setAssignments([
      ...assignments.slice(0,key),
      ...assignments.slice(key+1),
    ]);
  }
  function updateAssignment(key:number, status:number):void {

    for(let i=0; i<assignments.length; i++){
      if(i == key){
        assignments[i].completed=status;
      }
    }
  }
  return (
    <>
      <Header setAssign={setAssign} assignments={assignments}/>
      <Assignments assignments={assignments} remove={removeAssignment} updateAssignment={updateAssignment}/>
    </>
  );
}

export default App;
