import React from 'react'
import './FooterComponent.css'

export const FooterComponent = () => {
    return (<>
        <footer className="bg-dark text-center text-white footer">
            <div className="container p-1">
                <section className="mb-2">
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.google.com/" target="_blank" role="button">
                        <i className="bi bi-google"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/iJuanJimenez" target="_blank" role="button">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="http://instagram.com/ijuanjimenez19" target="_blank" role="button">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/ijuanjimenez19/" target="_blank" role="button">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/juanjimenezy" target="_blank" role="button">
                        <i className="bi bi-github"></i>
                    </a>
                </section>
            </div>
            <div>
                © 2023 Copyright: Juan Jimenez
            </div>
        </footer>
    </>
    )
}

export default FooterComponent;
