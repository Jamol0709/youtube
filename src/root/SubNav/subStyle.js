import styled from "styled-components";
// import { ReactComponent as Left } from '../../assets/icons/Menu-Autolayout.svg';
import { ReactComponent as Compas } from '../../assets/icons/compus.svg';
import { ReactComponent as LIcon } from '../../assets/icons/LiveIcon.svg';
import { ReactComponent as PPhoto } from '../../assets/icons/Profile-Photo.svg';
import { ReactComponent as BPoint } from '../../assets/icons/BluePoint.svg';


export const SubS = styled.div`
display: flex;
flex: 1;
height: fit-content;
/* width: 240px; */
flex-direction: column;
background-color: #212121;
color: #fff;
`
export const litWrap = styled.div`
display: flex;
justify-content: center;
/* justify-content: space-between; */
align-items: center;
height: 30px;
flex-direction: row;
`
export const ProfilePhoto = styled(PPhoto)`
margin:10px;`
export const  LiveIcon = styled(LIcon)`
margin:10px`;
export const BluePoint = styled(BPoint)`
margin:10px;
`
// SubS.Top = styled(Left)``
export const Compus = styled(Compas)`
margin:10px 20px 0px 20px`;
