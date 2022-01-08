function GoToTop(){
    function moveUp(){
        document.documentElement.scrollTop = 0;
    }

    return(
        <div onClick = {moveUp} style = {{ position: 'fixed', left: 10, bottom: 40, cursor: 'pointer'}}>
            <img width='80px' height='80px' src = '/upArrow.png' alt='up arrow' />
        </div>
    );
}

export default GoToTop;