import React from 'react';
import { useParams } from 'react-router-dom';
import './professionalResume.css';

export function ProfessionalResumeComponent(){
    const { id } = useParams();
    const resumeData = JSON.parse(decodeURIComponent(id));

    function handleDownloadPDF(){
       alert('Downloaded')
    }
    return(
        <>
        <div className='container-fluid border border-3' id='professionalResume'>
            <div className="m-2 p-2 row">
                <div className='col-10'>
                    <div className='row'>
                        <img className='col-2 mt-3' style={{borderRadius:'100px'}} src={resumeData.profile_pic} height={'50px'}></img>
                        <div className='col-10'>
                        <div>{resumeData.fullName}</div>
                        <div>{resumeData.Title}</div>
                        <div className='mt-2'>{resumeData.Address}</div>
                        <span>{resumeData.mailId}</span><span className='ms-2'>{resumeData.contactNo}</span>
                        
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h5>Profile</h5>
                        <div>{resumeData.summary}</div>
                    </div>
                    <div className='mt-2'>
                        <h5 className="pt-2">Employment History</h5>
                            {
                                resumeData.employment.map(emp =>
                                    <div key={emp.index}>
                                        <span >{emp.designation}, </span>
                                        <span >{emp.companyName}</span>
                                        <span> (from {emp.joiningDate} to {emp.endDate})</span>
                                        <div>{emp.role}</div>
                                    </div>
                                )
                            }
                    </div>                              
                    <div className='mt-2'>
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
                <div className='col-2'>
                    <h6 className="pt-2" >Skills</h6>
                        {
                            resumeData.skills.map(ski =>
                                <div key={ski.index}>
                                    <div style={{fontSize:'12px'}}>{ski.skill}</div>
                                    <progress className="container-fluid" max='5' value={ski.rating}></progress>
                                </div>
                            )
                        }
                </div>
            </div>
        </div>
        <button className='btn btn-primary' onClick={handleDownloadPDF}>Download PDF</button>
        </>
    )
}