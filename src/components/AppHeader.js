import '../styles/NavStyle.css'
import {Link} from  'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const AppHeader = ()=>{

    return(<>
        <div className="app-header">
            <div className="app-header-content">
                <div><LocationOnIcon style={{height:"16px"}} />Track Order</div>
                
                    <div className="login-logout-div">
                        <div><Link to="/login" style={{textDecoration:"none",color:"white"}}>LOG IN </Link></div>
                        <div>|</div>
                        <div><div><Link to="/signup" style={{textDecoration:"none",color:"white"}}>SIGN UP</Link></div>
                    </div>
            
                </div>
            </div>
        </div>
    </>)
}
export default AppHeader;