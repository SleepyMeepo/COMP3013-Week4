import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import {useState} from 'react'
type Props = {
  title:string,
  remove:(arg0:number)=>void,
  index:number,
  completed:number;
  updateAssignment:(arg0:number, arg1:number)=>void
  updateCounter:()=>void
}


export function Assignment({title,remove,index,updateAssignment,updateCounter}:Props) {

  const [check, setCheck] = useState(false);
  function displayCheck(){
    setCheck(!check);
    if(!check){
      updateAssignment(index,1);
    }else{
      updateAssignment(index,0);
    }
    updateCounter();
  }
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={()=>displayCheck()}>
        {check==true &&
          <BsCheckCircleFill />
        }
        {
          check==false && 
          <div />
        }
        
      </button>

      <p className={check? styles.textCompleted:""}>{title}</p>

      <button className={styles.deleteButton} onClick={()=>remove(index)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
