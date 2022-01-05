import { createContext, useState, useEffect } from 'react';

const RepoContext = createContext();

export const RepoProvider = ( {children} ) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetchRepos();
    }, []);

    const fetchRepos = async () => {
        const response = await fetch('/repos');
        const data = await response.json();
        console.log(data);
        setRepos(data);
    }

    return(
        <RepoContext.Provider value={{
            repos: repos
        }}>
            {children}
        </RepoContext.Provider>
    );
}

export default RepoContext;