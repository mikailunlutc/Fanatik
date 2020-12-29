import React, { Component } from 'react'
import MBIcon from '../images/bjk_dls17_3_yıldızlı_wid10_logo_2_copy_3.png';
import img from '../images/Rectangle.png';
import shadow from '../images/Rectangle (9).png';
class AllNews extends Component {
    render() {
        return (
            <div className='allNews'>
                <div className='CardWindowTitle'>
                    <div className='CardWindowlitter'>
                        <img className='CardWindowicon' src={MBIcon} alt='MBIcon'/>
                        <p>BEŞİKTAŞ</p>
                    </div>
                    <p className='allNewsHeaderIn-left'>Tüm Haberler</p>
                </div>
                <img className='shadow' src={shadow} alt='shadow'/>
                <img className='CardWindowImg' src={img} alt='phooto'/>
                <p className='CardWindowBottomText'>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            </div>
        )
    }
}
export default AllNews;