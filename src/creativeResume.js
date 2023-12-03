import React from 'react';
import { useParams } from 'react-router-dom';
import './creativeResume.css';


export function CreativeResumeComponent(){
    const { id } = useParams();
    const resumeData = JSON.parse(decodeURIComponent(id));
    function handleDownloadPDF(){
        alert('Downloaded')
    }
    return(
        <>
        <div id='creativeResume'  className='container-fluid border border-3'>
          <div className="container-fluid m-2 p-2">
            <div style={{backgroundColor:'rgb(173,216,230)',marginRight:'5px'}} className='border border-1 row'>
                <div style={{margin:'0px',padding:'0px'}} className='col-4'><img src={resumeData.profile_pic} height={'140px'} width={'130px'}></img></div>
                <div className='col p-2'>
                    <div className='col-8'>
                        <h3>{resumeData.fullName}</h3>
                        <h5>{resumeData.Title}</h5>
                    </div>
                    <div className='mt-2'>{resumeData.Address}</div>
                    <span className='pb-2 pe-3'>{resumeData.contactNo}</span>
                    <span className='pb-2'>{resumeData.mailId }</span>
                </div>
            </div>
            <div className="container-fluid row">
                <div className="col-4">
                    <div>
                        <h5 className="pt-2">Skills</h5>
                        {
                            resumeData.skills.map(ski =>
                                <div key={ski.index}>
                                    <div>{ski.skill}</div>
                                    <progress className='container-fluid' max='5' value={ski.rating}></progress>
                                </div>
                            )
                        }
                    </div>
                    <div >
                        <h5 className="pt-2">Languages</h5>
                        {
                            resumeData.languages.map(lag =>
                                <div key={lag.index}>
                                    <div>{lag.language}</div>
                                    <progress className='container-fluid' max='5' value={lag.rating}></progress>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="col-8 ">
                    <div className='mt-2'>
                        <h5>Profile</h5>
                        <div>{resumeData.summary}</div>
                    </div>
                    <div>
                        <h5 className="pt-2">Employment History</h5>
                            {
                                resumeData.employment.map(emp =>
                                    <div key={emp.index}>
                                        <span >{emp.designation}, </span>
                                        <span >{emp.companyName}</span>
                                        <div> from {emp.joiningDate} to {emp.endDate}</div>
                                        <div>{emp.role}</div>
                                    </div>
                                )
                            }
                    </div>                  
                    <div>
                        <h5 className="pt-2">Educational Details</h5>
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
            </div>
          </div>
        </div>
        <button className='btn btn-primary' onClick={handleDownloadPDF}>Download PDF</button>
        </>
    )
}