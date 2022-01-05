import { useContext, useEffect } from 'react';
import RepoContext from '../../context/RepoContext';
import '../repo/Repo.css';

function RepoList() {
    const {repos} = useContext(RepoContext);
    
    return (
        <div className="repos-list">
        <h3>Repositórios</h3>
            <ul>
                {repos.map((repo) => (
                <li>
                    <div className="left-block">
                        <span className="repo-owner">
                            <b>{repo.name}</b>
                        </span>
                        <span className="repo-name">
                            {repo.owner}
                        </span>
                    </div>
                    <div className="right-block">
                    <i className="material-icons">delete</i>
                    </div>
                </li>
                ))}
            </ul>
        </div> 
    )
}

export default RepoList;
