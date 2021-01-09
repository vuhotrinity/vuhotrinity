export function getDataFromDoc(doc,excepts= []){
    let data=doc.data();
    data.id= doc.id;
    return data;
    
}
export function getDataFromDocs(docs,excepts =[]){
    return docs.map(function(doc){
        return getDataFromDoc(doc,excepts);
    })
}

export function saveCurrentUser(user){
    localStorage.setItem('current-user', JSON.stringify(user));
}
export function getCurrentUser(user){
    let result = localStorage.getItem("current-user")
    if(result){
        return JSON.parse(result)
    }
    else {
        return null;
    }
}