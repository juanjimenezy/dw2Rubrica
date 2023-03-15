import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import vdatos from "../Data/Datos";

const CreateComponent = () => {
    const [datos, setDatos] = useState([]);
    const [dato, setDato] = useState({ titulo: "", descripcion: "", categoria: "", equipo: "", imagen: "" });

    const handleChange = (e) => {
        setDato({ ...dato, [e.target.name]: e.target.value, });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        datos.push(dato);
        localStorage.setItem('vector', JSON.stringify(datos));

        setDato({ titulo: "", descripcion: "", categoria: "", equipo: "", imagen: "" });
    };

    useEffect(() => {
        let vectorGuardado = JSON.parse(localStorage.getItem('vector'));
        if (!vectorGuardado) {
            localStorage.setItem('vector', JSON.stringify(vdatos));
            vectorGuardado = JSON.parse(localStorage.getItem('vector'));
        }
        setDatos(vectorGuardado);
    }, []);

    return (<>

        <div className="container my-3">
            <Card style={{ width: 'auto' }} >
                <CardHeader className='bg-dark text-light'>
                    <div>
                        <h1>Create</h1>
                    </div>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit}>
                        <div className="form-gruoup mb-2">
                            <input name="titulo" type="text" className="form-control" placeholder="Titulo" value={dato.titulo} onChange={handleChange} required alt="Titulo"/>
                        </div>
                        <div className="form-gruoup mb-2">
                            <input name="descripcion" type="text" className="form-control" placeholder="Descripcion" value={dato.descripcion} onChange={handleChange} required />
                        </div>
                        <div className="form-gruoup mb-2">
                            <select className="form-select" name="categoria" id="filter" value={dato.categoria} onChange={handleChange} required>
                                <option value="" >Seleccionar Categoria</option>
                                <option value="Motor">Motor</option>
                                <option value="Mesa">Mesa</option>
                                <option value="Equipo">Equipo</option>
                            </select>
                        </div>
                        <div className="form-gruoup mb-2">
                            <input name="equipo" type="text" className="form-control" placeholder="Equipo" value={dato.equipo} onChange={handleChange} required />
                        </div>
                        <div className="form-gruoup mb-2">
                            <input name="imagen" type="text" className="form-control" placeholder="Imagen" value={dato.imagen} onChange={handleChange} required />
                        </div>
                        <button className="btn btn-dark" type="submit">Guardar</button>
                    </form>
                </CardBody>
            </Card>

        </div>
    </>);
}

export default CreateComponent;