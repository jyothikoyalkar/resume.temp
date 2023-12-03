import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import { MainComponent } from "./main";
import { FormComponent } from "./Form";
import { SimpleResumeComponent } from "./simpleResume";
import { ModernResumeComponent } from "./modernResume";
import {ProfessionalResumeComponent} from './professionalResume';
import {CreativeResumeComponent} from './creativeResume'
import{FAQ_Component} from './FAQ/FAQ';
import {BlogComponent} from './blog/blog'
export function Home(){
    
    return(
        <div>
        <BrowserRouter>
            <div className="container-fluid">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span className="fs-4"><img height={'70px'} src='logo.png'></img></span>
                    </a>

                    <ul className="nav nav-pills">
                        <Link style={{textDecoration:'none'}} to='/main'><li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li></Link>
                        <Link style={{textDecoration:'none'}} to='/blog'><li className="nav-item"><a href="#" className="nav-link">Blog</a></li></Link>
                        <Link style={{textDecoration:'none'}} to={'/form/' + 1}><li className="nav-item"><a href="#" className="nav-link">Resume</a></li></Link>
                        
                    </ul>
                </header>
                
            </div>
            <Routes>
                <Route path='/' element={<MainComponent/>}/>
                <Route path='main' element={<MainComponent/>}></Route>
                <Route path='faq' element={<FAQ_Component/>}></Route>
                <Route path='blog' element={<BlogComponent/>}></Route>
                <Route path='simpleResume/:id' element={<SimpleResumeComponent/>}/>
                <Route path='modernResume/:id' element={<ModernResumeComponent/>}/>
                <Route path='creativeResume/:id' element={<CreativeResumeComponent/>}/>
                <Route path='professionalResume/:id' element={<ProfessionalResumeComponent/>}/>
                <Route path='form/:id' element={<FormComponent/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    )
}
export default Home