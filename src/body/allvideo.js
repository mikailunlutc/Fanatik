import React, { Component } from 'react'
import mbicon from '../images/Oval_Copy.png';
import shadow from '../images/Start.png';
import img from '../images/Rectangle (7).png'
import subPhoto from '../images/Rectangle (4).png';
import minShadow from '../images/Triangle.png';
import rightArrow from '../images/2-layers (3).png';
class Allvideo extends Component {
    render() {
        return (
            <div className='allvideo'>
                <div className='WritersHeader allvideo-title'>
                 <div className='WritersHeaderInLeft'>
                     <img className='WritersHeaderInLeftIcon' src={mbicon} alt='mbicon'/>
                     <p>FANATİK VIDEO</p>
                 </div>
                 <p className='WritersHeaderInRight allVideoHeader-Right'>Tüm Videolar</p>
                </div>
                <div>
                    <div className='allvideoSupplies'>
                    <div className='allvideoTime'><p>2:09</p></div>
                    <div className='allvideoStart'><img src={shadow} alt='shadow'/></div>
                    </div>
                    <img src={img} alt='img'/>
                    <p className='allvideoSubtitle'>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    <div className='allvideoSubvideos'>
                        <div className='allvideoSubvideo'>
                            <img src={subPhoto} alt='subPhoto'/>
                            <div className='subvideo-supplies'>
                                <div className='subvideo-time'><p>2:09</p></div>
                                <div className='subvideo-start'><img src={minShadow} alt='minShadow'/></div>
                            </div>
                            <p className='allvideoSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                        </div>
                        <div className='allvideoSubvideo'>
                            <img src={subPhoto} alt='subPhoto'/>
                            <div className='subvideo-supplies'>
                                <div className='subvideo-time'><p>2:09</p></div>
                                <div className='subvideo-start'><img src={minShadow} alt='minShadow'/></div>
                            </div>
                            <p className='allvideoSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                        </div>
                        <div className='allvideoSubvideo'>
                            <img src={subPhoto} alt='subPhoto'/>
                            <div className='subvideo-supplies'>
                                <div className='subvideo-time'><p>2:09</p></div>
                                <div className='subvideo-start'><img src={minShadow} alt='minShadow'/></div>
                            </div>
                            <p className='allvideoSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                        </div>
                        <div className='allvideoSubvideo'>
                            <img src={subPhoto} alt='subPhoto'/>
                            <div className='subvideo-supplies'>
                                <div className='subvideo-time'><p>2:09</p></div>
                                <div className='subvideo-start'><img src={minShadow} alt='minShadow'/></div>
                            </div>
                            <p className='allvideoSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                        </div>
                        <div className='allvideoSubvideo'>
                            <img src={subPhoto} alt='subPhoto'/>
                            <div className='subvideo-supplies'>
                                <div className='subvideo-time'><p>2:09</p></div>
                                <div className='subvideo-start'><img src={minShadow} alt='minShadow'/></div>
                            </div>
                            <p className='allvideoSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                        </div>
                        <div className='allvideoSubvideo'>
                            <img src={subPhoto} alt='subPhoto'/>
                            <div className='subvideo-supplies'>
                                <div className='subvideo-time'><p>2:09</p></div>
                                <div className='subvideo-start'><img src={minShadow} alt='minShadow'/></div>
                            </div>
                            <p className='allvideoSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                        </div>
                        <div className='allvideoSubvideo'>
                            <img src={subPhoto} alt='subPhoto'/>
                            <div className='subvideo-supplies'>
                                <div className='subvideo-time'><p>2:09</p></div>
                                <div className='subvideo-start'><img src={minShadow} alt='minShadow'/></div>
                            </div>
                            <p className='allvideoSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                        </div>
                        <div className='allvideoSubvideo'>
                            <img src={subPhoto} alt='subPhoto'/>
                            <div className='subvideo-supplies'>
                                <div className='subvideo-time'><p>2:09</p></div>
                                <div className='subvideo-start'><img src={minShadow} alt='minShadow'/></div>
                            </div>
                            <p className='allvideoSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                        </div>
                        <div className='allvideoSubvideo'>
                            <img src={subPhoto} alt='subPhoto'/>
                            <div className='subvideo-supplies'>
                                <div className='subvideo-time'><p>2:09</p></div>
                                <div className='subvideo-start'><img src={minShadow} alt='minShadow'/></div>
                            </div>
                            <p className='allvideoSubvideo-text'>Bayern Munich are said to be plotting ambitious moves to</p>
                        </div>
                        <div className='allvideoSubvideo-scrollBtn'><img  className='allvideoScrollImg' alt='RightArrow' src={rightArrow}/></div>
                    </div>
                </div>
                </div>
        )
    }
}
export default Allvideo;