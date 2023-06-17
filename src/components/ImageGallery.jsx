import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import itemData from '../data/galleryData';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageGallery() {
  return (
    <>
    <div style={{ height: 100 , display: 'flex',  }}>
        <div
        style={{
          flex: '1',
        //   overflow: 'auto',
        //   paddingLeft: '107px',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE and Edge
          '&::-webkit-scrollbar': {
            width: '0.4em',
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'transparent',
          },
        }}
      >

        <ImageList
        sx={{
            // flex: '1',
            // width: 500,
            margin :0,
            height: 800,
            // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
            transform: 'translateZ(0)',
        }}
        rowHeight={600}
        gap={0}
        >
        {itemData.map((item) => {
            const cols = item.featured ? 2 : 1;
            const rows = item.featured ? 2 : 1;

            return (
            <ImageListItem key={item.img} cols={cols} rows={rows}>
                <img
                {...srcset(item.img, 2000, 1600, rows, cols)}
                alt={item.title}
                loading="lazy"
                />
                <ImageListItemBar
                sx={{
                    background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={item.title}
                position="top"
                actionIcon={
                    <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`star ${item.title}`}
                    >
                    <StarBorderIcon />
                    </IconButton>
                }
                actionPosition="left"
                />
            </ImageListItem>
            );
        })}
        </ImageList>
    </div>
    </div>
    </>
  );
}

