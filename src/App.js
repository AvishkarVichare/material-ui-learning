import React from "react";

import { CssBaseline, AppBar , Toolbar , Card , CardContent , CardMedia , Button , Typography , Grid } from "@mui/material";
import { Container } from "@mui/system";
import styled from "@emotion/styled";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
const cards = [1,2,3,4,5,6,7,8,9,10]

const App = ()=>{


    return(


        // for styling as you want  you can use either sx={{}} or styled Api 
        //in Toolbar component we have used sx={{}}
        
        <>
        <CssBaseline/>
        <AppBar position="relative">

        <Toolbar sx={{
            backgroundColor:"black"
        }}>
            <OndemandVideoIcon/>
        <Typography variant="h5">
            Hi
        </Typography>
        </Toolbar>

        </AppBar>

        <main>

            <div>

        <Container>


        <Typography variant="h2" align="center" gutterBottom color="textPrimary">
            Into
        </Typography>

        <Typography variant="div" align="center" color="textSecondary" paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit corporis repudiandae accusamus suscipit perspiciatis possimus a cumque repellendus sapiente odit harum impedit recusandae assumenda commodi, saepe pariatur iusto natus inventore architecto libero error aliquid! Debitis nesciunt voluptatum nihil?</Typography>

        <div>


        <Grid container  spacing={3} justifyContent="center">
            <Grid item>
               <Button color="primary" variant="contained">
                click
               </Button>
            </Grid>
            <Grid item>
               <Button color="secondary" variant="outlined">
                dont
               </Button>
            </Grid>
        </Grid>
        </div>


        </Container>
      


        </div>


            <Container sx={{marginTop:"30px"  }}>
        <div>


        {cards.map(()=>{

            
        })}


        <Grid  container spacing={3} >

            {
                cards.map((card)=>(

                    //xs sm md are properties of grid item which can used to give space to grid
            <Grid key={card} xs={12} sm={6} md={4} item>

                    <Card  sx={{marginBottom:"20px"}}>
                    <CardMedia sx={{paddingTop:"56.25%"}} image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
                    <CardContent>
                        <Typography color="textPrimary" variant="h2">
                        Random
                        </Typography>
                        <Typography color="textSecondary" variant="h6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A repudiandae deserunt id rem, impedit reiciendis ullam veniam. Distinctio, iure vero!
                        </Typography>
                    </CardContent>
        
                    </Card>
                    
            </Grid>

                    ))
            }


        </Grid>


        </div>

        </Container>


        </main>


        </>
    )

}

export default App 




