import React from "react";
import RepoAddComponent from "../repo-add/RepoAddComponent";
import RepoListComponent from "../repo-list/RepoListComponent";
import RepoSearchComponent from "../repo-search/RepoSearchComponent";
import './repomain.css';

class RepoMainComponent extends React.Component {

    render() {
        return(
            <div className="container">
                <section className="main">
                    <RepoSearchComponent />
                    <RepoListComponent />
                </section>
                <section className="bottom">
                    <RepoAddComponent />
                </section>
            </div>
        );
    }
}

export default RepoMainComponent;