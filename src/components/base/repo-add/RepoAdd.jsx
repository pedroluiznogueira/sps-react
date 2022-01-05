import '../repo/Repo.css';

function RepoAdd() {
    return (
        <form className="d-flex justify-content-center">
            <span className="text">Pesquisar</span>
            <input id="search" type="text" className="new-repo-input" placeholder="Encontre um repositório..." name="repoUrl" />
            <button className="new-repo-button">Pesquisar</button>
        </form>
    )
}

export default RepoAdd;
