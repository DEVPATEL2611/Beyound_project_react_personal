import '../styles/NavStyle.css'
import {Link} from  'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useEffect, useState } from 'react';
const AppHeader = ()=>{
    const [token,setToken] = useState(localStorage.getItem("login"));
    useEffect(()=>{
        if(localStorage.getItem("token")) setToken(true)
        else setToken(false)
    },[localStorage.key("token")])
    return(<>
        <div className="app-header">
            <div className="app-header-content">
                    <div><LocationOnIcon style={{height:"16px"}} />Track Order</div>
                
                    <div className="login-logout-div">
                        <div>
                            {token ? (<button className='logout-btn' onClick={()=>{
                                localStorage.removeItem("token")
                                setToken(false)
                                localStorage.setItem("login",false)
                        }}>Logout</button>) : (<Link to="/login" style={{textDecoration:"none",color:"white"}}>
                                LOG IN
                            </Link>) }
                        </div>
                        <div>
                            {
                                !token &&
                                <div>|
                                    <Link to="/signup" style={{textDecoration:"none",color:"white",marginLeft:"10px"}}>
                                        SIGN UP 
                                    </Link> 
                                </div>
                            }
                        </div>
                        
                    </div>
            </div>
        </div>
    </>
    )
}
export default AppHeader;