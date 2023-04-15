import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import TopbarContext from '../Context/TopbarContext'

function Userdetail() {

    let Context = useContext(AuthContext)
    let TbContext = useContext(TopbarContext)

  return (
    <div className='userdetail'>
        <div className='personaldetail'>
            <h1>Personal Details</h1>
            <div className='detailcontainer'>
                <div className='column'>
                    <div className='userpic'></div>
                </div>
                <div className='column'>
                    <div>
                    <label>FULL NAME</label>
                    <p>{Context.StaffDetail.Name}</p>
                    </div>
                    <div>
                    <label>DESTINATION</label>
                    <p>{Context.StaffDetail.Designation}</p>
                    </div>
                    <div>
                    <label>DEPARTMENT</label>
                    <p>{Context.StaffDetail.Dept}</p>
                    </div>
                    <div>
                    <label>WORKING STATUS</label>
                    <p>{Context.StaffDetail.Workingstatus}</p>
                    </div>
                </div>
                <div className='column'>
                    <div>
                    <label>DOMAIN MAIL</label>
                    <p>{Context.StaffDetail.DomainMail}</p>
                    </div>
                    <div>
                    <label>EMAIL</label>
                    <p>{Context.StaffDetail.Email}</p>
                    </div>
                    <div>
                    <label>PHONE NUMBER</label>
                    <p>{Context.StaffDetail.Phno}</p>
                    </div>
                    <div>
                    <label>ADDRESS</label>
                    <p>{Context.StaffDetail.Address}</p>
                    </div>
                </div>
                <div className='column'>
                    <div>
                    <label>JONING DATE</label>
                    <p>{Context.StaffDetail.DOJ}</p>
                    </div>
                    <div>
                    <label>DATE OF BIRTH</label>
                    <p>{Context.StaffDetail.DOB}</p>
                    </div>
                    <div>
                    <label>GENDER</label>
                    <p>{Context.StaffDetail.Gender}</p>
                    </div>
                    <div>
                    <label>MOTHER TONGUE</label>
                    <p>{Context.StaffDetail.MotherTongue}</p>
                    </div>
                </div>
                <div className='column'>
                    <div>
                    <label>NATIONALITY</label>
                    <p>{Context.StaffDetail.Nationality}</p>
                    </div>
                    <div>
                    <label>RELIGION</label>
                    <p>{Context.StaffDetail.Religion}</p>
                    </div>
                    <div>
                    <label>COMMUNITY</label>
                    <p>{Context.StaffDetail.Community}</p>
                    </div>
                    <div>
                    <label>CASTE</label>
                    <p>{Context.StaffDetail.Caste}</p>
                    </div>
                </div>
                <div className='column'>
                    <div>
                    <label>AADHAR NUMBER</label>
                    <p>{Context.StaffDetail.Aadhar}</p>
                    </div>
                    <div>
                    <label>PAN NUMBER</label>
                    <p>{Context.StaffDetail.PANno}</p>
                    </div>
                    <div>
                    <label>BLOOD GROUP</label>
                    <p>{Context.StaffDetail.BloodGroup}</p>
                    </div>
                </div>
            </div>
            <h1>Qualification</h1>
            <div className='qualificationcontainer'>
                {
                    Context.stafflist(Context.StaffDetail).Qualification?.map((qual, index)=>{
                        return <div className='qualifications' key={index}>
                        <div className='field'>
                        <label> S.NO</label>
                        <p >{index}</p>
                        </div>
                        <div className='field'>
                        <label>DEGREEE</label>
                        <p>{qual.Degree}</p>
                        </div>
                        <div className='field'>
                        <label>SPECIALIZATION</label>
                        <p>{qual.Specialization}</p>
                        </div>
                        <div className='field'>
                        <label>CGPA PERCENTAGE</label>
                        <p>{qual.CGPAPercentage}%</p>
                        </div>
                        <div className='field'>
                        <label>YEAR OF PASS</label>
                        <p>{qual.Yearofpass}</p>
                        </div>
                        <div className='field'>
                        <label>INSTITUTE</label>
                        <p>{qual.Institute}</p>
                        </div>
                        <div className='field'>
                        <label>UNIVERSITY</label>
                        <p>{qual.UniversityName}</p>
                        </div>
                        </div>
                    })
                }
            </div>
            <h1>Previous Experiences</h1>
            <div className='PEDcontainer'>
                {
                    Context.stafflist(Context.StaffDetail).PreviousExperienceDetails?.map((exep, index)=>{
                        return <div className='experience' key={index}>
                        <div className='field'>
                        <label> S.NO</label>
                        <p >{index}</p>
                        </div>
                        <div className='field'>
                        <label>DESIGNATION</label>
                        <p>{exep.Designation}</p>
                        </div>
                        <div className='field'>
                        <label>EXPERIENCE TYPE</label>
                        <p>{exep.ExperienceType}</p>
                        </div>
                        <div className='field'>
                        <label>FROM DATE</label>
                        <p>{exep.FromDate}</p>
                        </div>
                        <div className='field'>
                        <label>TO DATE</label>
                        <p>{exep.ToDate}</p>
                        </div>
                        <div className='field'>
                        <label>ORGANIZATION</label>
                        <p>{exep.Organization}</p>
                        </div>
                        </div>
                    })
                }
            {/* {
                Context.stafflist(Context.StaffDetail).map((qual, index)=>{
                    return <div className='experience'>
                        <div className='field'>
                        <label> S.NO</label>
                        <p key={index}>{index}</p>
                        </div>
                        <div className='field'>
                        <label>DEGREEE</label>
                        <p>{qual.Degree}</p>
                        </div>
                        <div className='field'>
                        <label>SPECIALIZATION</label>
                        <p>{qual.Specialization}</p>
                        </div>
                        <div className='field'>
                        <label>CGPA PERCENTAGE</label>
                        <p>{qual.CGPAPercentage}</p>
                        </div>
                        <div className='field'>
                        <label>YEAR OF PASS</label>
                        <p>{qual.Yearofpass}</p>
                        </div>
                        <div className='field'>
                        <label>INSTITUTE</label>
                        <p>{qual.Institute}</p>
                        </div>
                        <div className='field'>
                        <label>UNIVERSITY</label>
                        <p>{qual.UniversityName}</p>
                        </div>
                        </div>
                })
            } */}
            </div>
        </div>
    </div>
  )
}

export default Userdetail