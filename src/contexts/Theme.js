import { createContext, useContext } from "react";

//here the createContext can be empty and also can take values, use it as per the 
//requirement.
//this accept the values as an object.

export const ThemeContext = createContext({
    themeMode: "light", //this is the default theme
    darkTheme: () => {},
    lightTheme: () => {},
    //these two are the simple methods, as we know whenever we call these methods, they
    //will work as they have access of the global functions.
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}

//this is a differnt and optimized approach of using the concept of context API. 
//here we have created a function which is a global function as well, which mainly have 
// the values which can be used later.
//now as a differnt approach we have created a custom hook which is carrying the useContext
// hook, inside of it we have global functions ThemeContext.
//along with these we have created the provider which will be needing to wrap the elements.

//"""""""""""ONE THING TO REMEMBER HERE IS WE MUST HAVE TO EXPORT THESE FUNCTIONS"""""""""