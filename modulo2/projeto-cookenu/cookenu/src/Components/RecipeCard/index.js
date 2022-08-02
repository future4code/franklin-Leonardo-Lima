import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export default function MediaCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        minWidth: 350,
        minHeight: 280,
        maxHeight: 280,
        marginBottom: 1,
        marginLeft: 1,
        marginRight: 1,
      }}
    >
      <CardMedia component='img' height='200' image={props.image} />
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          {props.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  )
}
