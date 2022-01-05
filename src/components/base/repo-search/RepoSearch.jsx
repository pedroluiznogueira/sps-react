import { useContext, useState } from 'react';
import RepoContext from '../../context/RepoContext';
import '../repo/Repo.css';

function RepoSearch() {
    const [text, setText] = useState('');
    const {findRepo} = useContext(RepoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        findRepo(text);
        
        setText('');
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <form 
        className="d-flex justify-content-center"
        onSubmit={handleSubmit}
        >
            <span className="text">Pesquisar</span>
            <input
                onChange={handleChange}
                id="search"
                className="new-repo-input" 
                placeholder="Encontre um repositório..."
                value={text} 
            />
            <button className="new-repo-button">Pesquisar</button>
        </form>
    )
}

export default RepoSearch;
