import React, { Component } from 'react'
import arrow from '../images/Triangle.png';
import arrowBottom from '../images/arrow.png';
import leftMB from '../images/bjk_dls17_3_yıldızlı_wid10_logo_2_copy.png';
import rightMB from '../images/fenerbahce-spor-kulubu-logo-transparan-vektor-png_copy (1).png';
import MBIcon from '../images/misli_copy_2.png';
class Fixture extends Component {
    render() {
        return (
            <div className='Fixture'>
                <div className='ScorboardTop FixtureTop'>
                        <p className='ScorboardTop-LeftText'>FİKSTÜR</p>
                        <div className='ScorboardTop-Right'>
                            <p>TÜMÜ</p>
                            <img className='ScorboardTop-RightImg' src={arrow} alt='arrow'/>
                        </div>
                    </div>
                <div className='FixtureScore'>
                    <div className='FixtureScoreSelects'>
                        <div className='ScoreboardDropdownlist FixtureScoreSelect'>
                            <p>UEFA Şampiyonlar Ligi</p>
                            <img src={arrowBottom} alt='arrowBottom'/>
                        </div>
                        <div className='ScoreboardDropdownlist FixtureScoreSelect fixtureSelect-right'>
                            <p>Bu Hafta</p>
                            <img src={arrowBottom} alt='arrowBottom'/>
                        </div>
                    </div>
                    <table className='fixture-table'>
                        <tbody>
                            <tr className='fixture-row-top'>
                                <th className='fixture-row-1'><div>Beşiktaş</div></th>
                                <th className='fixture-row-2'><img src={leftMB} alt='leftMB'/></th>
                                <th className='fixture-row-3' colSpan='2'>
                                    16.03.20
                                    <div>22:00</div>
                                </th>
                                <th className='fixture-row-4'><img src={rightMB} alt='rightMB'/></th>
                                <th className='fixture-row-5' colSpan='2'><div>Galatasaray</div></th>
                            </tr>
                            <tr className='fixture-row-bottom'>
                                <td className='fixture-row-first'>1 : 3,40</td>
                                <td className='fixture-row-two'>X : 2,90</td>
                                <td></td>
                                <td className='fixture-row-last2'>2 : 2,20</td>
                                <td className='fixture-row-last1'></td>
                                <td className='fixture-row-last'><img src={MBIcon} alt='MBIcon'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='fixture-table'>
                        <tbody>
                            <tr className='fixture-row-top'>
                                <th className='fixture-row-1'><div>Beşiktaş</div></th>
                                <th className='fixture-row-2'><img src={leftMB} alt='leftMB'/></th>
                                <th className='fixture-row-3' colSpan='2'>
                                    16.03.20
                                    <div>22:00</div>
                                </th>
                                <th className='fixture-row-4'><img src={rightMB} alt='rightMB'/></th>
                                <th className='fixture-row-5' colSpan='2'><div>Galatasaray</div></th>
                            </tr>
                            <tr className='fixture-row-bottom'>
                                <td className='fixture-row-first'>1 : 3,40</td>
                                <td className='fixture-row-two'>X : 2,90</td>
                                <td></td>
                                <td className='fixture-row-last2'>2 : 2,20</td>
                                <td className='fixture-row-last1'></td>
                                <td className='fixture-row-last'><img src={MBIcon} alt='MBIcon'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='fixture-table'>
                        <tbody>
                            <tr className='fixture-row-top'>
                                <th className='fixture-row-1'><div>Beşiktaş</div></th>
                                <th className='fixture-row-2'><img src={leftMB} alt='leftMB'/></th>
                                <th className='fixture-row-3' colSpan='2'>
                                    16.03.20
                                    <div>22:00</div>
                                </th>
                                <th className='fixture-row-4'><img src={rightMB} alt='rightMB'/></th>
                                <th className='fixture-row-5' colSpan='2'><div>Galatasaray</div></th>
                            </tr>
                            <tr className='fixture-row-bottom'>
                                <td className='fixture-row-first'>1 : 3,40</td>
                                <td className='fixture-row-two'>X : 2,90</td>
                                <td></td>
                                <td className='fixture-row-last2'>2 : 2,20</td>
                                <td className='fixture-row-last1'></td>
                                <td className='fixture-row-last'><img src={MBIcon} alt='MBIcon'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='fixture-table'>
                        <tbody>
                            <tr className='fixture-row-top'>
                                <th className='fixture-row-1'><div>Beşiktaş</div></th>
                                <th className='fixture-row-2'><img src={leftMB} alt='leftMB'/></th>
                                <th className='fixture-row-3' colSpan='2'>
                                    16.03.20
                                    <div>22:00</div>
                                </th>
                                <th className='fixture-row-4'><img src={rightMB} alt='rightMB'/></th>
                                <th className='fixture-row-5' colSpan='2'><div>Galatasaray</div></th>
                            </tr>
                            <tr className='fixture-row-bottom'>
                                <td className='fixture-row-first'>1 : 3,40</td>
                                <td className='fixture-row-two'>X : 2,90</td>
                                <td></td>
                                <td className='fixture-row-last2'>2 : 2,20</td>
                                <td className='fixture-row-last1'></td>
                                <td className='fixture-row-last'><img src={MBIcon} alt='MBIcon'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='fixture-table'>
                        <tbody>
                            <tr className='fixture-row-top'>
                                <th className='fixture-row-1'><div>Beşiktaş</div></th>
                                <th className='fixture-row-2'><img src={leftMB} alt='leftMB'/></th>
                                <th className='fixture-row-3' colSpan='2'>
                                    16.03.20
                                    <div>22:00</div>
                                </th>
                                <th className='fixture-row-4'><img src={rightMB} alt='rightMB'/></th>
                                <th className='fixture-row-5' colSpan='2'><div>Galatasaray</div></th>
                            </tr>
                            <tr className='fixture-row-bottom'>
                                <td className='fixture-row-first'>1 : 3,40</td>
                                <td className='fixture-row-two'>X : 2,90</td>
                                <td></td>
                                <td className='fixture-row-last2'>2 : 2,20</td>
                                <td className='fixture-row-last1'></td>
                                <td className='fixture-row-last'><img src={MBIcon} alt='MBIcon'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='fixture-table'>
                        <tbody>
                            <tr className='fixture-row-top'>
                                <th className='fixture-row-1'><div>Beşiktaş</div></th>
                                <th className='fixture-row-2'><img src={leftMB} alt='leftMB'/></th>
                                <th className='fixture-row-3' colSpan='2'>
                                    16.03.20
                                    <div>22:00</div>
                                </th>
                                <th className='fixture-row-4'><img src={rightMB} alt='rightMB'/></th>
                                <th className='fixture-row-5' colSpan='2'><div>Galatasaray</div></th>
                            </tr>
                            <tr className='fixture-row-bottom'>
                                <td className='fixture-row-first'>1 : 3,40</td>
                                <td className='fixture-row-two'>X : 2,90</td>
                                <td></td>
                                <td className='fixture-row-last2'>2 : 2,20</td>
                                <td className='fixture-row-last1'></td>
                                <td className='fixture-row-last'><img src={MBIcon} alt='MBIcon'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='fixture-table'>
                        <tbody>
                            <tr className='fixture-row-top'>
                                <th className='fixture-row-1'><div>Beşiktaş</div></th>
                                <th className='fixture-row-2'><img src={leftMB} alt='leftMB'/></th>
                                <th className='fixture-row-3' colSpan='2'>
                                    16.03.20
                                    <div>22:00</div>
                                </th>
                                <th className='fixture-row-4'><img src={rightMB} alt='rightMB'/></th>
                                <th className='fixture-row-5' colSpan='2'><div>Galatasaray</div></th>
                            </tr>
                            <tr className='fixture-row-bottom'>
                                <td className='fixture-row-first'>1 : 3,40</td>
                                <td className='fixture-row-two'>X : 2,90</td>
                                <td></td>
                                <td className='fixture-row-last2'>2 : 2,20</td>
                                <td className='fixture-row-last1'></td>
                                <td className='fixture-row-last'><img src={MBIcon} alt='MBIcon'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='fixture-table'>
                        <tbody>
                            <tr className='fixture-row-top'>
                                <th className='fixture-row-1'><div>Beşiktaş</div></th>
                                <th className='fixture-row-2'><img src={leftMB} alt='leftMB'/></th>
                                <th className='fixture-row-3' colSpan='2'>
                                    16.03.20
                                    <div>22:00</div>
                                </th>
                                <th className='fixture-row-4'><img src={rightMB} alt='rightMB'/></th>
                                <th className='fixture-row-5' colSpan='2'><div>Galatasaray</div></th>
                            </tr>
                            <tr className='fixture-row-bottom'>
                                <td className='fixture-row-first'>1 : 3,40</td>
                                <td className='fixture-row-two'>X : 2,90</td>
                                <td></td>
                                <td className='fixture-row-last2'>2 : 2,20</td>
                                <td className='fixture-row-last1'></td>
                                <td className='fixture-row-last'><img src={MBIcon} alt='MBIcon'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='fixture-table'>
                        <tbody>
                            <tr className='fixture-row-top'>
                                <th className='fixture-row-1'><div>Beşiktaş</div></th>
                                <th className='fixture-row-2'><img src={leftMB} alt='leftMB'/></th>
                                <th className='fixture-row-3' colSpan='2'>
                                    16.03.20
                                    <div>22:00</div>
                                </th>
                                <th className='fixture-row-4'><img src={rightMB} alt='rightMB'/></th>
                                <th className='fixture-row-5' colSpan='2'><div>Galatasaray</div></th>
                            </tr>
                            <tr className='fixture-row-bottom'>
                                <td className='fixture-row-first'>1 : 3,40</td>
                                <td className='fixture-row-two'>X : 2,90</td>
                                <td></td>
                                <td className='fixture-row-last2'>2 : 2,20</td>
                                <td className='fixture-row-last1'></td>
                                <td className='fixture-row-last'><img src={MBIcon} alt='MBIcon'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='fixture-table'>
                        <tbody>
                            <tr className='fixture-row-top'>
                                <th className='fixture-row-1'><div>Beşiktaş</div></th>
                                <th className='fixture-row-2'><img src={leftMB} alt='leftMB'/></th>
                                <th className='fixture-row-3' colSpan='2'>
                                    16.03.20
                                    <div>22:00</div>
                                </th>
                                <th className='fixture-row-4'><img src={rightMB} alt='rightMB'/></th>
                                <th className='fixture-row-5' colSpan='2'><div>Galatasaray</div></th>
                            </tr>
                            <tr className='fixture-row-bottom'>
                                <td className='fixture-row-first'>1 : 3,40</td>
                                <td className='fixture-row-two'>X : 2,90</td>
                                <td></td>
                                <td className='fixture-row-last2'>2 : 2,20</td>
                                <td className='fixture-row-last1'></td>
                                <td className='fixture-row-last'><img src={MBIcon} alt='MBIcon'/></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
            </div>
        )
    }
}
export default Fixture;