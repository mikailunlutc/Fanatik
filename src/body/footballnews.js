import React, { Component } from 'react'
import img from '../images/Rectangle (8).png'
import MBlogo from '../images/Oval_Copy.png';
import Subphoto from '../images/Rectangle (4).png';
import rightArrow from '../images/2-layers (2).png';
class FootballNews extends Component {
    render() {
        return (
            <div className='allvideo'>
            <div className='WritersHeader allvideo-title'>
             <div className='WritersHeaderInLeft'>
                 <img className='WritersHeaderInLeftIcon' src={MBlogo} alt='MBlogo'/>
                 <p>FUTBOL HABERLER</p>
             </div>
             <p className='WritersHeaderInRight'>Tüm Haberler</p>
            </div>
            <div>
                <img src={img} alt='img'/>
                <p className='allvideoSubtitle footballnewsSubtitle'>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <div className='allvideoSubvideos FootballNewscard'>
                    <div className='allvideoSubvideo'>
                        <img src={Subphoto} alt='Subphoto'/>
                        <p className='allvideoSubvideo-text FootballNewsSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                    </div>
                    <div className='allvideoSubvideo'>
                        <img src={Subphoto} alt='Subphoto'/>
                        <p className='allvideoSubvideo-text FootballNewsSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                    </div>
                    <div className='allvideoSubvideo'>
                        <img src={Subphoto} alt='Subphoto'/>
                        <p className='allvideoSubvideo-text FootballNewsSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                    </div>
                    <div className='allvideoSubvideo'>
                        <img src={Subphoto} alt='Subphoto'/>
                        <p className='allvideoSubvideo-text FootballNewsSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                    </div>
                    <div className='allvideoSubvideo'>
                        <img src={Subphoto} alt='Subphoto'/>
                        <p className='allvideoSubvideo-text FootballNewsSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                    </div>
                    <div className='allvideoSubvideo'>
                        <img src={Subphoto} alt='Subphoto'/>
                        <p className='allvideoSubvideo-text FootballNewsSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                    </div>
                    <div className='allvideoSubvideo'>
                        <img src={Subphoto} alt='Subphoto'/>
                        <p className='allvideoSubvideo-text FootballNewsSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                    </div>
                    <div className='allvideoSubvideo'>
                        <img src={Subphoto} alt='Subphoto'/>
                        <p className='allvideoSubvideo-text FootballNewsSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                    </div>
                    <div className='allvideoSubvideo'>
                        <img src={Subphoto} alt='Subphoto'/>
                        <p className='allvideoSubvideo-text FootballNewsSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                    </div>
                    <div className='allvideoSubvideo'>
                        <img src={Subphoto} alt='Subphoto'/>
                        <p className='allvideoSubvideo-text FootballNewsSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                    </div>
                    <div className='allvideoSubvideo'>
                        <img src={Subphoto} alt='Subphoto'/>
                        <p className='allvideoSubvideo-text FootballNewsSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                    </div>
                    <div className='allvideoSubvideo-scrollBtn'><img className='allvideoScrollImg' src={rightArrow} alt='RightArrow'/></div>
                </div>
            </div>
        </div>
        )
    }
}
export default FootballNews;