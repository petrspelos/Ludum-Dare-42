function LocalStorage_Set(key, obj)
{
    let json = JSON.stringify(obj);
    localStorage.setItem(key, json);
}

function LocalStorage_Get(key)
{
    let json = localStorage.getItem(key);
    return JSON.parse(json);
}
