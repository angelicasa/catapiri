import { Card, CardHeader, Typography, Grid } from "@mui/material";
import { Header } from "../../components/Header";
function Home() {
  return (
    <Grid container p={2} spacing={2}>
      <Grid item height={108} xs={12}>
        <Header />
      </Grid>
      <Grid item height={400} xs={12}>
        <Typography>Banner Destaque</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Cards Destaque</Typography>
        <Grid container>
          <Grid item height={250} xs={3}>
            <Card>
              <CardHeader title="Eventos" />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardHeader title="Como Separar" />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardHeader title="O Lixo" />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardHeader title="Rotas de Coleta" />
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item height={200} xs={12}>
        <Typography>Parceiros</Typography>
      </Grid>
      <Grid item height={500} xs={12}>
        <Typography>Notícias</Typography>
        <Grid container>
          <Grid item xs={4}>
            <Card>
              <CardHeader title="Notícia 1" />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader title="Notícia 2" />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader title="Notícia 3" />
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item height={200} xs={12}>
        <Typography>Footer</Typography>
      </Grid>
    </Grid>
    //</Box>
  );
}

export { Home };
