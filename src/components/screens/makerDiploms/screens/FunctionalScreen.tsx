import styles from "./FunctionalScreen.module.css"
import useStore from "@/components/useStore";
import { Box, Button, FormControlLabel, Input, InputLabel, Stack, Switch } from '@mui/material';
import { useEffect, useRef, useState } from "react";
import CreateField from "../components/CreateField";

const testData = [
    {FIO1: "text", FIO2: "text", FIO3: "text", couch1: "text", couch2: "text"},
    {FIO1: "teaaat", FIO2: "teaaat", FIO3: "teaaat", couch1: "teaaat", couch2: "teaaat"},
];

const FunctionalScreen = ()  => {
    const {setNameImage, nameImage, setFormat, format, setData, data, currentId} = useStore();
    const [idField, setIdField] = useState('');
    const [fontSize, setFontSize] = useState("20");
    const [fontColor, setFontColor] = useState("black");
    const [xpos, setXpos] = useState("50");
    const [ypos, setYpos] = useState("50");
    
    const idRef = useRef(idField);
    const dataRef = useRef(data);
    const fontSizeRef = useRef(fontSize);
    const fontColorRef = useRef(fontColor);
    const xposRef = useRef(xpos);
    const yposRef = useRef(ypos);

    console.log(data.length);
    // // async function findData() {
useEffect(() => {

        for(let i=0; i<data.length; i++) {
        // data.forEach((element: any) => {
            if(data[i][0]===currentId)
            {
                console.log("ifffffff")
                setFontSize(data[i][1]);
                setFontColor(data[i][2]);
                setXpos(data[i][3]);
                setYpos(data[i][4]);
                break;
            }
            console.log("elem", data[i]);
        }}, [])
    // // }

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

    useEffect (()=> {
        idRef.current = idField;
        fontSizeRef.current = fontSize;
        fontColorRef.current = fontColor;
        xposRef.current = xpos;
        yposRef.current = ypos;
        dataRef.current = data;
        console.log(data);
    }, [[idField], [fontSize], [fontColor], [xpos], [ypos], [data]])
    
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
                <Input value={idField} type="text" onChange={(e) => setIdField(e.target.value)}/>
                {/* <CreateField id={idField} value={idField}></CreateField> */}
                <Button onClick={()=> setData([idField, fontSize, fontColor, xpos, ypos]) }>Создать поле</Button>
            </Stack>
    </>
    )
}

export default FunctionalScreen;