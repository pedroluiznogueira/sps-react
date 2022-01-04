import React from "react";
import './repolist.css';

class RepoListComponent extends React.Component {
    render() {
        return(
            <div className="repos-list">
                <h3>Repositórios</h3>
                <ul>
                    <li>
                        <div className="left-block">
                            <span className="repo-owner">skdslk</span>
                            <span className="repo-name"><b>fkdsmnkfld</b></span>
                        </div>
                        <div className="right-block">
                        <i className="material-icons">delete</i>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }

}

export default RepoListComponent;