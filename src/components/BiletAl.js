import React from 'react'
import { NavigationType, useParams } from "react-router-dom";
import Header from './Header';
import { useNavigate } from "react-router-dom";


function BiletAl() {
  let params = useParams();
  var seferler = JSON.parse(sessionStorage.getItem("seferler"));
  var secilenSefer = seferler[params.seferid];
  let navigate = useNavigate(); 
  const redir = (hedef) =>{ 
    navigate(hedef);
  }
  function satinal(koltukno) {
    var biletler = JSON.parse(sessionStorage.getItem("biletler"));
    secilenSefer.koltuklar[koltukno] = true;
    secilenSefer.koltuksayisi-=1;
    seferler[params.seferid] = secilenSefer;
    sessionStorage.setItem("seferler",JSON.stringify(seferler));
    biletler.push({sefer:secilenSefer,koltuk:koltukno});
    sessionStorage.setItem("biletler",JSON.stringify(biletler));
    alert("İşlem Başarılı!");
    redir("/biletal/"+(params.seferid));
  }
  function ColorDecider(param) {
    return param?'red':'green';
  }
  function SatinAlinabilirmi(param,index) {
    if(param){
      return <button className='btn btn-primary' disabled>Satılmış</button>
    }
    else{
      return <button className='btn btn-primary' onClick={()=>satinal(index) }>Satın Al</button>
    }
  }
  return (
    <div>
      <Header/>
      <table className='container table table-bordered'>
        <tr>
        <th>#</th>
          <th>Seyahat Firması</th>
          <th>Kalkış Yeri</th>
          <th>Varış Yeri</th>
          <th>Kalkış Tarihi</th>
          <th>Kalkış Saati</th>
          <th>Koltuk Sayısı</th>
          <th>Bilet Fiyatı</th>
        </tr>
        <tr>
            <td>{secilenSefer.id}</td>
            <td>{secilenSefer.firma}</td>
            <td>{secilenSefer.kalkissehir}</td>
            <td>{secilenSefer.varissehir}</td>
            <td>{secilenSefer.kalkistarihi}</td>
            <td>{secilenSefer.kalkissaati}</td>
            <td>{secilenSefer.koltuksayisi}</td>
            <td>{secilenSefer.fiyat}₺</td>
          </tr>
      </table>
      <div>
        <table className='container table w-50 text-center'>
          <tr>
            <th>Koltuk No</th>
            <th>Fiyat</th>
            <th>Satın Al</th>
          </tr>
        {secilenSefer.koltuklar.map((item,index)=>(
          <tr className='text-white' style={{background:ColorDecider(item),width:'40px',height:'40px'}}>
            <td >{index+1}</td>
            <td >{secilenSefer.fiyat}₺</td>
            <td >{SatinAlinabilirmi(item,index)}</td>
        </tr>
        ))}
        </table>
      </div>
    </div>
    
  )
}

export default BiletAl