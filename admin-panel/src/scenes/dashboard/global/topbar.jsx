import { Box , IconButton , useTheme } from "@mui/material";

import { useContext } from "react";

import { ColorModeContext ,tokens } from "../../../theme";

import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Topbar = () => {
    const theme = useTheme
    const colors = tokens(theme.palette.mode);
    const ColorMode = useContext(ColorModeContext);

    return <Box display="flex" 
    justifyContent= "space-between" p={2}>

        <Box
           display = "flex" backgroundColor = {colors.primary[400]}
           borderRadius = "3px">

                <IconButton>
                 <SearchOutlinedIcon/>
                </IconButton>
        </Box>
{/*ICONS*/}

<Box display="flex">
    <IconButton onClick = {ColorMode.toggleColorMode}> 
    {theme.palette.mode === 'dark' ?(
        <NightsStayOutlinedIcon/>
    )
   : ( <LightModeOutlinedIcon/> 
   )}

    </IconButton>
</Box>


        <IconButton sx= {{display: "flex"}}></IconButton>
    </Box>

}

export default Topbar;