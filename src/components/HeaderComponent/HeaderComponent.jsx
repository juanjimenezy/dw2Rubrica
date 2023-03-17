import React from 'react'
 import { Link } from 'react-router-dom' 

export const HeaderComponent = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <a className="navbar-brand" href="/#">Rubrica</a> */}
                <Link className='navbar-brand' to={"/"}>Rubrica</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            {/* <a className="nav-link" href="/content">Content </a> */}
                            <Link className='nav-link' to={"/content"}>Content</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/create">Create</a> */}
                            <Link className='nav-link' to={"/create"}>Create</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
