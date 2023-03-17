import React, { useState, useEffect } from "react";
import { Card, CardBody, CardFooter, CardGroup, CardHeader, CardImg } from "reactstrap";
import vdatos from "../../Data/Datos";
import './DetalleComponent.css'

export const DetalleComponent = () => {
    const [datos, setDatos] = useState([]);
    const [filter, setFilter] = useState("all");

    const filteredData = filter === "all" ? datos : datos.filter((data) => data.categoria === filter);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
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
            <select className="form-select" name="filter" id="filter" value={filter} onChange={handleFilterChange}>
                <option value="all">Todo</option>
                <option value="Motor">Motor</option>
                <option value="Mesa">Mesa</option>
                <option value="Equipo">Equipo</option>
            </select>
        </div>

        <div className="container">
            <div className="row">
                {filteredData.map((e, i) => (
                    <div className='col-7 col-sm-4 col-md-4 col-lg-4 mb-4' key={i}>
                        <CardGroup>
                            <Card style={{ width: 'auto' }} className='mb-1'>
                                <CardImg src={e.imagen} className="rounded img-thumbnail" style={{ height: '150px', width: 'auto' }} />
                                <CardHeader>
                                    <div className="negrita">
                                        {e.titulo}
                                    </div>
                                </CardHeader>
                                <CardBody className="CardBody">
                                    <div>
                                        <p>{e.descripcion}</p>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div>
                                        <span className="negrita">Categoria: </span>{e.categoria}
                                    </div>
                                    <div>
                                        <span className="negrita">Equipo: </span><a href={e.hequipo} target="_blank">{e.equipo}</a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </CardGroup>
                    </div>
                ))}
            </div>
        </div>
    </>)
}


export default DetalleComponent;