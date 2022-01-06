import { createContext, useState, useEffect } from 'react';
import { extractNameAndOwner } from '../shared/functions/ExtractNameAndOwner';

const RepoContext = createContext();

export const RepoProvider = ( {children} ) => {
    const [repos, setRepos] = useState([]);
    const [found, setFound] = useState(false);
    const [foundRepo, setFoundRepo] = useState([]);

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
        const user = JSON.parse(window.sessionStorage.getItem('logged'));
        const token = window.sessionStorage.getItem('token');
        const repos = extractNameAndOwner(repoUrl);
        
        const response = await fetch(`http://localhost:3000/repos/add/${user._id}`, {
            method: 'POST',
            headers: { 
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(repos)
        });
        const data = await response.json();
        console.log(data);
        setRepos([data.repo, ...repos]);
    }

    const findRepo = async (repoName) => {
        const response = await fetch(`/repos?name=${repoName}`);
        const data = await response.json();
        console.log(data);
        setFound(true);
        setFoundRepo(data);
    }

    const deleteRepo = async (id) => {
        if (window.confirm('Are you sure you want to delete it ?')) {
            const response = await fetch(`/repos/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            setRepos(repos.filter((repo) => repo.id !== id));
        }
    }

    return(
        <RepoContext.Provider value={{
            repos: repos,
            foundRepo: foundRepo,
            found: found,
            addRepo: addRepo,
            findRepo: findRepo,
            deleteRepo: deleteRepo
        }}>
            {children}
        </RepoContext.Provider>
    );
}

export default RepoContext;