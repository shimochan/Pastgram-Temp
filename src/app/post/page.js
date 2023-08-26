import { Grid, Container, Typography, Button, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Footer } from "../components/Footer";
import styles from './style.module.css';

const Post = () => {
    return (
        <>
            <Grid className={styles.post} container direction="column">
                <Grid item xs={1}>
                    <div className={styles.share}>
                        <IconButton><ArrowBackIosNewIcon/></IconButton>
                        <Button>share</Button>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className={styles.photo}></div>
                </Grid>
                <Grid item xs={1}>
                    <Container className={styles.info}>
                        <Typography>日時を追加</Typography>
                    </Container>
                </Grid>
                <Grid item xs={1}>
                    <Container className={styles.info}>
                        <Typography>音楽を追加</Typography>
                    </Container>
                </Grid>
            </Grid>
            <Footer/>
        </>
    )
}

export default Post;