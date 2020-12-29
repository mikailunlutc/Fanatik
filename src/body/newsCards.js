import React, { Component } from 'react'
import mlt from '../images/tff02 (1).png';
import bottomImg from '../images/Rectangle (5).png';
class NewsCards extends Component {
    render() {
        return (
            <div className='AgendaNews newsCard'>
            <div className='AgendaTop-Title NewsCardsTop-Title'>
            <div className='AgendaTop-TitleLeft NewsCardsTop-TitleLeft'>
                <img className='AgendaTop-TitleLeftImg NewsCardsTop-TitleLeftImg' src={mlt} alt='titleMb'/>
                <p>TÜRKİYE SÜPER LİG</p>
            </div>
            <p className='AgendaTop-TitleRight NewsCardsTop-TitleRight'>Tüm Haberler</p>
        </div>
        <div className='leagueCartHeaderMiddeleCard'>
                    <img src={bottomImg} alt='img'/>
                    <div className='leagueCartMiddleTexts NewsCardsMiddleTexts'>
                        <p className='leagueCartMiddleText'>LIVE Transfer Talk: Bayern readying summer bids for Roberto Firmino..</p>
                        <p className='leagueCartMiddleSubText'>Bayern Munich are said to be plotting ambitious moves to snap up Liverpool forward Roberto Firmino and Manchester</p>
                    </div>
                </div>
        </div>
        )
    }
}
export default NewsCards;