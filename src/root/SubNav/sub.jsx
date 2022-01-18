import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { SubS, litWrap, Compus, ProfilePhoto, LiveIcon, BluePoint }  from './subStyle';

export const Sub=()=> {
  return (
    <SubS className="App mainWrapper">
      <Router>
      <litWrap>
        <span className="icon"><Compus /></span>
        <Link to={'/Keşfet'}>Keşfet</Link>
      </litWrap>
      <litWrap>
        <span className="icon"><Compus /></span>
        <Link to={'/Keşfet'}>Keşfet</Link>
      </litWrap>
      <hr/>
      <litWrap>
        <span className="icon"><Compus /></span>
        <Link to={'/Keşfet'}>Keşfet</Link>
      </litWrap>
      <litWrap>
        <span className="icon"><Compus /></span>
        <Link to={'/Keşfet'}>Keşfet</Link>
      </litWrap>
      <litWrap>
        <span className="icon"><Compus /></span>
        <Link to={'/Keşfet'}>Keşfet</Link>
      </litWrap>
      <litWrap>
        <span className="icon"><Compus /></span>
        <Link to={'/Keşfet'}>Keşfet</Link>
      </litWrap>
      <litWrap>
        <span className="icon"><Compus /></span>
        <Link to={'/Keşfet'}>Keşfet</Link>
      </litWrap>
      <litWrap>
        <span className="icon"><Compus /></span>
        <Link to={'/Keşfet'}>Keşfet</Link>
      </litWrap>
      <hr/>
      <h2>ABONELİKLER</h2>
      <litWrap className="litWrap">
        <span className="icon"><ProfilePhoto/></span>
        <Link to={'Daha fazla göster'} className="text">Daha fazla göster <LiveIcon/></Link>
      </litWrap>
      <litWrap className="litWrap">
        <span className="icon"><ProfilePhoto/></span>
        <Link to={'Daha fazla göster'} className="text">Daha fazla göster <LiveIcon/></Link>
      </litWrap>
      <litWrap className="litWrap">
        <span className="icon"><ProfilePhoto/></span>
        <Link to={'Daha fazla göster'} className="text">Daha fazla göster <LiveIcon/></Link>
      </litWrap>
      <litWrap className="litWrap">
        <span className="icon"><ProfilePhoto/></span>
        <Link to={'Daha fazla göster'} className="text">Daha fazla göster<BluePoint/></Link>
      </litWrap>
      <litWrap className="litWrap">
        <span className="icon"><ProfilePhoto/></span>
        <Link to={'Daha fazla göster'} className="text">Daha fazla göster<BluePoint/></Link>
      </litWrap>
      <litWrap className="litWrap">
        <span className="icon"><ProfilePhoto/></span>
        <Link to={'Daha fazla göster'} className="text">Daha fazla göster<BluePoint/></Link>
      </litWrap>
      <litWrap className="litWrap">
        <span className="icon"><ProfilePhoto/></span>
        <Link to={'Daha fazla göster'} className="text">Daha fazla göster<BluePoint/></Link>
      </litWrap>
      <litWrap>
        <span className="icon"><Compus/></span>
        <span className="text">Keşfet</span>
      </litWrap>
      <hr/>
      <h2>YOUTUBEDEN DAHA FAZLA İÇERİK</h2>
      <litWrap>
        <span className="icon"><Compus /></span>
        <Link to={'/Keşfet'}>Keşfet</Link>
      </litWrap>
        

     </Router>
    </SubS>
  );
}

export default Sub;
