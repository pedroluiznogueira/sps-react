import { useContext, useState } from 'react';
import RepoContext from '../../context/RepoContext';
import '../repo/Repo.css';

function RepoForm( {show, holder} ) {

    const [text, setText] = useState('');
    const {addRepo, findRepo} = useContext(RepoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (show == 'Adicionar') {
            addRepo(text)
        } else {
            findRepo(text);
        }
        
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
            <span className="text">{show}</span>
            <input
                onChange={handleChange}
                id="search"
                className="new-repo-input" 
                placeholder={holder}
                value={text} 
            />
            <button className="new-repo-button">{show}</button>
        </form>
    )
}

export default RepoForm;
