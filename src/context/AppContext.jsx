import { createContext } from "react";
import { doctors } from "../assets/assets";

 

 export const AppContext=createContext()
 const AppContextProvider=(props)=>{
	const curensysmbol="$"
	const value={
		doctors,curensysmbol
	}
	return(
		<AppContext.Provider value={value}>
           {props.children}
		</AppContext.Provider>
	)
 }
export default AppContextProvider