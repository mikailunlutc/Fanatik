import React, { Component } from 'react'
import titleMb from '../images/bjk.png';
import img from '../images/Rectangle.png';
import Shadow from '../images/Rectangle (6).png';
class Agenda extends Component {
    render() {
        return (
            <div className='AgendaNews'>
                <div className='AgendaTop-Title'>
                    <div className='AgendaTop-TitleLeft'>
                        <img className='AgendaTop-TitleLeftImg' src={titleMb} alt='titleMb'/>
                        <p>ŞAMPİYONLAR LİGİ</p>
                    </div>
                    <p className='AgendaTop-TitleRight'>Tüm Ligler</p>
                </div>
                <div>
                    <img src={img} alt='FootballImg'/>
                    <div >
                        <p className='AgendaNewsframework-Title'>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                    <div className='AgendaNewsframework-show-All'>
                    <img src={Shadow} alt='Shadow'/>
                    <div className='AgendaNewsframework-show-Bottom'></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Agenda;