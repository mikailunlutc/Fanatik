import React, { Component } from 'react';
import HeaderIcon from '../images/tff02.png'
import leftMb from '../images/bjk_dls17_3_yıldızlı_wid10_logo_2_copy_3.png';
import block from '../images/Rectangle (1).png';
import rightMb from '../images/fenerbahce-spor-kulubu-logo-transparan-vektor-png_copy.png';
import img from '../images/Rectangle (2).png';

class NewsDeatilCard extends Component {
    render() {
        return (
            <div className='NewsDeatilCard'>
                <div className='leagueCartHeaderTitle'>
                    <img className='leagueCartHeader-Icon' alt='Mb' src={HeaderIcon}/>
                    <p>TÜRKİYE SÜPER LİG</p>
                </div>
                <div className='leagueCartHeaderScore'>
                    <div className='leagueCartHeaderScoreIn'>
                        <p>BEŞİKTAŞ</p>
                        <img className='leagueCartHeaderScore-lfIcon' src={leftMb} alt='LeftMb'/>
                    </div>
                    <div className='leagueCartHeaderScoreIn leagueCartHeaderScoreMiddle'>
                        <p>2</p>
                        <img className='leagueCartHeaderScore-midIcon' alt='block' src={block}/>
                        <p>0</p>
                    </div>
                    <div className='leagueCartHeaderScoreIn'>
                        <img className='leagueCartHeaderScore-rgIcon' src={rightMb} alt='RightMb'/>
                        <p>FENERBAHÇE</p>
                    </div>
                </div>
                <div className='leagueCartHeaderMiddeleCard'>
                    <img src={img} alt='img'/>
                    <div className='leagueCartMiddleTexts'>
                        <p className='leagueCartMiddleText'>LIVE Transfer Talk: Bayern readying summer bids for Roberto Firmino..</p>
                        <p className='leagueCartMiddleSubText'>Bayern Munich are said to be plotting ambitious moves to snap up Liverpool forward Roberto Firmino and Manchester</p>
                    </div>
                </div>
                <div className='chooseArea'>
                    <div className='chooseAreaClick'>
                        <p>Özet</p>
                    </div>
                    <div className='chooseAreaClick'>
                        <p>Detay</p>
                    </div>
                    <div className='chooseAreaClick'>
                        <p>İstatistik</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsDeatilCard;