import React, { Component } from 'react'
import mbIcon from '../images/Oval_Copy.png';
import userIcon from '../images/Oval.png';
class Writers extends Component {
    render() {
        return (
            <div className='Writers'>
                <div className='WritersHeader'>
                 <div className='WritersHeaderInLeft'>
                     <img className='WritersHeaderInLeftIcon' src={mbIcon} alt='mbIcon'/>
                     <p>YAZARLAR</p>
                 </div>
                 <p className='WritersHeaderInRight'>Tüm Yazarlar</p>
                </div>
                
                <div className='WritersCardsList'>
                <div className='WritersCards'>
                        <div className='WritersCard-UserTitle'>
                            <img className='WritersCard-UserTitleImg' src={userIcon} alt='User'/>
                            <p className='WritersCard-username'>Erman Özgür</p>
                        </div>
                        <p className='WritersCard-explanation'>Zeynep Selgur: Amacımız kulüplerin marka değerin</p>
                        <p className='WritersCard-detail'>Galatasaray bu sezonun tüm kulvarlardaki en iyi maçlarından birini </p>
                        <p className='WritersCard-create'>20.08.2019</p>
                    </div>
                    <div className='WritersCards'>
                        <div className='WritersCard-UserTitle'>
                            <img className='WritersCard-UserTitleImg' src={userIcon} alt='User'/>
                            <p className='WritersCard-username'>Aslıhan Çil</p>
                        </div>
                        <p className='WritersCard-explanation'>Zeynep Selgur: Amacımız kulüplerin marka değerin</p>
                        <p className='WritersCard-detail'>Galatasaray bu sezonun tüm kulvarlardaki en iyi maçlarından birini </p>
                        <p className='WritersCard-create'>20.08.2019</p>
                    </div>
                    <div className='WritersCards'>
                        <div className='WritersCard-UserTitle'>
                            <img className='WritersCard-UserTitleImg' src={userIcon} alt='User'/>
                            <p className='WritersCard-username'>Emine S. Özakat</p>
                        </div>
                        <p className='WritersCard-explanation'>Zeynep Selgur: Amacımız kulüplerin marka değerin</p>
                        <p className='WritersCard-detail'>Galatasaray bu sezonun tüm kulvarlardaki en iyi maçlarından birini </p>
                        <p className='WritersCard-create'>20.08.2019</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Writers;