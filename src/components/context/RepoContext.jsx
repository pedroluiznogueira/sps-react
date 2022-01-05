import { createContext, useState, useEffect } from 'react';
import { extractNameAndOwner } from '../shared/functions/ExtractNameAndOwner';

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

    const addRepo = async (repoUrl) => {
        const newRepo = extractNameAndOwner(repoUrl)
        const response = await fetch('/repos', {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRepo)
        });
        const data = await response.json();
        console.log(data);
        setRepos([data, ...repos]);
    }

    return(
        <RepoContext.Provider value={{
            repos: repos,
            addRepo: addRepo
        }}>
            {children}
        </RepoContext.Provider>
    );
}

export default RepoContext;