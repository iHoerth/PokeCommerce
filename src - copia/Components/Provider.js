import { createContext, useState } from "react"

const Provider = ({children}) => {
    const [state, setState] = useState([]);
    return (
        <div>
            <AppContext.Provider value={[state, setState]}>
                {children}
            </AppContext.Provider>
        </div>
    )
}
export const AppContext = createContext()
export default Provider