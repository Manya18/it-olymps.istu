import styles from "./FunctionalScreen.module.css"
import useStore from "@/components/useStore";
import { Box, Button, FormControlLabel, Input, InputLabel, Stack, Switch } from '@mui/material';
import { useState } from "react";


const FunctionalScreen = ()  => {

    const {setFontSize, fontSize, setFontColor, fontColor, setXpos, xpos, setYpos, ypos, setNameImage, nameImage} = useStore();
    const [checked, setChecked] = useState(false);
    let wid = 40; // для горизонтального
    function readFile(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
              reader.onload = (function (file) {
          return function (e) {
            var r = e.target;
            setNameImage(r.result);
          };
        })(file);
        // получает URL файла
        reader.readAsDataURL(file);
    }
    // переключаемся на горизонтальную раскладку
    if (checked) wid = 80;
    return(
    <>
        <Stack direction="row">
            <Stack direction="column" className={styles.screen}>
                <InputLabel> Font size </InputLabel>
                <Input id="input" value={fontSize} type="number" onChange={(e) => setFontSize(e.target.value)} />

                <InputLabel> Font color </InputLabel>
                <Input id="input" value={fontColor} type="string" onChange={(e) => setFontColor(e.target.value)} />

                <InputLabel> X position </InputLabel>
                <Input id="input" value={xpos} type="number" onChange={(e) => setXpos(e.target.value)} />

                <InputLabel> Y position </InputLabel>
                <Input id="input" value={ypos} type="number" onChange={(e) => setYpos(e.target.value)} />

                <FormControlLabel checked={checked} control={<Switch />} label="Вертикально/Горизонтально" onChange={(e) => setChecked(e.target.checked)} />
                <InputLabel> Загрузить изображение </InputLabel>
                <Input type="file" onChange={(e)=> readFile(e)}/>
            </Stack>
            <div className={styles.preview} style={{backgroundImage: `url(${nameImage})`, width: `${wid}vw`}}/>
        </Stack>
        <Button>dcs</Button>
        <div style={{ fontSize: `${fontSize}px`, color: fontColor, position: 'fixed', left: `${xpos}vw`, top: `${ypos}vh` }}>tttt</div>
    </>
    )
}

export default FunctionalScreen;