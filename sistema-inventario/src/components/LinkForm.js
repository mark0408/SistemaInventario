import React from 'react';


const LinkForm = () =>{
    return(
    <form className="card card-body">
        <div className="form-group input-group">
            <div className="input-group-text bg-light">
                <i class="material-icons">insert_link</i>
            </div>
        <input type="text" className="form-control" placeholder="tipea una direccion" name="url"></input>
        </div>

    </form>
    
    )
}

export default LinkForm