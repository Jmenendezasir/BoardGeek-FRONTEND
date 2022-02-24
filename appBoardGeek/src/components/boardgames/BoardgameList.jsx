import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { gql, useQuery } from '@apollo/client';


const GET_BOARDGAMELIST_QUERY = gql`
  query {
        boardgameList{
            id
            title
            thumbnail
            price
        }
    }
`

function BoardgameList() {
    const {data, error, loading} = useQuery(GET_BOARDGAMELIST_QUERY)

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    console.log(data)

    const cardBoardgames = () => {
        return(
            data.boardgameList.map(boardgame => {
                return(
                    <Grid item xs={3} sm={4} md={4} lg={3} key={boardgame.id}>
                        <Card sx={{ Width: 345, height: 450 }}>
                            <CardContent sx={{ Width: 345, height: 200 }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: 233,
                                        width: 350,
                                        maxHeight: { xs: 233, md: 167 },
                                        maxWidth: { xs: 350, md: 250 },
                                    }}
                                    image={boardgame.thumbnail}
                                />
                            </CardContent>
                            <CardContent sx={{ Width: 345, height: 100 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                {boardgame.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {boardgame.price}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ Width: 345, height: 25 }}>
                                <Button size="small">Comprar</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })
        )
    }

    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                {cardBoardgames()}
            </Grid>
        </Box>
      </div>
    );
  }
  
  export default BoardgameList;