import { CardActionArea, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import React from 'react'

const TarjetaRecommend = ({el}) => {
  return (
      <Card>
        <CardActionArea>
            <Typography variant="body1">{el.title}</Typography>
        </CardActionArea>
      </Card>
    
  )
}

export default TarjetaRecommend