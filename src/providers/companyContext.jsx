import { createContext, useState } from "react";
import { api } from "../services/api";

export const CompanyContext = createContext({});
export const CompanyProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    const companyRegister = async (formData) => {
        try {
            await api.post("/users",formData)

        } catch (error) {
            console.log(error);
        }
    }

    const companyLogin = async (formData) => {
        try {
            const { data } = await api.post("/login",formData)
            setUser(data.user)
            localStorage.setItem("@USERID", data.user.id)
            localStorage.setItem("@TOKEN", data.accessToken)
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <CompanyContext.Provider value={{companyRegister, companyLogin}}>
            {children}
        </CompanyContext.Provider>
    )
}
