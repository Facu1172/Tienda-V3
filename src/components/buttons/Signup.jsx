import React from 'react'

const Signup = () => {
    return (
        <div>
            
            <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span> Registrarse
            </button>

            
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-google me-2"></span> Ingresar con Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span> Ingresar con Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInput" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">Nunca compartiremos tus datos con nadie.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Avanzar</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5">Aceptar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
