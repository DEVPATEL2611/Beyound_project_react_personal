import '../styles/NavStyle.css'
import {Link} from  'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useContext } from 'react';
import { LoginContext } from "../helpers/LoginContext";
const AppHeader = ()=>{
    
    const {isLogin,setLoginState} = useContext(LoginContext);
    setLoginState(localStorage.getItem("loginState"))
    
    return(<>
        <div className="app-header">
            <div className="app-header-content">
                    <div><LocationOnIcon style={{height:"16px"}} />Track Order</div>
                
                    <div className="login-logout-div">
                        <div>
                            {isLogin && localStorage.getItem("token") ? (<button className='logout-btn' onClick={()=>{
                                setLoginState(false)
                                
                        }}>Logout</button>) : (<Link to="/login" style={{textDecoration:"none",color:"white"}}>
                                LOG IN
                            </Link>) }
                        </div>
                        
                        
                    </div>
            </div>
        </div>
    </>
    )
}
export default AppHeader;