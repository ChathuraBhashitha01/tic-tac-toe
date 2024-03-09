import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './style.css'

export default function HomePage() {
    const [spacing, setSpacing] = React.useState(2);

    const jsx = `
  <Grid container spacing={${spacing}}>
  `;
  
    return (
        <div className='background'>
        <h1 className='txtGameName'>Tic Tac Toe</h1>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid className='firstGrid' container justifyContent="center" spacing={spacing}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <button className='btnClick'/>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <button className='btnClick'/>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <button className='btnClick'/>
              </Grid>
            ))}
          </Grid>
        </Grid>
        
  
      </Grid>
      </div>
    );
}
