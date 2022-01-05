import '../repo/Repo.css';

function RepoList() {
    return (
        <div className="repos-list">
        <h3>Repositórios</h3>
            <ul>
                <li>
                    <div className="left-block">
                        <span className="repo-owner"></span>
                        <span className="repo-name"><b></b></span>
                    </div>
                    <div className="right-block">
                    <i className="material-icons">delete</i>
                    </div>
                </li>
            </ul>
        </div> 
    )
}

export default RepoList;
