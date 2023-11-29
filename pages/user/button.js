import react from "react"
import styles from './user.module.css'


export default function Button(props){
    const {varient} = props
    function getcolor(){
        if (varient=="primary"){
            return styles.primary

        }
        
    }
    
    return(
        <button className="primary"  onClick={() => getcolor("primary")}>{props.children}
        </button>
       
    )
}