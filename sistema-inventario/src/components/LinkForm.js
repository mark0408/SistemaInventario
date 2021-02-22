import React,{useState} from 'react';


const LinkForm = (props) =>{

    const initialStateValies={
        url: '',
        name: '',
        description: ''
    };

    const [values, SetValues]= useState(initialStateValies);

    const handleInputChange = e =>{
        const {name, value} =e.target
        SetValues({...values, [name]:value})
    }

    const  handleSubmit= e =>{
        e.preventDefault()
        console.log(values);
        props.addOrEdit(values)
        SetValues({...initialStateValies})
    }


    return(
    <form className="card card-body" onSubmit={handleSubmit}>
        <div className="form-group input-group">
            <div className="input-group-text bg-light">
                <i className="material-icons">insert_link</i>
            </div>
        <input type="text" className="form-control" placeholder="tipea una direccion" name="url" onChange={handleInputChange} value={values.url}></input>
        </div>

        <div className="form-group input-group">
            <div className="input-group-text bg-light">
                <i className="material-icons">create</i>
            </div>
        <input type="text" className="form-control" placeholder="Nombre de pagina" name="name" onChange={handleInputChange} value={values.name}></input>
        </div>

        <div className="form-group">
            <textarea name="description" rows="3" className="form-control" placeholder="escribe una descripcion" onChange={handleInputChange} value={values.description}>

            </textarea>
        </div>

        <button className="btn btn-primary btn-block">
            Save
        </button>
    </form>
    
    )
}

export default LinkForm