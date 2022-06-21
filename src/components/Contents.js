import React from 'react'
import Footer from './Footer';
import Header from './Header';


function Contents() {
  return (
    <div>
        <Header/>
        <div className='container'>
            <div className='container d-flex pt-5 justify-content-center align-items-center flex-column'>
                <h1>Bilet Rezervasyon Sistemine Hoşgeldiniz</h1>
                <p>Üst menüden yönlendirme yaparak site içerisinde gezinebilir, seferleri listeleyebilir, bilet satın alabilir ve satın aldığınız biletleri görüntüleyebilirsiniz!</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contents