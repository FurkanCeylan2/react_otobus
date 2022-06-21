import logo from './logo.svg';
import './App.css';
import Seferler from './components/Seferler';
import Biletlerim from './components/Biletlerim';
import Header from './components/Header';
import Contents from './components/Contents';
import 'bootstrap/dist/css/bootstrap.min.css';


class Sefer{
  constructor(id,firma,kalkissehir,varissehir,kalkistarihi,kalkissaati,koltuksayisi,fiyat){
    this.id=id;
    this.kalkissehir = kalkissehir;
    this.varissehir = varissehir;
    this.kalkistarihi=kalkistarihi;
    this.kalkissaati=kalkissaati;
    this.koltuksayisi=koltuksayisi;
    this.firma = firma;
    this.fiyat = fiyat;
    this.koltuklar = [];
    for (let i = 0; i < koltuksayisi; i++) {
      this.koltuklar.push(false);
    }
  }
}
if(sessionStorage.getItem("biletler") == null){
  var biletler=[];
  sessionStorage.setItem("biletler",JSON.stringify(biletler));
}
if(sessionStorage.getItem("seferler") == null){
var arr = [];
arr.push(new Sefer(1,"Kamil Koç","İzmir","İstanbul","21.06.2022","17:30",40,500));
arr.push(new Sefer(2,"Metro Turizm","İstanbul","İzmir","22.06.2022","10:30",40,450));
arr.push(new Sefer(3,"Kamil Koç","Ankara","İzmir","20.06.2022","20:30",40,200));
arr.push(new Sefer(4,"Pamukkale","Adıyaman","İstanbul","23.06.2022","00:30",40,350));
arr.push(new Sefer(5,"Metro Turizm","Bursa","İzmir","20.06.2022","12:30",40,450));
  sessionStorage.setItem("seferler",JSON.stringify(arr));
}


function App() {
  return(
   <div>
    <Contents/>
   </div>
  );
}

export default App;

//<Route path="/author/:id" exact component={AuthorDetail} />