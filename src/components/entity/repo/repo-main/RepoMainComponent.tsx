import React from "react";
import NavbarComponent from "../../../layout/navbar/Navbar";
import RepoAddComponent from "../repo-add/RepoAddComponent";
import RepoListComponent from "../repo-list/RepoListComponent";
import RepoFormComponent from "../repo-search/RepoFormComponent";
import './repomain.css';

class RepoMainComponent extends React.Component {

    render() {
        return(
            <div className="container">
                <section className="main">
                    <RepoFormComponent goal={'Pesquisar'} />
                    <RepoListComponent />
                </section>
                <section className="bottom">
                <RepoFormComponent goal={'Adicionar'}/>
                </section>
            </div>
        );
    }
}

export default RepoMainComponent;