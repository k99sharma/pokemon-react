import './OptionsBar.css';

function SearchBar(){
    return(
        <div className = 'searchBar'>
            <input type='text' placeholder = 'Search Pokemon' />
        </div>
    );
}

function Filter(){
    return(
        <div className = 'filter'>
            Filter
        </div>
    );
}

function OptionsBar(){
    return(
        <>
            <div className = ' my-2 flex items-center justify-center'>
                <div className = 'optionsBar flex items-center justify-center p-2 rounded-md'>
                    <SearchBar />
                    <Filter />
                </div>
            </div>
        </>
    );
}

export default OptionsBar;