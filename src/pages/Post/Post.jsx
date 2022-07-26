import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import CheckBox from '@mui/material/Checkbox'
import Rating from '@mui/material/Rating'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as Diamond } from '../../assets/diamond-icon.svg'


import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorderOutlined'
import BookmarkIcon from '@mui/icons-material/Bookmark'

import { ratingOptions } from '../../styles/theme'
import { styled } from '@mui/material/styles'

const StyledRating = styled(Rating)(ratingOptions)

const Post = ({ user, post }) => {
  return (
      <Card 
        sx={{ maxWidth: 275, minHeight: 325 }} 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexDirection: 'column',
          backgroundColor: 'rgb(18,18,18)',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))'
        }}>
        <CardContent>
          <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginBottom: '1rem'
          }}>
            <Typography 
              sx={{ 
                fontSize: '14',
                WebkitBoxOrient: 'vertical', 
                WebkitLineClamp: 1, 
                overflow: 'hidden',
                display: '-webkit-box'
              }} 
              color="text.secondary"
              gutterBottom
            >
              {post.post}
            </Typography>
            <StyledRating 
              name="rating" 
              value={post.rating} 
              readOnly 
              max={4}
              defaultValue={4}
              style={{ display: 'flex', alignItems: 'center' }}
              icon={ <SvgIcon fontSize='inherit'> <Diamond /> </SvgIcon> }
              emptyIcon={< SvgIcon fontSize='inherit'> <Diamond /> </SvgIcon> }
            />
          </Box>
          <Typography sx={{ 
            WebkitBoxOrient: 'vertical', 
            WebkitLineClamp: 6, 
            overflow: 'hidden', 
            display: '-webkit-box',} 
          }>
           {post.text}
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent:'space-between' }}>
          <Typography>
            08/07/22
          </Typography>
          <CheckBox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
        </CardActions>
      </Card>
  )
}
 
export default Post;