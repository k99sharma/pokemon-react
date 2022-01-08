function Spinner(){
    return(
        <div class="flex justify-center items-center">
            <div class="animate-spin" role="status">
                <img className = 'h-8 w-8' src = '/spinner.png' alt = 'spinner' />
            </div>
        </div>
    )
}

function LoadButton(props){
    return(
        <button onClick={ props.load } className = 'loadMoreButton bg-amber-400 hover:bg-amber-500 rounded-md p-3 text-white'>
            Load More
        </button>
    )
}

function LoadingButton(props){
    return(
        <>
            {props.loading ? <Spinner /> : <LoadButton load = {props.loadMore} />}
        </>       
    );
}

export  default LoadingButton;