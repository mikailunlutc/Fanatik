import React, { Component } from 'react'
import logo from '../images/Oval_Copy.png';
import leftMB from '../images/takim_copy_3.png';
import rightMB from '../images/takim.png';
class CompletedMatches extends Component {
    render() {
        return (
            <div className='Writers CompletedMatches'>
                <div className='WritersHeader CompletedMatchesHeader'>
                 <div className='WritersHeaderInLeft'>
                     <img className='WritersHeaderInLeftIcon' src={logo} alt='logo'/>
                     <p>TAMAMLANAN MAÇ SKORLARI</p>
                 </div>
                 <p className='WritersHeaderInRight'>Tüm Skorlar</p>
                </div>
                <div className='matchscoreCards'>
                <div className='matchscoreCard'>
                    <div className='matchscoreCardIn CompletedMatchesCard-left'>
                        <img src={leftMB} alt='rightMB'/>
                        <p className='matchscoreCardInTextBtm'>Beşiktaş</p>
                    </div>
                    <div className='matchscoreCardIn matchscoreCardIn-Score'>
                        <p>Süper Lig</p>
                        <p className='matchscoreCardInTextBtm matchscoreCardInText CompletedMatchescardIn-subTxt'>0 : 0</p>
                    </div>
                    <div className='matchscoreCardIn'>
                        <img src={rightMB} alt='rightMB'/>
                        <p className='matchscoreCardInTextBtm'>Fenerbahçe</p>
                    </div>
                </div>
                <div className='matchscoreCard'>
                    <div className='matchscoreCardIn CompletedMatchesCard-left'>
                        <img src={leftMB} alt='rightMB'/>
                        <p className='matchscoreCardInTextBtm'>Beşiktaş</p>
                    </div>
                    <div className='matchscoreCardIn matchscoreCardIn-Score'>
                        <p>Süper Lig</p>
                        <p className='matchscoreCardInTextBtm matchscoreCardInText CompletedMatchescardIn-subTxt'>0 : 0</p>
                    </div>
                    <div className='matchscoreCardIn'>
                        <img src={rightMB} alt='rightMB'/>
                        <p className='matchscoreCardInTextBtm'>Fenerbahçe</p>
                    </div>
                </div> 
                <div className='matchscoreCard'>
                    <div className='matchscoreCardIn CompletedMatchesCard-left'>
                        <img src={leftMB} alt='rightMB'/>
                        <p className='matchscoreCardInTextBtm'>Beşiktaş</p>
                    </div>
                    <div className='matchscoreCardIn matchscoreCardIn-Score'>
                        <p>Süper Lig</p>
                        <p className='matchscoreCardInTextBtm matchscoreCardInText CompletedMatchescardIn-subTxt'>0 : 0</p>
                    </div>
                    <div className='matchscoreCardIn'>
                        <img src={rightMB} alt='rightMB'/>
                        <p className='matchscoreCardInTextBtm'>Fenerbahçe</p>
                    </div>
                </div> 
                <div className='matchscoreCard'>
                    <div className='matchscoreCardIn CompletedMatchesCard-left'>
                        <img src={leftMB} alt='rightMB'/>
                        <p className='matchscoreCardInTextBtm'>Beşiktaş</p>
                    </div>
                    <div className='matchscoreCardIn matchscoreCardIn-Score'>
                        <p>Süper Lig</p>
                        <p className='matchscoreCardInTextBtm matchscoreCardInText CompletedMatchescardIn-subTxt'>0 : 0</p>
                    </div>
                    <div className='matchscoreCardIn'>
                        <img src={rightMB} alt='rightMB'/>
                        <p className='matchscoreCardInTextBtm'>Fenerbahçe</p>
                    </div>
                </div> 
                <div className='matchscoreCard'>
                    <div className='matchscoreCardIn CompletedMatchesCard-left'>
                        <img src={leftMB} alt='rightMB'/>
                        <p className='matchscoreCardInTextBtm'>Beşiktaş</p>
                    </div>
                    <div className='matchscoreCardIn matchscoreCardIn-Score'>
                        <p>Süper Lig</p>
                        <p className='matchscoreCardInTextBtm matchscoreCardInText CompletedMatchescardIn-subTxt'>0 : 0</p>
                    </div>
                    <div className='matchscoreCardIn'>
                        <img src={rightMB} alt='rightMB'/>
                        <p className='matchscoreCardInTextBtm'>Fenerbahçe</p>
                    </div>
                </div> 
                <div className='matchscoreCard'>
                    <div className='matchscoreCardIn CompletedMatchesCard-left'>
                        <img src={leftMB} alt='rightMB'/>
                        <p className='matchscoreCardInTextBtm'>Beşiktaş</p>
                    </div>
                    <div className='matchscoreCardIn matchscoreCardIn-Score'>
                        <p>Süper Lig</p>
                        <p className='matchscoreCardInTextBtm matchscoreCardInText CompletedMatchescardIn-subTxt'>0 : 0</p>
                    </div>
                    <div className='matchscoreCardIn'>
                        <img src={rightMB} alt='rightMB'/>
                        <p className='matchscoreCardInTextBtm'>Fenerbahçe</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default CompletedMatches;