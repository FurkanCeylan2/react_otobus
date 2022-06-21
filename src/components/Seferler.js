import React from 'react'
import Footer from './Footer';
import Header from './Header';
import {Link} from "react-router-dom";
import BiletAl from './BiletAl';

function Seferler() {
    var seferler = JSON.parse(sessionStorage.getItem("seferler"));
    return (
    <div>
        <Header/>
        <table className='table table-striped mt-5 container'>
          <tr>
          <th>#</th>
          <th>Seyahat Firması</th>
          <th>Kalkış Yeri</th>
          <th>Varış Yeri</th>
          <th>Kalkış Tarihi</th>
          <th>Kalkış Saati</th>
          <th>Koltuk Sayısı</th>
          <th>Bilet Fiyatı</th>
          <th>İşlem</th>
          </tr>
        {seferler.map((item,index)=>(
          <tr>
            <td>{item.id}</td>
            <td>{item.firma}</td>
            <td>{item.kalkissehir}</td>
            <td>{item.varissehir}</td>
            <td>{item.kalkistarihi}</td>
            <td>{item.kalkissaati}</td>
            <td>{item.koltuksayisi}</td>
            <td>{item.fiyat}₺</td>
            <td><Link className='btn btn-primary bg-black' to={`/biletal/${index}`}>Bilet Al</Link></td>
          </tr>
          ))}
      </table>
        <Footer/>
      </div>
  )
}

export default Seferler