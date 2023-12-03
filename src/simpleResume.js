import React from 'react';
import { useParams } from 'react-router-dom';
import './simpleResume.css'

export function SimpleResumeComponent(){
    const { id } = useParams();
    const resumeData = JSON.parse(decodeURIComponent(id));

    function handleDownloadPDF(){
        alert('Downloaded')
     }
    return(
        <>
        <div className='container-fluid border border-3' id="simpleResume">
          <div className="m-2 p-2">
            <h1 className="p-2">{resumeData.fullName}</h1>
            <h6 className="p-2 border-bottom border-3">{resumeData.Title}</h6>
            <div className="d-flex row border-3">
                <div className="col-4 border-end border-3 ">
                    <div >
                        <h5 className="pb-2" style={{textDecorationLine:'underline'}}>Details</h5>
                        <h6 >Address</h6>
                        <div className="pb-2">{resumeData.Address}</div>
                        <h6 >Phone No.</h6>
                        <div className="pb-2">{resumeData.contactNo}</div>
                        <h6>Email ID</h6>
                        <div className="pb-2">{resumeData.mailId}</div>
                        <h6>Nationality</h6>
                        <div>{resumeData.Nationality}</div>
                    </div>
                    <div >
                        <h5 className="border-top pt-2 border-3" style={{textDecorationLine:'underline'}}>Skills</h5>
                        {
                            resumeData.skills.map(ski =>
                                <div key={ski.index}>
                                    <div>{ski.skill}</div>
                                    <progress max='5' value={ski.rating}></progress>
                                </div>
                            )
                        }
                    </div>
                    <div >
                        <h5 className="border-top border-3 pt-2" style={{textDecorationLine:'underline'}}>Languages</h5>
                        {
                            resumeData.languages.map(lag =>
                                <div key={lag.index}>
                                    <div>{lag.language}</div>
                                    <progress max='5' value={lag.rating}></progress>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="col-8 ">
                    <div>
                        <h5  style={{textDecorationLine:'underline'}}>Profile</h5>
                        <div>{resumeData.summary}</div>
                    </div>
                    <div>
                        <h5 style={{textDecorationLine:'underline'}} className="border-top border-3 pt-2">Employment History</h5>
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
                    
                    <div>
                        <h5 className="border-top border-3 pt-2" style={{textDecorationLine:'underline'}}>Educational Details</h5>
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