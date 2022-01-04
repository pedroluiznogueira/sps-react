import React from "react";
import NavbarComponent from "../../../layout/navbar/Navbar";
import RepoAddComponent from "../repo-add/RepoAddComponent";
import RepoListComponent from "../repo-list/RepoListComponent";
import RepoFormComponent from "../repo-search/RepoFormComponent";
import './repomain.css';

type SomeType = {
    text: string;
}
class RepoMainComponent extends React.Component {

    state: any;

    constructor(props: any) {
        super(props);
        this.state = {
            text: ''
        }
    }
    
    public changeText() {
        this.setState({text: 'bar'})
    }

    render() {
        return(
            <div className="container">
                <section id="sec" onClick={this.changeText.bind(this)} className="main">
                    <RepoFormComponent goal={this.state.text} />
                    <RepoListComponent />
                </section>
                <section className="bottom">
                <RepoFormComponent goal={this.state.text}/>
                </section>
            </div>
        );
    }
}

export default RepoMainComponent;

function delta() {
    throw new Error("Function not implemented.");
}
