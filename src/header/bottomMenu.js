import React, { Component } from 'react';
class BottomMenu extends Component {
    render() {
        return (
            <div className='btm-menu'>
                <ul className='leagueMenus'>
                    <li>Süper Lig</li>
                    <li>Haberler</li>
                    <li>Puan Durumu</li>
                    <li>Fikstür</li>
                    <li>Ligler</li>
                    <li>Takımlar</li>
                    <li>İstatistikler</li>
                    <li>Transferler</li>
                </ul>
            </div>
        )
    }
}
export default BottomMenu;