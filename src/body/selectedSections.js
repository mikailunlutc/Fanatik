import React, { Component } from 'react'
class SelectedSections extends Component {
    render() {
        return (
            <div className='SelectedSections'>
                <ul className='newsletter-list'>
                    <li className='newsletterTitle'>Spor Haberleri</li>
                    <li>Futbol</li>
                    <li>Süper Lig</li>
                </ul>
                <h1 className='newsletterBottom-Title'>Süperlig İstatistikleri</h1>
            </div>
        )
    }
}
export default SelectedSections;