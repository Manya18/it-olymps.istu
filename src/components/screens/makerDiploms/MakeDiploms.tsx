import { Stack } from "@mui/material";
import FunctionalScreen from "./screens/FunctionalScreen";
import PreviewScreen from "./screens/PreviewScreen";

const MakeDiploms = ()  => {
    return(
        <Stack direction={"row"}>
            <FunctionalScreen/>
            <PreviewScreen/>
        </Stack>
    )
}

export default MakeDiploms;