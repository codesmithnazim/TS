const { useState } = require("react");

interface FetchedData<T> {
    data : T | null, 
    loading: boolean, 
    error: string | null
}


function UseFetch<T>(url :string): FetchedData<T> {
    const [fetchedData, setFetchedData] = useState<FetchedData<T>>({
    data :  null, 
    loading: true, 
    error:  null
})

    return fetchedData;
}

export {UseFetch}