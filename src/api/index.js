
export const requestLoginUsurios = (setData,data) => {
    
    const options = {
        method: 'POST',       
        headers: { 
            'Content-Type': 'application/json', 
            "Accept": "application/json" 
        },
        body: JSON.stringify(data),
        
    };
    
    fetch('https://api-salud-san-cristobal.herokuapp.com/api/login', options)
        .then(response => response.json())
        .then( dataa => setData(dataa));
   
}

export const requestRegistrarnUsurios = (data) => {
    
    const options = {
        method: 'POST',       
        headers: { 
            'Content-Type': 'application/json', 
            "Accept": "application/json" 
        },
        body: JSON.stringify(data),
        
    };
    
    fetch('https://api-salud-san-cristobal.herokuapp.com/api/register', options)
        .then(response => response.json())
   
}

export const requestDatosSaludActual = (data,token,id) => {
    
    const options = {
        method: 'PUT',       
        headers: { 
            'Content-Type': 'application/json', 
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data),
        
    };
    
    fetch(`https://api-salud-san-cristobal.herokuapp.com/api/user/${id}`, options)
        .then(response => response.json())
   
}

export const requestGetMunicipios = (setData) => {
    
    const options = {
        method: 'GET',       
        headers: { 
            'Content-Type': 'application/json', 
            "Accept": "application/json" 
        },
        
    };
    
    fetch('https://api-salud-san-cristobal.herokuapp.com/api/townships', options)
        .then(response => response.json())
        .then( dataa => setData(dataa.data));
}

export const requestGetSintomas = (setData,token) => {
    
    const options = {
        method: 'GET',       
        headers: { 
            'Content-Type': 'application/json', 
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        
    };
    
    fetch('https://api-salud-san-cristobal.herokuapp.com/api/symptom', options)
        .then(response => response.json())
        .then( dataa => setData(dataa.data));
}

export const requestSintomasAdicinal = (data,token) => {
    
    const options = {
        method: 'POST',       
        headers: { 
            'Content-Type': 'application/json', 
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data),
        
    };
    
    fetch('https://api-salud-san-cristobal.herokuapp.com/api/symptom', options)
        .then(response => response.json())
}

export const requestNoticias = (setData,token) => {
    
    const options = {
        method: 'GET',       
        headers: { 
            'Content-Type': 'application/json', 
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        
    };
    
    fetch('https://api-salud-san-cristobal.herokuapp.com/api/news', options)
        .then(response => response.json())
        .then( dataa => setData(dataa.data));
}

export const requestNoticia = (setData,token,id) => {
    
    const options = {
        method: 'GET',       
        headers: { 
            'Content-Type': 'application/json', 
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        
    };
    
    fetch(`https://api-salud-san-cristobal.herokuapp.com/api/news/${id}`, options)
        .then(response => response.json())
        .then( dataa => setData(dataa.data));
}

export const requestNotificaciones = (setData,token,id) => {
    
    const options = {
        method: 'GET',       
        headers: { 
            'Content-Type': 'application/json', 
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        
    };
    
    fetch(`https://api-salud-san-cristobal.herokuapp.com/api/notifications/${id}`, options)
        .then(response => response.json())
        .then( dataa => setData(dataa.data));
}

export const requestNotificacionesVista = (token,id) => {
    
    const options = {
        method: 'POST',       
        headers: { 
            'Content-Type': 'application/json', 
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        
    };
    
    fetch(`https://api-salud-san-cristobal.herokuapp.com/api/notification-seen/${id}`, options)
        .then(response => response.json())
}

export const requestNoticas = (token) => {
    
    const options = {
        method: 'GET',       
        headers: { 
            'Content-Type': 'application/json', 
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        
    };
    
    fetch(`https://api-salud-san-cristobal.herokuapp.com/api/news`, options)
        .then(response => response.json())
}

export const requestUsuarios = (setData,token) => {
    console.log("wwwwwww24244as4")
    const options = {
        method: 'GET',       
        headers: { 
            'Content-Type': 'application/json', 
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        
    };
    
    fetch(`https://api-salud-san-cristobal.herokuapp.com/api/user`, options)
        .then(response => response.json())
        .then( dataa => setData(dataa.data));
}



export const requestUsuariosEstadisticas = (setData,token) => {
    
    const options = {
        method: 'GET',       
        headers: { 
            'Content-Type': 'application/json', 
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        
    };
    
    fetch(`https://api-salud-san-cristobal.herokuapp.com/api/data`, options)
        .then(response => response.json())
        .then( dataa => setData(dataa.data));
}

export const requestnotificacioness = (token,data) => {
    
    const options = {
        method: 'POST',       
        headers: { 
            'Content-Type': 'application/json', 
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data),
        
    };
    
    fetch(`https://api-salud-san-cristobal.herokuapp.com/api/notification`, options)
        .then(response => response.json());
}