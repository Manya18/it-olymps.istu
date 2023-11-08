import useStore from "@/components/useStore";
import styles from "./PreviewScreen.module.css"
import { PDFExport } from "@progress/kendo-react-pdf";
import { Button } from "@progress/kendo-react-buttons";
import { useRef } from 'react';
import CreateField from "../components/CreateField";

const testData = [
    {FIO1: "text", FIO2: "text", FIO3: "text", couch1: "text", couch2: "text"},
    {FIO1: "teaaat", FIO2: "teaaat", FIO3: "teaaat", couch1: "teaaat", couch2: "teaaat"},
];
// нужно, чтобы при нажатии на поле менять параметры поля
// if (typeof document !== 'undefined') {
//     let element = document.getElementById("test");
//     element?.addEventListener('click', function (event) {
//         const id = this.id;
//         console.log(id);
//     });      
// }    

const PreviewScreen = ()  => {

    const { nameImage, format, data} = useStore();
    // для выбра формата
    let wid = 40; // для горизонтального
    // переключаемся на горизонтальную раскладку
    if (format) wid = 80;
    // для экспорта
    const pdfExportComponent = useRef(null);
    const onExportWithComponent = () => { 
        pdfExportComponent.current.save(); 
    }; 
    return (
        <div>
            <PDFExport fileName={'test'} ref={pdfExportComponent}>
                <div className={styles.preview} style={{backgroundImage: `url(${nameImage})`, width: `${wid}vw`}}/>
                {/* <div id="test" style={{ fontSize: `${fontSize}px`, color: fontColor, position: 'fixed', left: `${xpos}vw`, top: `${ypos}vh` }}>tttt</div> */}
                {Object.entries(data).map((d) => 
                
                    (
                <CreateField id={d[1][0]} value={d[1][0]} data={d[1]}></CreateField>))}
            </PDFExport>
            <Button className={styles.export} onClick={onExportWithComponent}>Экспортировать</Button>
        </div>
    )
}

export default PreviewScreen;