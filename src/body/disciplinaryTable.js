import React, { Component } from 'react'
import arrow from '../images/minBottomArrow.png';
import MbIcon from '../images/sörlot.png';
class DisciplinaryTable extends Component {
    render() {
        return (
            <div className='Statistics DisciplinaryTable'>
                <div className='scoreTableHeader'>
                    <h1 className='scoreTableHeaderTitle'>DİSİPLİN</h1>
                    <div className='scoreTableHeaderInLeft'>
                    <p>2019/2020 Sezon</p>
                    <img className='scoreTableHeaderArrow' src={arrow} alt='BottomArrow'/>
                    </div>
                </div>
                <table>
                    <tbody>
                        <tr className='scoreTableTop-row'>
                            <th className='th-row-1 DisciplinaryTable-row-1' colSpan='3'>Oyuncu Adı</th>
                            <th className='th-row-2 DisciplinaryTable-row-2'>MAÇ</th>
                            <th className='th-row-3 DisciplinaryTable-row-3'>11</th>
                            <th className='th-row-4 DisciplinaryTable-row-4'>DK</th>
                            <th className='th-row-5 DisciplinaryTable-row-5'>SK</th>
                            <th className='th-row-5 DisciplinaryTable-row-6'>SKO</th>
                            <th className='th-row-6 DisciplinaryTable-row-7'>KK</th>
                            <th className='th-row-8 DisciplinaryTable-row-8'>K.KART/ SARI</th>
                        </tr>
                        <tr className='scoreTableBottom-row'>
                            <td className='scoreTable-assistScore-row1'>1</td>
                            <td className='scoreTable-assistScore-row2'><img src={MbIcon} alt='MBicon'/></td>
                            <td><div className='scoreTable-assistScore-row3'>A. Sörloth (TS)</div></td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td className='scoreTable-assistScore DisciplinaryTable-td1'>2</td>
                        </tr>
                        <tr className='scoreTableBottom-row'>
                            <td className='scoreTable-assistScore-row1'>1</td>
                            <td className='scoreTable-assistScore-row2'><img src={MbIcon} alt='MBicon'/></td>
                            <td><div className='scoreTable-assistScore-row3'>A. Sörloth (TS)</div></td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td className='DisciplinaryTable-td2'>26</td>
                            <td className='scoreTable-assistScore DisciplinaryTable-td1 DisciplinaryTable-width'>2<div>1</div></td>
                        </tr>
                        <tr className='scoreTableBottom-row'>
                            <td className='scoreTable-assistScore-row1'>1</td>
                            <td className='scoreTable-assistScore-row2'><img src={MbIcon} alt='MBicon'/></td>
                            <td><div className='scoreTable-assistScore-row3'>A. Sörloth (TS)</div></td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td className='DisciplinaryTable-td2'>26</td>
                            <td className='scoreTable-assistScore DisciplinaryTable-td1'>2</td>
                        </tr>
                        <tr className='scoreTableBottom-row'>
                            <td className='scoreTable-assistScore-row1'>1</td>
                            <td className='scoreTable-assistScore-row2'><img src={MbIcon} alt='MBicon'/></td>
                            <td><div className='scoreTable-assistScore-row3'>A. Sörloth (TS)</div></td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td className='DisciplinaryTable-td2'>26</td>
                            <td className='scoreTable-assistScore DisciplinaryTable-td1'>2</td>
                        </tr>
                        <tr className='scoreTableBottom-row'>
                            <td className='scoreTable-assistScore-row1'>1</td>
                            <td className='scoreTable-assistScore-row2'><img src={MbIcon} alt='MBicon'/></td>
                            <td><div className='scoreTable-assistScore-row3'>A. Sörloth (TS)</div></td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td className='DisciplinaryTable-td2'>26</td>
                            <td className='scoreTable-assistScore DisciplinaryTable-td1'>2</td>
                        </tr>
                        <tr className='scoreTableBottom-row'>
                            <td className='scoreTable-assistScore-row1'>1</td>
                            <td className='scoreTable-assistScore-row2'><img src={MbIcon} alt='MBicon'/></td>
                            <td><div className='scoreTable-assistScore-row3'>A. Sörloth (TS)</div></td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td className='DisciplinaryTable-td2'>26</td>
                            <td className='scoreTable-assistScore DisciplinaryTable-td1'>2</td>
                        </tr>
                        <tr className='scoreTableBottom-row'>
                            <td className='scoreTable-assistScore-row1'>1</td>
                            <td className='scoreTable-assistScore-row2'><img src={MbIcon} alt='MBicon'/></td>
                            <td><div className='scoreTable-assistScore-row3'>A. Sörloth (TS)</div></td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td className='DisciplinaryTable-td2'>26</td>
                            <td className='scoreTable-assistScore DisciplinaryTable-td1'>2</td>
                        </tr>
                        <tr className='scoreTableBottom-row'>
                            <td className='scoreTable-assistScore-row1'>1</td>
                            <td className='scoreTable-assistScore-row2'><img src={MbIcon} alt='MBicon'/></td>
                            <td><div className='scoreTable-assistScore-row3'>A. Sörloth (TS)</div></td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td className='DisciplinaryTable-td2'>26</td>
                            <td className='scoreTable-assistScore DisciplinaryTable-td1'>2</td>
                        </tr>
                        <tr className='scoreTableBottom-row'>
                            <td className='scoreTable-assistScore-row1'>1</td>
                            <td className='scoreTable-assistScore-row2'><img src={MbIcon} alt='MBicon'/></td>
                            <td><div className='scoreTable-assistScore-row3'>A. Sörloth (TS)</div></td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td className='DisciplinaryTable-td2'>26</td>
                            <td className='scoreTable-assistScore DisciplinaryTable-td1'>2</td>
                        </tr>
                        <tr className='scoreTableBottom-row'>
                            <td className='scoreTable-assistScore-row1'>1</td>
                            <td className='scoreTable-assistScore-row2'><img src={MbIcon} alt='MBicon'/></td>
                            <td><div className='scoreTable-assistScore-row3'>A. Sörloth (TS)</div></td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td className='DisciplinaryTable-td2'>26</td>
                            <td className='scoreTable-assistScore DisciplinaryTable-td1'>2</td>
                        </tr>
                        <tr className='scoreTableBottom-row'>
                            <td className='scoreTable-assistScore-row1'>1</td>
                            <td className='scoreTable-assistScore-row2'><img src={MbIcon} alt='MBicon'/></td>
                            <td><div className='scoreTable-assistScore-row3'>A. Sörloth (TS)</div></td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td>26</td>
                            <td className='DisciplinaryTable-td2'>26</td>
                            <td className='scoreTable-assistScore DisciplinaryTable-td1'>2</td>
                        </tr>
                        
                    </tbody>
                </table>
                <div className='tableBottom DisciplinaryTableBottom'>
                    <p>MAÇ: Maç 11: İlk. DK: Oynadığı Dakika Toplamı  SK: Sarı Kart  SKO: Sarı Kart Ortalaması  KK: Kırmızı Kart </p>
                </div>
            </div>
        )
    }
}
export default DisciplinaryTable;