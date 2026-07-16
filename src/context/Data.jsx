import { createContext, useReducer } from "react";
const Data= createContext();


const initialData = { theme: localStorage.getItem("theme") === null?"light"
  :localStorage.getItem("theme" )};
const reducer = (firstState,action) => {
  switch(action.type){

    case "CHANGE_FEILD":
      return {
        ...firstState,
        feild: action.newValue
      };

    case "CHANGE_LEVEL":
      return {
        ...firstState,
        level: action.newValue
      };

    case "INCREASE":
      return {
        ...firstState,
        count: firstState.count + 1
      };

    case "CHANGE_THEME":
      return {
        ...firstState,
        theme: action.newValue
      };

    default:
      return firstState;
  }
};

export function DataProvider({ children }) {
const [firstState, dispatch] = useReducer(reducer, initialData);


const changeTheme = (newTheme) => {
localStorage.setItem("theme",newTheme)

  dispatch({ type: "CHANGE_THEME", newValue: newTheme });
};
return (
<Data.Provider value={{ ...firstState, changeTheme}}>
{children}
</Data.Provider>
);
}
export default Data;

