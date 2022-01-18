import { ReactComponent as top } from '../../assets/icons/Navbar.svg';
import { ReactComponent as left1 } from '../../assets/icons/torburchak.svg';
import { ReactComponent as Red } from '../../assets/icons/redone.svg';
import { ReactComponent as play } from '../../assets/icons/play.svg';
import { ReactComponent as search } from '../../assets/icons/search.svg';
import { ReactComponent as camera } from '../../assets/icons/camera.svg';
import { ReactComponent as Kub } from '../../assets/icons/torburchak.svg';
import { ReactComponent as qong } from '../../assets/icons/qongiroq.svg';
import { ReactComponent as Photo } from '../../assets/icons/rasm.svg';

import styled from 'styled-components';

export const Wrap =styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
background-color: black;
width: 100%;
height: 56px;
color:#fff;
margin: 10 0 10 0;
`;

Wrap.Per =styled.div`
display: flex;
flex: 5;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: red;
width: 100%;
height: 112px;
color:#fff
`;

Wrap.LeftIcons =styled.div`
display: flex;
align-items: center;
background-color: black;
width: 100%;
height: 100px;
color:#fff
`;
Wrap.Top = styled(top)`

`;
Wrap.leftone = styled(left1)` 
color: #fff;
width:18px;
height:14px;
margin: 0 30px 0 20px`;

Wrap.Red = styled(Red)`
margin-right: 10px;
width:29px;
height:20px;`

Wrap.Play = styled(play)`
color: #fff;
background-color: white;
width:7px;
height:9px;`;

/* Wrap.Tube = styled.input`` */

Wrap.Input = styled.input`
margin-left: 150px;
width: 500px;
height: 32px;
color:white;
background-color: white;
background: #000000;
border: 1px solid rgba(255, 255, 255, 0.2);
box-sizing: border-box;
border-radius: 2px 0px 0px 2px;
`
Wrap.Search = styled(search)`
box-sizing:border-box;
padding:5px;
background: rgba(255, 255, 255, 0.6);
width:40px;
height:30px;`

Wrap.Camera = styled(camera)`
margin-left:150px;
margin-right: 10px;
margin-left:px;
background: #000;;
width:29px;
height:20px;`

Wrap.Kub = styled(Kub)`
margin-right: 10px;
background: #000;;
width:29px;
height:20px;`;

Wrap.Qong = styled(qong)`
margin-right: 10px;
background: #000;;
width:29px;
height:20px;`

Wrap.Rasm = styled(Photo)`
margin-right: 10px;
background: black;
width:32px;
height:30px;
border-radius: 32px;`

Wrap.Buttom1 = styled.div`
background-color: rgba(255, 255, 255, 0.2);
;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
display:flex;
flex: 1;
align-items: center;
justify-content: center;
height: 40px;
`

Wrap.Buttom2 = styled.div`
height: 56px;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
display: flex;
flex: 5;
flex-direction: row;
background: #212121;`

Wrap.Btn = styled.button`
color: white;
height: 25px;
background: rgba(255, 255, 255, 0.2);
border: 1px solid rgba(255, 255, 255, 0.4);
box-sizing: border-box;
border-radius: 15px;

:focus{
background-color: rgba(255, 255, 255, 0.8);;
}
`
Wrap.Sub =styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: black;
width: 100%;
height: 56px;
color:#fff;
`;