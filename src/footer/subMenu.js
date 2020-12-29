import React, { Component } from 'react'
import footerLogo from '../images/footerLogo.png';
import facebook from '../images/fbLogo.png';
import twitter from '../images/twLogo.png';
import instagram from '../images/instagram.png';
import google from '../images/g+Logo.png';
import footerArrow from '../images/up.png';
import dowlondApp from '../images/28-layers.png';
import dowlondPlay from '../images/47-layers.png';
import minlogoP from '../images/2-layers (1).png';
import minlogoC from '../images/8-layers.png';
import btmIcon1 from '../images/fanatikLogo (1).png';
import btmIcon2 from '../images/logo.png';
class SubMenu extends Component {
    render() {
        return (
            <div className='subMenu'>
                <div className='media-top'>
                <div className='footerLogo'>
                    <img src={footerLogo} alt='footerLogo'/>
                </div>
                <div className='mediaDepartment'>
                    <h1 className='mediaDepartmentText'>TAKİP ET</h1>
                    <img src={facebook} alt='facebook'/>
                    <img src={twitter} alt='twitter'/>
                    <img src={instagram} alt='instagram'/>
                    <img src={google} alt='google'/>
                </div>
                <div className='footerDropdown'>
                    <img className='footerDropdownImg' src={footerArrow} alt='footerArrow'/>
                </div>
                </div>
                <div className='media-mid'>
                    <div className='media-mid-left'>
                        <div className='footbolList'>
                            <p className='media-mid-Title'>FUTBOL</p>
                            <div className='media-mid-flex'>
                            <ul className='media-mid-flex-ul-1'>
                                <li>Spor Toto Süper Lig</li>
                                <li>Beşiktaş</li>
                                <li>Fenerbahçe</li>
                                <li>Galatasaray</li>
                                <li>Trabzonspor</li>
                                <li>Diğer Takımlar</li>
                                <li>Derbi</li>
                                <li>Puan Durumu</li>
                                <li>TFF 1. Lig</li>
                                <li>Spor Toto 2. Lig</li>
                            </ul>
                            <ul className='media-mid-flex-ul-2'>
                                <li>Spor Toto 3. Lig</li>
                                <li>Ziraat Türkiye Kupası</li>
                                <li>Milli Takım</li>
                                <li>Transfer</li>
                                <li>Canlı Skor</li>
                                <li>Foto Galeri</li>
                                <li>Video</li>
                                <li>Yazarlar</li>
                                <li>İddaa</li>
                            </ul>
                            </div>
                        </div>
                        <div>
                            <p className='media-mid-Title'>BASKETBOL</p>
                            <div className='media-mid-flex'>
                            <ul>    
                            <li>Basketbol Süper Ligi</li>
                            <li>Kadınlar</li>
                            <li>THY Euroleague</li>
                            <li>Milli Takımlar</li>
                            <li>NBA</li>
                            <li>FIBA Şampiyonlar Ligi</li>
                            <li>7DAYS EuroCup</li>
                            </ul>
                            </div>
                        </div>
                        <div>
                            <p className='media-mid-Title'>DİĞER SPORLAR</p>
                            <div className='media-mid-flex'>
                            <ul className='media-mid-flex-ul-1'>
                                <li>Voleybol</li>
                                <li>Motor Sporları</li>
                                <li>Amerikan Futbolu</li>
                                <li>Atletizm</li>
                                <li>At Yarışı</li>
                                <li>Binicilik</li>
                                <li>Bisiklet</li>
                                <li>Boks</li>
                                <li>Engelli ve Spor</li>
                                <li>Golf</li>
                                <li>Güreş</li>
                            </ul>
                            <ul className='media-mid-flex-ul-3'>
                                <li>Halter</li>
                                <li>Hentbol</li>
                                <li>Jimnastik</li>
                                <li>Karate</li>
                                <li>Kayak</li>
                                <li>Kürek</li>
                                <li>Okçuluk</li>
                                <li>Satranç</li>
                                <li>Sutopu</li>
                            </ul>
                            <ul className='media-mid-flex-ul-3'>
                                <li>Tekvando</li>
                                <li>Tenis</li>
                                <li>Yelken</li>
                                <li>Yüzme</li>
                            </ul>
                            <ul>
                                <li>Espor</li>
                                <li>Eğitim</li>
                                <li>Şans Oyunları</li>
                                <li>Survivor</li>
                                <li>Anket</li>
                                <li>Üyelik</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className='media-mid-right'>
                        <ul className='media-mid-List'>
                            <li>KURUMSAL</li>
                            <li>REKLAM BİLGİLERİ</li>
                            <li>KÜNYE</li>
                            <li>İŞ İLANLARI</li>
                            <li>İLETİŞİM</li>
                        </ul>
                        <div className='media-mid-app'>
                            <img src={dowlondApp} alt='dowlondApp'/>
                        </div>
                        <div className='media-mid-appTo'>
                            <img src={dowlondPlay} alt='dowlondPlay'/>
                        </div>
                        <div className='media-mid-appToAp'>
                            <img src={minlogoP} alt='min-logo-1'/>
                        </div>
                        <div>
                            <img src={minlogoC} alt='min-logo-2'/>
                        </div>
                    </div>
                </div>
                <div className='media-btm'>
                    <div className='media-bottomTop'>
                    <p className='media-bottomTop-Title submenu-bottomTop-Title'>KİŞİSEL VERİLERE İLİŞKİN AYDINLATMA METNİ</p>
                    <p className='media-bottomTop-Text'>Türkiye'den ve Dünya’dan son dakika spor haberleri, köşe yazılarından spor ve maç yorumları, spor magazin haberleri, spor ile ilgili bütün konuların tek adresi fanatik.com.tr. Haber içeriklerinden kaynak gösterilmeden alıntı yapılamaz, kanuna aykırı ve izinsiz olarak kopyalanamaz, başka yerde yayınlanamaz.</p>
                    <div className='media-bottomTop-ESM'>
                        <img src={btmIcon1} alt='btm-icon1'/>
                        <p>bir</p>
                        <img src={btmIcon2} alt='btm-icon2'/>
                        <p>üyesidir.</p>
                    </div>
                    </div>
                    <p className='media-bottomTop-rights'>Copyright © 2017 www.fanatik.com.tr Doğan Gazetecilik AŞ  | Tüm Hakları Saklıdır</p>
                </div>
            </div>
        )
    }
}
export default SubMenu;