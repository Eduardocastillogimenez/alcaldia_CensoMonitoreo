import React, { useEffect, useState } from "react";
import Cargando from 'components/cargando';
import { requestLoginUsurios } from "api";

export const Auth = React.createContext();

export const AuthContext = (props) => {
    const [usuario, setUsuario] = useState(null);
    const [data, setData] = useState(null);
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {   
        if(props.values && data===null){
            requestLoginUsurios(setData,props.values);    
            setShowChild(false);        
        }
        if(props.values && data){
            setUsuario(data);
            setShowChild(true);
            localStorage.setItem('usuario', JSON.stringify(data));
        }
        if(props.values===null && data===null){
            setShowChild(true);
        }
        
    }, [props,data]);

    if (!showChild) {
        return <Cargando/>;
    } else {
        return (
            <Auth.Provider
                value={{
                    usuario
                }}
            >
                {props.children}
            </Auth.Provider>
        );
    }
};