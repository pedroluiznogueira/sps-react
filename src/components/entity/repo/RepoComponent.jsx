import React from "react";
import './repo.css';

function RepoComponent() {

    return(
        <div className="container">
            <section id="sec" className="main">
                <form className="d-flex justify-content-center">
                    <span className="text">Pesquisar</span>
                    <input id="search" type="text" className="new-repo-input" placeholder="Encontre um repositório..." name="repoUrl" />
                    <button className="new-repo-button">Pesquisar</button>
                </form>

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
            </section>
            
            <section className="bottom">
                <form className="d-flex justify-content-center">
                    <span className="text">Pesquisar</span>
                    <input id="search" type="text" className="new-repo-input" placeholder="Encontre um repositório..." name="repoUrl" />
                    <button className="new-repo-button">Pesquisar</button>
                </form>
            </section>
        </div>
    );
}

export default RepoComponent;
