import { createContext, useContext, useState } from "react";
import ru from '../Lang/ru.json'
import uz from '../Lang/ru.json'
import en from '../Lang/ru.json'

const Context = createContext()
export default function LangProvider({children}){
    const [lang, setLang] = useState(uz)
    const handleChangeLang = (langType) => {
        if(langType==='uz'){
            setLang(uz);
        }else if(langType ==='ru'){
            setLang(ru);
        }
        else if(langType==='en'){
            setLang(en);
        }else setLang(uz);
    }
    // nega app.js const [lang, setLang] = useLang() lekin biz {lang, handleChangeLang} berganmiz
    return <Context.Provider value={{lang, handleChangeLang}}>
        <Context.Consumer>
            {
                () => children
            }
        </Context.Consumer>
    </Context.Provider>
}
export const useLang = (setter) => {
    const { lang, handleChangeLang } = useContext(Context)
    return setter ? [handleChangeLang] : [lang, handleChangeLang]
}