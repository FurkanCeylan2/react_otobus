import React from 'react'
import Footer from './Footer';
import Header from './Header'

function Biletlerim() {
    var biletler = JSON.parse(sessionStorage.getItem("biletler"));
  return (
    <div>
        <Header/>
        <table className='table table-striped mt-5 container'>
          <tr>
          <th>Seyahat Firması</th>
          <th>Kalkış Yeri</th>
          <th>Varış Yeri</th>
          <th>Kalkış Tarihi</th>
          <th>Kalkış Saati</th>
          <th>Koltuk Numarası</th>
          <th>Ödenen Tutar</th>
          </tr>
        {biletler.map((item,index)=>(
          <tr>
            <td>{item.sefer.firma}</td>
            <td>{item.sefer.kalkissehir}</td>
            <td>{item.sefer.varissehir}</td>
            <td>{item.sefer.kalkistarihi}</td>
            <td>{item.sefer.kalkissaati}</td>
            <td>{item.koltuk+1}</td>
            <td>{item.sefer.fiyat}₺</td>
          </tr>
          ))}
      </table>
        <Footer/>
    </div>
  )
}

export default Biletlerim