import React ,{useEffect}from 'react'
import { Link ,useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    let location=useLocation();

    let history=useNavigate();

    useEffect(
        ()=>{
            console.log(location.pathname);
        },[location]
    );

    const logmeout=()=>{
        localStorage.removeItem('mytoken');
        history('/Login')
    }
    

    return (

        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">E-Classroom</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className={` nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" >Home</Link>
                        <Link to="/about" className={` nav-link ${location.pathname==='/about'?"active":""}`} >About</Link>

                    </div>
                </div>
                
                { localStorage.getItem('mytoken')  ? 
                
                <form className="d-flex" role="search">
                <button className='btn btn-primary '  onClick={logmeout}>Log out</button> 
                </form>
                :
                <form className="d-flex" role="search">
                    <Link className='btn btn-primary mx-1' to='/Signup' role="button">Sign up</Link>
                    <Link className='btn btn-primary mx-1' to='/Login' role="button" onClick={logmeout}>Log in</Link>
                    </form>
                }
                
            </div>
        </nav>

    )
}

export default Navbar
