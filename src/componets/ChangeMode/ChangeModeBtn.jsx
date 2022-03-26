import { useTheme } from "../../Providers/MainProvider"

function ChangeModeBtn({children}) {
    const [setDark] = useTheme(true)
    return <button onClick={() => {setDark(state =>!state)}}>{children}</button>
}

export default ChangeModeBtn