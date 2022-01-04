import React from "react";
import './reposearch.css';

export type GoalProps = { goal: string };
class RepoFormComponent extends React.Component<{ goal: string}> {

    constructor(props: GoalProps) {
        super(props)
    }

    render() {
        return(
            <form className="d-flex justify-content-center">
                <span className="text">{this.props.goal}</span>
                <input id="search" type="text" className="new-repo-input" placeholder="Encontre um repositório..." name="repoUrl"></input>
                <button className="new-repo-button">{this.props.goal}</button>
            </form>
        );
    }

}

export default RepoFormComponent;