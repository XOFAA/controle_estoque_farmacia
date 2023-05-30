import { Box, Button, Card, Divider, IconButton, InputAdornment, MenuItem, TextField, Typography } from "@mui/material"
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export const Login =() => {

    const opcoes=[
        {
            'label':'Administrador'
        },
        {
            'label':'CRF-Farmaceutico'
        }
    ]

    const [usuario,setUsuario]=useState()

    const [opcaoSelecionada,setOpcaoSelecionada]=useState();

    const [senha,setSenha]=useState()

    const [crf,setCrf]=useState()
    
    const [verSenha,setVerSenha]=useState(false)


    return(
        <Box sx={{width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
     

       
        <Card sx={{display:'flex',justifyContent:'center',height:'400px',width:'400px'}}>

                <Box sx={{padding:5,display:'flex',flexDirection:'column',gap:2}}>
                <Typography><Divider>Tela de Login</Divider></Typography>

                <TextField
                 id="outlined-select-currency"
                select
                label='Select'
                helperText="Por favor selecione opcão de login!"
                onChange={(e)=>setOpcaoSelecionada(e.target.value)}
                >
              {opcoes.map((op)=>(
                <MenuItem key={op.label} value={op.label}>
                   
                    {op.label}
                </MenuItem>
              ))}
                </TextField>

                {opcaoSelecionada=='CRF-Farmaceutico'&& <TextField
                label='CRF'
                
                />}
                 {opcaoSelecionada =='Administrador' && <TextField
                label='nome'   
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                        
                      </InputAdornment>
                    ),
                  }}
                />}
                  <TextField
                label='senha' 
                type={verSenha ? 'text': 'password'}

                InputProps={{
                endAdornment:(
                    <InputAdornment position="end">
                    <IconButton onClick={()=>verSenha ? setVerSenha(false) :setVerSenha(true) }>
                     {verSenha? <Visibility/> : <VisibilityOff/>}   
                    
                    </IconButton>
                    </InputAdornment>
                )
                }}
                  
                />

                <Button>Logar</Button>
                </Box>
                
        </Card>
       
        </Box>
    )

}