import logo from './assets/logo.png';
import trophy from './assets/1.png'
import award from './assets/2.png'
import devices from './assets/3.png'
import phone from './assets/phone.png'
import facebook from './assets/facebook.png'
import footer from './assets/Footer.png'
import site from './assets/site.png'
import './App.css';

function App() {
  return (
    <div style={{fontWeight:'600',fontSize:'.98rem'}}>
    <div style={{display:'flex',justifyContent:'center'}}>
      <img src={logo} alt="" style={{width:'25%'}}/>
    </div>
    <div style={{display:'flex',width:'100%',height:'45rem'}}>
      <img src={trophy} alt="" style={{width:'42%',height:'auto'}}/>
      <div style={{width:'58%',height:'auto'}}>
        <p>
          <b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b>          
        </p>
        <ul>
          <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
        </ul>
        <img src={award} alt="" style={{width:'98%'}}/>
        <p>
          Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
    <div style={{textAlign:'center',marginTop:'5%',marginBottom:'2%'}}>
      <div style={{borderBottom:'solid',borderColor:'red',margin:'.5%'}}>
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
        </p>
        <img src={devices} alt="" style={{width:'80%',height:'auto'}}/>
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
        </p>
      </div>
      
      <p>
        <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
      </p>
      <div style={{marginLeft:'2%',marginRight:'2%'}}>
        CHEMICALS & PROCESS <span style={{color:'red'}}>|</span> POWER <span style={{color:'red'}}>|</span> WATER & WASTE WATER <span style={{color:'red'}}>|</span> OILS & GAS <span style={{color:'red'}}>|</span> PHARMA <span style={{color:'red'}}>|</span> SUGARS & DISTILLERIES <span style={{color:'red'}}>|</span> PAPER & PULP <span style={{color:'red'}}>|</span> MARINE & DEFENCE <span style={{color:'red'}}>|</span> METAL & MINING <span style={{color:'red'}}>|</span> FOOD & BEVERAGE <span style={{color:'red'}}>|</span> PETROCHEMICAL & REFINERIES <span style={{color:'red'}}>|</span> SOLAR <span style={{color:'red'}}>|</span> BUILDING <span style={{color:'red'}}>|</span>HVAC <span style={{color:'red'}}>|</span> FIRE FIGHTING <span style={{color:'red'}}>|</span> AGRICULTURE & RESIDENTIAL
      </div>
    </div>
    <div style={{backgroundColor:'#f03434',display:'flex',color:'#fff',marginBottom:'.5%',marginLeft:'.5%',marginRight:'.5%',justifyContent:'center',fontSize:'.8rem',paddingTop:'1%',paddingBottom:'3%'}}>
      <img src={footer} alt="" style={{width:'100%'}}/>
      {/* <div style={{display:'flex', marginRight:'20%'}}>
        <img src={phone} alt="" style={{height:'50%',marginTop:'4%',marginRight:'2%'}}/>
        <p>
          Toll<span style={{color:'#f03434'}}>_</span>free<span style={{color:'#f03434'}}>_</span>18002001234
        </p>
      </div>
      <div style={{display:'flex', marginRight:'20%'}}>
        <img src={facebook} alt="" style={{height:'50%',marginTop:'4%',marginRight:'2%'}}/>
        <p>
          www.facebook.com/cripumps
        </p>
      </div>
      <div style={{display:'flex'}}>
        <img src={site} alt="" style={{height:'50%',marginTop:'4%',marginRight:'2%'}}/>
        <p>
          www.crigroups.com
        </p>
      </div> */}
    </div>
      
    </div>
  );
}

export default App;
