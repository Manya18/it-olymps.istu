import styles from "./FunctionalScreen.module.css"
import useStore from "@/components/useStore";
import { Box, Button, FormControlLabel, Input, InputLabel, Stack, Switch } from '@mui/material';
import { useState } from "react";


const FunctionalScreen = ()  => {

    const {setFontSize, fontSize, setFontColor, fontColor, setXpos, xpos, setYpos, ypos, setNameImage, nameImage, setFormat, format} = useStore();
    const [checked, setChecked] = useState(false);
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
    return(
    <>
            <Stack direction="column" className={styles.screen}>
                <InputLabel> Font size </InputLabel>
                <Input id="input" value={fontSize} type="number" onChange={(e) => setFontSize(e.target.value)} />

                <InputLabel> Font color </InputLabel>
                <Input id="input" value={fontColor} type="string" onChange={(e) => setFontColor(e.target.value)} />

                <InputLabel> X position </InputLabel>
                <Input id="input" value={xpos} type="number" onChange={(e) => setXpos(e.target.value)} />

                <InputLabel> Y position </InputLabel>
                <Input id="input" value={ypos} type="number" onChange={(e) => setYpos(e.target.value)} />

                <FormControlLabel checked={format} control={<Switch />} label="Вертикально/Горизонтально" onChange={(e) => setFormat(e.target.checked)} />
                <InputLabel> Загрузить изображение </InputLabel>
                <Input type="file" onChange={(e)=> readFile(e)}/>
            </Stack>
    </>
    )
}

export default FunctionalScreen;