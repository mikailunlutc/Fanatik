import React, { Component } from 'react'
import titleMb from '../images/bjk.png';
import frameWork from '../images/Rectangle.png';
import showe from '../images/Rectangle (6).png';
class AllnewsCard extends Component {
    render() {
        return (
            <div className='AgendaNews'>
            <div className='AgendaTop-Title'>
                <div className='AgendaTop-TitleLeft'>
                    <img className='AgendaTop-TitleLeftImg' src={titleMb} alt='titleMb'/>
                    <p>BEŞİKTAŞ</p>
                </div>
                <p className='AgendaTop-TitleRight'>Tüm Haberler</p>
            </div>
            <div>
                <img src={frameWork} alt='img'/>
                <div >
                    <p className='AgendaNewsframework-Title'>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </div>
                <div className='AgendaNewsframework-show-All'>
                <img src={showe} alt='showe'/>
                <div className='AgendaNewsframework-show-Bottom'></div>
                </div>
            </div>
        </div>
        )
    }
}
export default AllnewsCard;