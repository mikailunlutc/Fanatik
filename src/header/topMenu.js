import React, { Component } from 'react'
import logo from '../images/fanatikLogo.png';
import search from '../images/seacrh.png';
import login from '../images/user.png';
class TopMenu extends Component {
    render() {
        return (
            <div className='top-menu'>
            <img src={logo} alt='Fanatik'/>
            <ul className='orderedMenu'>
                <li>FUTBOL</li>
                <li>BASKETBOL</li>
                <li>VOLEYBOL</li>
                <li>YAZARLAR</li>
                <li>E-SPOR</li>
                <li>DAHA FAZLA</li>
            </ul>
            <div className='searchEndlogin'>
                <img src={search} alt='Search'/>
                <img src={login} alt='Login'/>
            </div>
           </div>
        )
    }
}
export default TopMenu;