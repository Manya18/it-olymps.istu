import styles from "./FunctionalScreen.module.css"
import useStore from "@/components/useStore";
import { Input, InputLabel } from '@mui/material';


const FunctionalScreen = ()  => {

    const {setFontSize, fontSize, setFontColor, fontColor, setXpos, xpos, setYpos, ypos} = useStore();
    return(
        <div >
            <InputLabel style={{fontSize: '5px'}}> Font size </InputLabel> 
            <Input id="input" value={fontSize} type="number" onChange={(e)=> setFontSize(e.target.value)}/>

            <InputLabel style={{fontSize: '5px'}}> Font color </InputLabel> 
            <Input id="input" value={fontColor} type="string" onChange={(e)=> setFontColor(e.target.value)}/>

            <InputLabel style={{fontSize: '5px'}}> X position </InputLabel> 
            <Input id="input" value={xpos} type="number" onChange={(e)=> setXpos(e.target.value)}/>

            <InputLabel style={{fontSize: '5px'}}> Y position </InputLabel> 
            <Input id="input" value={ypos} type="number" onChange={(e)=> setYpos(e.target.value)}/>

            <div style={{fontSize:`${fontSize}px`, color: fontColor, position: 'fixed', left: `${xpos}px`, top: `${ypos}px`}}>tttt</div>
        </div>
    )
}

export default FunctionalScreen;