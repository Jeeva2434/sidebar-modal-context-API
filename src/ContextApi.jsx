import React, {useState,createContext, useContext } from 'react'


const ApiContext = createContext();

const ContextApi = ({children}) => {
    
    const[isSidebarOpen,setIsSidebarOpen] = useState(false);
    const[isModalOpen,setIsModalOpen] = useState(false);
  
    const sideBarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    
    const modalToggle = () => {
        setIsModalOpen(!isModalOpen);
    }


    return (
        <ApiContext.Provider 
        value={{
           isSidebarOpen,
           setIsSidebarOpen,
           isModalOpen,
           setIsModalOpen,
           sideBarToggle,
           modalToggle
        }}>
            {children}
        </ApiContext.Provider>
    )
}

export const SideBarModalContext = () => {
    return useContext(ApiContext);
}

export default ContextApi