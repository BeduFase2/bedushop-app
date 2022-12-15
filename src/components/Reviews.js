import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import StarIcon from '@mui/icons-material/Star';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from 'react-router';

import RestService from '../services/service';
import Layout from './Layout';

const theme = createTheme();

export default function Reviews() {
    const { id } = useParams();
    const [reviews, setReviews] = React.useState([]);

    React.useEffect(() => {
        const token = localStorage.getItem('token');
        RestService.getReviews(token).then(response => {
            setReviews(response.data.rows.filter(item => item.productId === +id));
        })
    }, [id]);

    return (
        <Layout children={
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <main>
                    <Box
                        sx={{
                            bgcolor: 'background.paper'
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                Reseñas
                            </Typography>
                        </Container>
                    </Box>
                    <Container sx={{ py: 8 }} maxWidth="md">
                        <Grid container spacing={4}>
                            {reviews.map((review, index) => (
                                <Grid item key={index} xs={12} sm={6} md={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                <StarIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={review.content}
                                                secondary={`Usuario: ${review.userId}`}
                                            />
                                        </ListItem>
                                    </List>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
            </ThemeProvider>
        }></Layout>
    );
}