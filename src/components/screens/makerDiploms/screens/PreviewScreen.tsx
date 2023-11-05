import useStore from "@/components/useStore";
import styles from "./PreviewScreen.module.css"
import { PDFExport } from "@progress/kendo-react-pdf";
import { Button } from "@progress/kendo-react-buttons";
import { useRef } from 'react';

const testData = [
    {text: "text"},
    {text: "apapa"}
]

const PreviewScreen = ()  => {

    const { nameImage, format, fontSize, fontColor, xpos, ypos} = useStore();
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
                <div style={{ fontSize: `${fontSize}px`, color: fontColor, position: 'fixed', left: `${xpos}vw`, top: `${ypos}vh` }}>tttt</div>
            </PDFExport>
            <Button className={styles.export} onClick={onExportWithComponent}>Экспортировать</Button>
        </div>
    )
}

export default PreviewScreen;