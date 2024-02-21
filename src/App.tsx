import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import {useState} from 'react'
function App() {
  const [assignments, setAssignments] = useState<string[]>([]);
  const setAssign = (assign:string) => {
    setAssignments(oldAssignments =>[...oldAssignments,assign])
  }
  function removeAssignment(key:number):void {
    setAssignments([
      ...assignments.splice(0,key),
      ...assignments.slice(key+1)
    ]);
  }
  return (
    <>
      <Header setAssign={setAssign}/>
      <Assignments assignments={assignments} remove={removeAssignment}/>
    </>
  );
}

export default App;
