import React, { Component } from 'react'
import arrow from '../images/Triangle.png';
import arrowBottom from '../images/arrow_copy_6.png';
import mbIcon from '../images/sörlot.png';
class Scorboard extends Component {
    render() {
        return (
            <div className='Scorboard'>
                <div className='ScorboardTop'>
                    <p className='ScorboardTop-LeftText'>PUAN DURUMU</p>
                    <div className='ScorboardTop-Right'>
                        <p>TÜMÜ</p>
                        <img className='ScorboardTop-RightImg' src={arrow} alt='arrow'/>
                    </div>
                </div>
                <div className='ScoreboardTeams'>
                <div className='ScoreboardDropdownlist'>
                    <p>Türkiye Süper Lig</p>
                    <img src={arrowBottom} alt='arrowBottom'/>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th colSpan='3' className='Scoreboard-row-1'>Türkiye Süper Lig</th>
                            <th className='Scoreboard-row-2'>O</th>
                            <th className='Scoreboard-row-3'>P</th>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>1</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>2</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>3</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>4</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>5</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>6</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>7</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>8</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>9</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>10</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>11</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>12</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>13</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>14</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>15</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>16</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>17</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                        <tr className='Scoreboard-row-Bottom'>
                            <td className='Scoreboard-row-td1'>18</td>
                            <td className='Scoreboard-row-td2'><img src={mbIcon} alt='mbIcon'/></td>
                            <td className='Scoreboard-row-td3'>Club Brugge</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
export default Scorboard;