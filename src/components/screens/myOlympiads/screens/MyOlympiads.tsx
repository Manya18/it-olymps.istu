import Layout from "@/components/layout/Layout";
const PastOlymps = 'src/pages/myOlympiadsPast';
const AllOlymps = 'src/pages/myOlympiadsAll'
import styles from "./MyOlympiads.module.css";
import { Button, Input, InputLabel, LinearProgress, MenuItem, Select, Stack, List, ListItem, ListItemText, ListItemButton, Collapse} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const MyOlympiads = () => {
    return (
        <Layout>
            
             <div className={styles.blocksPart}>
                <div className={styles.buttonsPart}>
                    <Button className={styles.buttonOlymp}>Все олимпиады</Button>
                    <Button className={styles.buttonOlymp}>Прошедшие олимпиады</Button>
                </div>
                <List className={styles.itemWidth}>
                    <ListItem>
                        <ListItemText primary='Октябрь 2023'/>
                        {open() ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    {/* <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="2 тур"/>
                        </ListItemButton>
                        </List>
                    </Collapse> */}
                </List>
             </div>
        </Layout>
        
    )
}

export default MyOlympiads;