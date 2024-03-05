import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import {useState} from 'react'

type Props = {
  setAssign:(assign:{title:string, completed:number})=>void
  assignments:{title:string,completed:number}[];
}
export function Header({setAssign, assignments}:Props) {

  const [input, setTextInput] = useState("");
  const [currAssignment, setCurrAssignment] = useState<{title:string; completed:number}>({title:'',completed:0});
  const [validButton,setValidButton]= useState(false);

  const checkIfExists = (assignmentTitle:string) => assignments.some( ({title}) => title==assignmentTitle)  
  const setInput= (e: React.FormEvent<HTMLInputElement>): void => {
    let curr = e.currentTarget.value;
    setCurrAssignment({title:curr.trim(),completed:0});
    setTextInput(e.currentTarget.value.trim());
    if(curr!= "" && curr.trim().length>0 && (checkIfExists(curr.trim())==false)){
      setValidButton(true);
    }else{
      setValidButton(false);
    }
  }

  function clearInput(){
    setTextInput("");
  }
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={e=>{e.preventDefault()}}>
        <input placeholder="Add a new assignment" type="text" onChange={(e: React.FormEvent<HTMLInputElement>) => setInput(e)} value={input}/>
        <button disabled={!validButton} onClick={()=>{setAssign(currAssignment); clearInput();}}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
