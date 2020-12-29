import React, { Component } from 'react'
import bottomArrow from '../images/bottomArrow.png';
import leftArrow from '../images/leftArrow.png';
import rightArrow from '../images/rightArrow.png';
import MBTop from '../images/fenerbahceMB.png';
import MBBottom from '../images/trabzonMB.png';
import MBLogo from '../images/misliMB.png';

class SwipeableCards extends Component {
    render() {
        return (
            <div className='SwipeableCards'>
            <div className='uefaDropDown'>
                <p>UEFA Şampiyonlar Ligi</p>
                <img src={bottomArrow} alt='bottomArrow'/>
            </div>
            <div className='euLigCards'>
                <div className='leftScroll'>
                    <img src={leftArrow} alt='leftArrow'/>
                </div>
                <div className='euCards'>
                <div className='euCard'>
                    <div className='euLigCardInLeft'>
                  <div className='euCardTopText'>
                      <p>10.10.2019</p>
                      <p>UEFA ŞL</p>
                  </div>
                  <div className='euCardBottomText'>
                   <div className='euCardbottomMb'>
                       <img src={MBTop} alt='MBTop'/>
                       <img src={MBBottom} alt='MBBottom'/>
                   </div>
                   <div className='euCardbottom-lgName'>
                       <p>FB</p>
                       <p>TS</p>
                   </div>
                   <div className='euCardbottom-lgSk'>
                       <p>0</p>
                       <p>0</p>
                   </div>
                   <p className='euCardbottom-lgDk'>10.dk</p>
                  </div>
                    </div>
                    <div className='euLigCardInRight'>
                        <div className='euLigCardInRightTitle'>
                            <p>1: 1.9</p>
                            <p>X: 3.36</p>
                            <p>2: 1.3</p>
                        </div>
                        <img src={MBLogo} alt='MBLogo'/>
                    </div>
                </div>
                <div className='euCard'>
                    <div className='euLigCardInLeft'>
                  <div className='euCardTopText'>
                      <p>10.10.2019</p>
                      <p>UEFA ŞL</p>
                  </div>
                  <div className='euCardBottomText'>
                   <div className='euCardbottomMb'>
                       <img src={MBTop} alt='MBTop'/>
                       <img src={MBBottom} alt='MBBottom'/>
                   </div>
                   <div className='euCardbottom-lgName'>
                       <p>FB</p>
                       <p>TS</p>
                   </div>
                   <div className='euCardbottom-lgSk'>
                       <p>0</p>
                       <p>0</p>
                   </div>
                   <p className='euCardbottom-lgDk'>10.dk</p>
                  </div>
                    </div>
                    <div className='euLigCardInRight'>
                        <div className='euLigCardInRightTitle'>
                            <p>1: 1.9</p>
                            <p>X: 3.36</p>
                            <p>2: 1.3</p>
                        </div>
                        <img src={MBLogo} alt='MBLogo'/>
                    </div>
                </div>
                <div className='euCard'>
                    <div className='euLigCardInLeft'>
                  <div className='euCardTopText'>
                      <p>10.10.2019</p>
                      <p>UEFA ŞL</p>
                  </div>
                  <div className='euCardBottomText'>
                   <div className='euCardbottomMb'>
                       <img src={MBTop} alt='MBTop'/>
                       <img src={MBBottom} alt='MBBottom'/>
                   </div>
                   <div className='euCardbottom-lgName'>
                       <p>FB</p>
                       <p>TS</p>
                   </div>
                   <div className='euCardbottom-lgSk euCardbottom-lg-turquoise euCardbottom-lg-2'>
                       <p>18</p>
                       <p className='euCardbottom-lgSk-mid'>:</p>
                       <p>45</p>
                   </div>
                   <p className='euCardbottom-lgDk euCardbottom-lg-turquoise'>Bugün</p>
                  </div>
                    </div>
                    <div className='euLigCardInRight'>
                        <div className='euLigCardInRightTitle'>
                            <p>1: 1.9</p>
                            <p>X: 3.36</p>
                            <p>2: 1.3</p>
                        </div>
                        <img src={MBLogo} alt='MBLogo'/>
                    </div>
                </div>
                <div className='euCard'>
                    <div className='euLigCardInLeft'>
                  <div className='euCardTopText'>
                      <p>10.10.2019</p>
                      <p>UEFA ŞL</p>
                  </div>
                  <div className='euCardBottomText'>
                   <div className='euCardbottomMb'>
                       <img src={MBTop} alt='MBTop'/>
                       <img src={MBBottom} alt='MBBottom'/>
                   </div>
                   <div className='euCardbottom-lgName'>
                       <p>FB</p>
                       <p>TS</p>
                   </div>
                   <div className='euCardbottom-lgSk euCardbottom-lg-black'>
                       <p>0</p>
                       <p>0</p>
                   </div>
                   <p className='euCardbottom-lgDk euCardbottom-lg-black'>MS</p>
                  </div>
                    </div>
                    <div className='euLigCardInRight'>
                        <div className='euLigCardInRightTitle'>
                            <p>1: 1.9</p>
                            <p>X: 3.36</p>
                            <p>2: 1.3</p>
                        </div>
                        <img src={MBLogo} alt='MBLogo'/>
                    </div>
                </div>
                <div className='euCard'>
                    <div className='euLigCardInLeft'>
                  <div className='euCardTopText'>
                      <p>10.10.2019</p>
                      <p>UEFA ŞL</p>
                  </div>
                  <div className='euCardBottomText'>
                   <div className='euCardbottomMb'>
                       <img src={MBTop} alt='MBTop'/>
                       <img src={MBBottom} alt='MBBottom'/>
                   </div>
                   <div className='euCardbottom-lgName'>
                       <p>FB</p>
                       <p>TS</p>
                   </div>
                   <div className='euCardbottom-lgSk'>
                       <p>0</p>
                       <p>0</p>
                   </div>
                   <p className='euCardbottom-lgDk'>10.dk</p>
                  </div>
                    </div>
                    <div className='euLigCardInRight'>
                        <div className='euLigCardInRightTitle'>
                            <p>1: 1.9</p>
                            <p>X: 3.36</p>
                            <p>2: 1.3</p>
                        </div>
                        <img src={MBLogo} alt='MBLogo'/>
                    </div>
                </div>
                <div className='euCard'>
                    <div className='euLigCardInLeft'>
                  <div className='euCardTopText'>
                      <p>10.10.2019</p>
                      <p>UEFA ŞL</p>
                  </div>
                  <div className='euCardBottomText'>
                   <div className='euCardbottomMb'>
                       <img src={MBTop} alt='MBTop'/>
                       <img src={MBBottom} alt='MBBottom'/>
                   </div>
                   <div className='euCardbottom-lgName'>
                       <p>FB</p>
                       <p>TS</p>
                   </div>
                   <div className='euCardbottom-lgSk'>
                       <p>0</p>
                       <p>0</p>
                   </div>
                   <p className='euCardbottom-lgDk'>10.dk</p>
                  </div>
                    </div>
                    <div className='euLigCardInRight'>
                        <div className='euLigCardInRightTitle'>
                            <p>1: 1.9</p>
                            <p>X: 3.36</p>
                            <p>2: 1.3</p>
                        </div>
                        <img src={MBLogo} alt='MBLogo'/>
                    </div>
                </div>
                <div className='euCard'>
                    <div className='euLigCardInLeft'>
                  <div className='euCardTopText'>
                      <p>10.10.2019</p>
                      <p>UEFA ŞL</p>
                  </div>
                  <div className='euCardBottomText'>
                   <div className='euCardbottomMb'>
                       <img src={MBTop} alt='MBTop'/>
                       <img src={MBBottom} alt='MBBottom'/>
                   </div>
                   <div className='euCardbottom-lgName'>
                       <p>FB</p>
                       <p>TS</p>
                   </div>
                   <div className='euCardbottom-lgSk'>
                       <p>0</p>
                       <p>0</p>
                   </div>
                   <p className='euCardbottom-lgDk'>10.dk</p>
                  </div>
                    </div>
                    <div className='euLigCardInRight'>
                        <div className='euLigCardInRightTitle'>
                            <p>1: 1.9</p>
                            <p>X: 3.36</p>
                            <p>2: 1.3</p>
                        </div>
                        <img src={MBLogo} alt='MBLogo'/>
                    </div>
                </div>
                <div className='euCard'>
                    <div className='euLigCardInLeft'>
                  <div className='euCardTopText'>
                      <p>10.10.2019</p>
                      <p>UEFA ŞL</p>
                  </div>
                  <div className='euCardBottomText'>
                   <div className='euCardbottomMb'>
                       <img src={MBTop} alt='MBTop'/>
                       <img src={MBBottom} alt='MBBottom'/>
                   </div>
                   <div className='euCardbottom-lgName'>
                       <p>FB</p>
                       <p>TS</p>
                   </div>
                   <div className='euCardbottom-lgSk'>
                       <p>0</p>
                       <p>0</p>
                   </div>
                   <p className='euCardbottom-lgDk'>10.dk</p>
                  </div>
                    </div>
                    <div className='euLigCardInRight'>
                        <div className='euLigCardInRightTitle'>
                            <p>1: 1.9</p>
                            <p>X: 3.36</p>
                            <p>2: 1.3</p>
                        </div>
                        <img src={MBLogo} alt='MBLogo'/>
                    </div>
                </div>
                </div>
                <div className='leftScroll rightScroll'>
                    <img src={rightArrow} alt='rightArrow'/>
                </div>
            </div>
            </div>
        )
    }
}
export default SwipeableCards;