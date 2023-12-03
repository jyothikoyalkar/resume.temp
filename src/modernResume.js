import React from 'react';
import { useParams } from 'react-router-dom';
import './modernResume.css'

export function ModernResumeComponent(){
    const { id } = useParams();
    const resumeData = JSON.parse(decodeURIComponent(id));

    function handleDownloadPDF(){
        alert('Downloaded')
     }
    return(
        <>
        <div id='modernResume' className='container-fluid border border-3'>
          <div className="container-fluid m-2 p-2">
            <div className='row mb-3'>
                <img className='col-2' height={'60px'} src={resumeData.profile_pic}></img>
                <div className='col-10'>
                    <h5>{resumeData.fullName}</h5>
                    <h6>{resumeData.Title}</h6>
                </div>
            </div>
            <div className="container-fluid row">
                <div className="col-9 ">
                    <div>
                        <h6>Profile</h6>
                        <div style={{fontSize:'12px'}}>{resumeData.summary}</div>
                    </div>
                    <div>
                        <h5  className="border-top border-3 pt-2">Employment History</h5>
                            {
                                resumeData.employment.map(emp =>
                                    <div key={emp.index}>
                                        <span >{emp.designation} at </span>
                                        <span >{emp.companyName}</span>
                                        <div>{emp.joiningDate} - {emp.endDate}</div>
                                        <div style={{fontSize:'12px'}}>{emp.role}</div>
                                    </div>
                                )
                            }
                    </div>
                    
                    <div>
                        <h5 className="border-top border-3 pt-2" >Educational Details</h5>
                        {
                            resumeData.education.map(edu =>
                                <div key={edu.index}>
                                    <span >{edu.course}, </span>
                                    <span >{edu.collegeName}</span>
                                    <div>{edu.joiningDate} - {edu.endDate}</div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="col-3 ">
                    <div style={{fontSize:'12px'}}>
                        <h6>Details</h6>
                        <div>{resumeData.Address}</div>
                        <div>{resumeData.contactNo}</div>
                        <a href='#' className="pb-2">{resumeData.mailId}</a>
                    </div>
                    <div >
                        <h6 className="border-top pt-2 border-3" >Skills</h6>
                        {
                            resumeData.skills.map(ski =>
                                <div key={ski.index}>
                                    <div style={{fontSize:'12px'}}>{ski.skill}</div>
                                    <progress className="container-fluid" max='5' value={ski.rating}></progress>
                                </div>
                            )
                        }
                    </div>
                    <div >
                        <h6 className="border-top border-3 pt-2" >Languages</h6>
                        {
                            resumeData.languages.map(lag =>
                                <div key={lag.index}>
                                    <div style={{fontSize:'12px'}}>{lag.language}</div>
                                    <progress className="container-fluid" max='5' value={lag.rating}></progress>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
          </div>
        </div>
        <button className='btn btn-primary' onClick={handleDownloadPDF}>Download PDF</button>
        </>
    )
}