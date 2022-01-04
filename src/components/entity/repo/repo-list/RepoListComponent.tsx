import React, { useEffect } from "react";

import './repolist.css';

const list = [
    {
        name: 'name',
        owner: 'owner'
    },
    {
        name: 'name',
        owner: 'owner'
    }
]

function RepoListComponent() {
    
    let repos = list;

    useEffect(() => {
        repos = list;
    }, [])

    return(
        <div className="repos-list">
            <h3>Repositórios</h3>
                {repos.map((repo) => (
                    <ul>
                        <li>
                            <div className="left-block">
                                <span className="repo-owner">{repo.name}</span>
                                <span className="repo-name"><b>{repo.owner}</b></span>
                            </div>
                            <div className="right-block">
                            <i className="material-icons">delete</i>
                            </div>
                        </li>
                    </ul>
                ))}
        </div>
    );
}

export default RepoListComponent;