import React,{useState} from 'react'
import '../style/projects.css'

function Projects() {
    const [arr, setarr] = useState([]);

  return (
    <div className="reviewImg">
            <div className="reviewCard">
                <div className='h1Box'>
                    <h1 className='h1'>REVIEWS</h1>
                    <div className="line"></div>
                </div>
                <div className="rDetail">
                    {
                        arr && arr?.map((ele, key) =>
                            <div className="rCard" key={key}>
                                <div className='rimage'>
                                    <img alt='' src={ele.user.profileImage} className='img' />
                                </div>
                                <div className='rheader'>
                                    <h3 className="rh3">Shreya Srivastava</h3>
                                </div>
                                <div className='rsummary'>
                                    <p className='para'>
                                        {ele.review}
                                    </p>
                                </div>
                                <div><h4>Plan Name : {ele.plan.name}</h4></div>
                                <div className='frate'>
                                    {Array.from(Array(ele.rating).keys()).map((ele, key) => <img alt='' src={Star} className='img' />)}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
  )
}

export default Projects
