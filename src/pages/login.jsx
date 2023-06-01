import { Box, Button, Card, Divider, IconButton, InputAdornment, MenuItem, TextField, Typography } from "@mui/material"
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";


export const Login =() => {

    const opcoes=[
        {
            'label':'Administrador'
        },
        {
            'label':'CRF-Farmaceutico'
        }
    ]

    const [loginAdmin,setLoginAdmin]=useState()
    
    const [opcaoSelecionada,setOpcaoSelecionada]=useState();

    const [senhaAdmin,setSenhaAdmin]=useState()

    const [logincrf,setLoginCrf]=useState()

     const [senha,setSenha]=useState()

    const [verSenha,setVerSenha]=useState(false)

    const navigate = useNavigate()

    const verificaUsuario =()=> {

      if(logincrf=='221' && senha=='221'){
      navigate('/farmaceutico/home')
      }else 
      if(loginAdmin=='admin' && senha=='admin') {
        navigate('/admin/home')
      }{
        console.log('usuario ou senha incorreta.')
      }
    }


    return(
        <Box sx={{width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
     

       
        <Card sx={{display:'flex',justifyContent:'center',height:'400px',width:'400px'}}>

                <Box sx={{padding:5,display:'flex',flexDirection:'column',gap:2}}>
                <Typography><Divider>Tela de Login</Divider></Typography>

                <TextField
               
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
                type="text"
                onChange={(e)=>setLoginCrf(e.target.value)}
                />}

                 {opcaoSelecionada =='Administrador' && <TextField
                label='nome'   
                type="text"
                onChange={(e)=>setLoginAdmin(e.target.value)}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                        
                      </InputAdornment>
                    ),
                  }}
                />}
                 { opcaoSelecionada && <TextField
                label='senha' 
                type={verSenha ? 'text': 'password'}
                onChange={(e)=>setSenha(e.target.value)}
                InputProps={{
                endAdornment:(
                    <InputAdornment position="end">
                    <IconButton onClick={()=>verSenha ? setVerSenha(false) :setVerSenha(true) }>
                     {verSenha? <Visibility/> : <VisibilityOff/>}   
                    
                    </IconButton>
                    </InputAdornment>
                )
                }}
                  
                />}

                <Button variant="contained" onClick={()=>verificaUsuario()}>Logar</Button>
                </Box>
                
        </Card>
       
        </Box>
    )

}