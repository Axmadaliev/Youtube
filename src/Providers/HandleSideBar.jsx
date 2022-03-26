import { createContext, useContext, useState } from "react";

const Context = createContext()

export default function HandleSideBar({ children }) {
    const [sidebar, setSidebar] = useState(false)
    const value = {sidebar, setSidebar}
    return <Context.Provider value={value}>
        <Context.Consumer>
            {
                () => children
            }
        </Context.Consumer>
    </Context.Provider>
}


export const useSidebar = (setter) => {
    const { sidebar, setSidebar } = useContext(Context)
    return  [sidebar,setSidebar]
}