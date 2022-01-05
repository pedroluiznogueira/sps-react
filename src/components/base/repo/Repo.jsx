import React from "react";
import './Repo.css';
import RepoList from './../repo-list/RepoList';
import RepoAdd from "../repo-add/RepoAdd";
import RepoSearch from "../repo-search/RepoSearch";

function RepoComponent() {

    return(
        <div className="container">
            <section id="sec" className="main">
                <RepoSearch />
                <RepoList />
            </section>
            
            <section className="bottom">
                <RepoAdd />
            </section>
        </div>
    );
}

export default RepoComponent;
