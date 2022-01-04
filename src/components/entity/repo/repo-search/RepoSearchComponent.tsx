import React from "react";
import './reposearch.css';

class RepoSearchComponent extends React.Component {
    render() {
        return(
            <form className="d-flex justify-content-center">
                <span className="text">Pesquisar</span>
                <input id="search" type="text" className="new-repo-input" placeholder="Encontre um repositório..." name="repoUrl"></input>
                <button className="new-repo-button">Pesquisar</button>
            </form>
        );
    }

}

export default RepoSearchComponent;