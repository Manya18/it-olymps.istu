import useStore from "@/components/useStore";
import React, {useState} from "react";

const CreateField = (props:any) => {
    const [fieldPos, setfieldPos] = useState({x: 0, y: 0});
    const {data, setCurrentId, currentId} = useStore();
    addEventListener("dblclick", (event) => {
        if(event.target)
        setCurrentId(event.target.id);
        console.log("event", currentId, event.target.id)
    });

    return(
        <div>
            <div key={props.id} id={props.id} style={{
                fontSize: `${props.data[1]}px`, 
                color: props.data[2], 
                position: 'fixed', 
                left: `${props.data[3]}vw`, 
                top: `${props.data[4]}vh`,
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
