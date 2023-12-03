import { Link } from "react-router-dom";
import { useState } from "react";
import './main.css'
export function MainComponent(){
    const[displaySimple,setDisplaySimple] = useState({display:'block'})
    const[displayModern,setDisplayModern] = useState({display:'block'})
    const[displayCreative,setDisplayCreative] = useState({display:'block'})
    const[displayProfessional,setDisplayProfessional] = useState({display:'block'})
    const[style,setStyle] = useState({})
    function handleClick(e){
        const buttonName = e.currentTarget.getAttribute('data-name')
        console.log(buttonName)
        switch(buttonName){
            case 'ALL' :
            setDisplaySimple({display:'block'})
            setDisplayModern({display:'block'})
            setDisplayCreative({display:'block'})
            setDisplayProfessional({display:'block'})
            setStyle({width: '850px'})
            break;
            case 'SIMPLE' :
            setDisplayModern({display:'none'})
            setDisplayCreative({display:'none'})
            setDisplayProfessional({display:'none'})
            setDisplaySimple({display:'block'})
            setStyle({width:'440px',marginLeft:'500px'})
            break;
            case 'MODERN' :
            setDisplaySimple({display:'none'})
            setDisplayCreative({display:'none'})
            setDisplayProfessional({display:'none'})
            setDisplayModern({display:'block'})
            setStyle({width:'440px',marginLeft:'500px'})
            break;
            case 'CREATIVE' :
            setDisplayModern({display:'none'})
            setDisplaySimple({display:'none'})
            setDisplayProfessional({display:'none'})
            setDisplayCreative({display:'block'})
            setStyle({width:'440px',marginLeft:'500px'})
            break;
            case 'PROFESSIONAL' :
            setDisplayModern({display:'none'})
            setDisplayCreative({display:'none'})
            setDisplaySimple({display:'none'})
            setDisplayProfessional({display:'block'})
            setStyle({width:'440px',marginLeft:'500px'})
            break;
        }
    }
    return(
        <div className="container-fluid">
            <div style={{textAlign:'center'}}>
                <h1>Job-winning resume templates</h1>
                <p>Each resume template is expertly designed and follows the exact “resume rules” hiring managers look for. Stand out and get hired faster with field-tested resume templates.</p>
                <Link to={'/form/' + 1} ><span className="btn btn-primary">Create My Resume</span></Link>
            </div>               
                    
            <ul className="nav nav-pills" style={{marginLeft:'430px',marginTop:'40px',fontWeight:'bold'}}>
                <li  className="nav-item" data-name='ALL' onClick={handleClick}><a href="#" className="nav-link"><span className="bi bi-files"></span> All templates</a></li>
                <li  className="nav-item" data-name='SIMPLE' onClick={handleClick}><a href="#" className="nav-link"><span className="bi bi-stars"></span> Simple</a></li>
                <li  className="nav-item" data-name='MODERN' onClick={handleClick}><a href="#" className="nav-link"><span className="bi bi-suit-club-fill"></span> Modern</a></li>
                <li  className="nav-item" data-name='PROFESSIONAL' onClick={handleClick}><a href="#" className="nav-link"><span className="bi bi-card-text"></span> Professional</a></li>
                <li  className="nav-item" data-name='CREATIVE' onClick={handleClick}><a href="#" className="nav-link"><span className="bi bi-suit-diamond-fill"></span> Creative</a></li>
            </ul>

            <div className="border d-flex flex-wrap" id='mainContainer' style={style}>
                <div>
                    <img className="mt-2 ms-2" style={displaySimple} height={'650px'} width={'400px'} src='modern_template_img.png'></img>
                    <Link style={displaySimple} id='linkOne' to={'/form/' + 1}  className="btn btn-primary">Select Template</Link>
                </div>
                <div>
                    <img className="mt-2 ms-2" style={displayModern} height={'650px'} width={'400px'} src='professional_template_img.png'></img>
                    <Link style={displayModern} id='linkTwo' to={'/form/' + 2}  className="btn btn-primary">Select Template</Link>
                </div>
                <div>
                    <img className="ms-2 mt-2 " style={displayProfessional}  height={'650px'} width={'400px'} src='simple_template_img.png'></img>
                    <Link style={displayProfessional} id='linkFour' to={'/form/' + 4}  className="btn btn-primary">Select Template</Link>
                </div>
                <div>
                    <img className="mt-2 ms-2" style={displayCreative} height={'650px'} width={'400px'} src='creative_template_img.png'></img>
                    <Link style={displayCreative} id='linkThree' to={'/form/' + 3}  className="btn btn-primary">Select Template</Link>
                </div>
            </div>
        </div>
    )
}