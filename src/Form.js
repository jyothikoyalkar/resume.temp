import { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import React from 'react';

export function FormComponent(){
    const param = useParams();
    const[simple,setSimple] = useState({display:'none'})
    const[modern,setModern] = useState({display:'none'})
    const[professional,setProfessional] = useState({display:'none'})
    const[creative,setCreative] = useState({display:'none'})
    const[profileImg,setProfileImg] = useState({display:'block'})
    useEffect(()=>{
        switch(param.id){
            case '1' :
                setProfileImg({display:'none'})
                setSimple({display:'block'})
                setModern({display:'none'})
                setCreative({display:'none'})
                setProfessional({display:'none'})
                console.log(param.id)
                break;
            case '2' :
                setSimple({display:'none'})
                setModern({display:'block'})
                setCreative({display:'none'})
                setProfessional({display:'none'})
                break;
            case '3' :
                setSimple({display:'none'})
                setModern({display:'none'})
                setCreative({display:'block'})
                setProfessional({display:'none'})
                break;
            case '4' :
                setSimple({display:'none'})
                setModern({display:'none'})
                setCreative({display:'none'})
                setProfessional({display:'block'})
                break;
        }
    },[param.id])
  
    
    const[details,setDetails] = useState({
        fullName:'',
        Title:'',
        mailId:'',
        contactNo:'',
        Address:'',
        Nationality:'',
        summary:'',
        profile_pic:'',
        education:[
            {index:1, collegeName:'', course:'', score:'', joiningDate:'', endDate:''},   
        ],
        employment:[
            {index:1, companyName:'', designation:'', joiningDate:'', endDate:'', role:''}  
        ],
        skills:[{index:1,skill:'',rating:''},

        ],
        languages:[{index:1,language:'',rating:''},

        ]
    });
    
    function AddSkill(){
        const newIndex = details.skills.length + 1;
        setDetails({
            ...details,
            skills: [
                ...details.skills,
                {
                    index: newIndex,
                    skill:''
                },
            ],
        });
    }
    function AddCompany(){
        const newIndex = details.employment.length + 1;
        setDetails({
          ...details,
          employment: [
            ...details.employment,
            {
              index: newIndex,
              companyName: '',
              designation: '',
              role: '',
            },
          ],
        });
    }
    function AddEducation() {
        const newIndex = details.education.length + 1;
        setDetails({
          ...details,
          education: [
            ...details.education,
            {
              index: newIndex,
              collegeName: '',
              course: '',
              YOP: '',
              score: '',
            },
          ],
        });
    }
    function AddLanguage(){
        const newIndex = details.languages.length + 1;
        setDetails({
            ...details,
            languages: [
              ...details.languages,
              {
                index: newIndex,
                language:''
              },
            ],
          });
    }
    function handleChange(event, index) {
        const { name, value } = event.target;
        if (index === undefined) {
          setDetails({
            ...details,
            [name]: value,
          });
        } else {
          const updatedEducation = [...details.education];
          updatedEducation[index] = {
            ...updatedEducation[index],
            [name]: value,
          };
          setDetails({
            ...details,
            education: updatedEducation,
          });
        }
    }
    function handleChangeEmployment(event, index){
        const { name, value } = event.target;
        const updatedEmployment = [...details.employment];
        updatedEmployment[index] = {
            ...updatedEmployment[index],
            [name]: value,
        };
        setDetails({
            ...details,
            employment: updatedEmployment,
        });
        
    }
    function handleChangeSkill(event, index){
        const { name, value} = event.target;
        const updatedskill = [...details.skills];
        updatedskill[index] = {
            ...updatedskill[index],
            [name]: value,
        };
        setDetails({
            ...details,
            skills: updatedskill,
          });
    }
    function handleChangeLanguage(event, index){
        const { name, value} = event.target;
        const updatedLanguage = [...details.languages];
        updatedLanguage[index] = {
            ...updatedLanguage[index],
            [name]: value,
        };
        setDetails({
            ...details,
            languages: updatedLanguage,
          });
    }
    function handleImageChange(event){
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
            // Set the image preview or do whatever you want with the image
            setDetails((prevDetails) => ({
                ...prevDetails,
                profile_pic: e.target.result,
            }));
            };

            reader.readAsDataURL(file);
        }
    }
    function detailsSharing(){
        console.log('clicked save')
        console.log(details)    
    }

    return(

        <div  className="container-fluid border p-4">
            <h4>Personal Details</h4>
                <input type="text" placeholder="Full Name" name='fullName' onChange={handleChange} value={details.fullName} className="form-control m-2 p-2"></input>
                <input type="text" placeholder="Tiltle" name='Title' onChange={handleChange} value={details.Title} className="form-control m-2 p-2"></input>
                <input type="email" placeholder="Mail ID" name='mailId' onChange={handleChange} value={details.mailId} className="form-control m-2 p-2"></input>
                <input type="number" placeholder="Contact No." name='contactNo' onChange={handleChange} value={details.contactNo} className="form-control m-2 p-2"></input>
                <input type="text" placeholder="Address" name='Address' onChange={handleChange} value={details.Address} className="form-control m-2 p-2 mb-4"></input>
                <input type="text" placeholder="Nationality" name='Nationality' onChange={handleChange} value={details.Nationality} className="form-control m-2 p-2 mb-4"></input>
                <div style={profileImg}><input type='file' accept="image/*" name='profile_pic' onChange={handleImageChange} className="form-control m-2 p-2 mb-4"></input></div>
            <h4>Professional Summary</h4>
            <textarea cols="120" rows="6" className="form-control m-2 p-2 mb-4" name='summary' value={details.summary} onChange={handleChange}></textarea>
            <h4>Educational Details</h4>
            {
                details.education.map((educationEntry,index)=>
                <div key={index}>
                    <input type="text" placeholder="College/University Name" name='collegeName' onChange={(e) => handleChange(e, index)} value={educationEntry.collegeName} className="form-control m-2 p-2"></input>
                    <input type="text" placeholder="Course" name='course' onChange={(e) => handleChange(e, index)} value={educationEntry.course} className="form-control m-2 p-2"></input>
                    <input type="text" placeholder="Percentage/GPA" name='score' onChange={(e) => handleChange(e, index)} value={educationEntry.score} className="form-control m-2 p-2 mb-4"></input>
                    <input type="number" placeholder='Start Year' name='joiningDate' onChange={(e) => handleChange(e, index)} value={educationEntry.joiningDate} className="form-control m-2 p-2 mb-4"></input>
                    <input type="number" placeholder='End Year' name='endDate' onChange={(e) => handleChange(e, index)} value={educationEntry.endDate} className="form-control m-2 p-2 mb-4"></input>
                </div>            
            )}
            <button className='btn btn-primary' onClick={AddEducation}> + Add</button>
            <h4>Employment History</h4>
            {
                details.employment.map((employmentEntry,index)=>
                    <div key={index}>
                        <input type="text" placeholder="Company Name" name="companyName" onChange={(e) => handleChangeEmployment(e, index)} value={employmentEntry.companyName} className="form-control m-2 p-2"></input>
                        <input type="text" placeholder="Designation" name="designation" onChange={(e) => handleChangeEmployment(e, index)} value={employmentEntry.designation} className="form-control m-2 p-2"></input>
                        <span>Select Joining Date</span><input type='month' name='joiningDate' onChange={(e) => handleChangeEmployment(e, index)} className="form-control m-2 p-2"></input>
                        <span>Select Relieving Date</span><input type='month' name='endDate' onChange={(e) => handleChangeEmployment(e, index)} className="form-control m-2 p-2"></input>
                        <textarea cols="120" rows="6"placeholder="About Role & Responsibilities" name="role" onChange={(e) => handleChangeEmployment(e, index)} value={employmentEntry.role} className="form-control m-2 p-2"></textarea>
                    </div>
                )
            }
            
            <button className='btn btn-primary' onClick={AddCompany}> + Add</button>
            <h4>Skills</h4>
            {
                details.skills.map((skillEntry,index) => 
                    <div key={index}>
                        <input type='text' name='skill' value={skillEntry.skill} placeholder='eg: MS-Office' onChange={(e) => handleChangeSkill(e, index)} className="form-control m-2 p-2"></input>
                        <input type="number" name='rating' placeholder='Rate Yourself out of 5' min="1" max="5" value={skillEntry.rating} onChange={(e) => handleChangeSkill(e, index)} className="form-control m-2 p-2"/>
                    </div>
                )
            }
            <button className='btn btn-primary' onClick={AddSkill}> + Add</button>
            <h4>Languages Known</h4>
            {
                details.languages.map((languageEntry,index)=>
                    <div key={index}>
                        <input type='text' name='language' placeholder='eg: English' value={languageEntry.language} onChange={(e) => handleChangeLanguage(e, index)} className="form-control m-2 p-2"></input>
                        <input type="number" name='rating' placeholder='Rate Yourself out of 5' min="1" max="5" value={languageEntry.rating} onChange={(e) => handleChangeLanguage(e, index)} className="form-control m-2 p-2"/> 
                    </div>
                )
            }

            <button className='btn btn-primary' onClick={AddLanguage}> + Add</button>
            <button  onClick={detailsSharing} className='btn btn-primary'>Save details</button>
            <div style={{float:'right'}}>
            <Link  style={simple} to={`/simpleResume/${encodeURIComponent(JSON.stringify(details))}`} className='btn btn-success'>Preview</Link>
            <Link style={creative} to={`/creativeResume/${encodeURIComponent(JSON.stringify(details))}`} className='btn btn-success'>Preview</Link>
            <Link style={modern} to={`/modernResume/${encodeURIComponent(JSON.stringify(details))}`} className='btn btn-success'>Preview</Link>
            <Link style={professional} to={`/professionalResume/${encodeURIComponent(JSON.stringify(details))}`} className='btn btn-success'>Preview</Link>
            </div>
        </div>
    )
}