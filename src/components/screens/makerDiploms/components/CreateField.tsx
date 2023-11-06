import React, {useState} from "react";

const CreateField = (props:any) => {
    const [fieldPos, setfieldPos] = useState({x: 0, y: 0});

    if (typeof document !== 'undefined') {
        let element = document.getElementById(props.id);
        element?.addEventListener('click', function (event) {
            const id = this.id;
            console.log(id);
        });      
    }    

    return(
        <div>
            <div id={props.id} style={{
                width: '620px',
                position: 'relative',
                top: fieldPos.y,
                textAlign: 'center',
                display: 'inline-block',
                whiteSpace: 'pre',
                }}>
                {props.value}
            </div>
        </div>
    );
}
export default CreateField;
