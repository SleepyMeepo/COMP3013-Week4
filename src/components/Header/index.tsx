import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import {useState} from 'react'

export function Header({setAssign = (l:string)=>{}}) {

  const [currAssignment, setCurrAssignment] = useState("");
  const [validButton,setValidButton]= useState(false);
  const setInput= (e: React.FormEvent<HTMLInputElement>): void => {
    let curr = e.currentTarget.value;
    if(curr!= "" && curr.trim().length>0){
      setValidButton(true);
      setCurrAssignment(curr.trim());
    }else{
      setValidButton(false);
    }
  }
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={e=>{e.preventDefault()}}>
        <input placeholder="Add a new assignment" type="text" onChange={(e: React.FormEvent<HTMLInputElement>) => setInput(e)}/>
        <button disabled={!validButton} onClick={()=>setAssign(currAssignment)}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
