const getStoredApplication = () =>{
    const storedApplication = localStorage.getItem('applications');
    if(storedApplication){
        return JSON.parse(storedApplication);
    }
    return [];
}

const saveApplication = (id) =>{
    const storedApplications = getStoredApplication();
    const exist = storedApplications.find(itemId => itemId === id);
    if(!exist){
        storedApplications.push(id);
        localStorage.setItem('applications', JSON.stringify(storedApplications))
    }
}

export {getStoredApplication, saveApplication};