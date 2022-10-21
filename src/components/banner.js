import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  imageStyle: {
    width: "100%",
    height: "728px"
  },
});

export default function Banner() {
  const classes = useStyles();

  return (
        <img className={classes.imageStyle} src='images/banner-image.jpg'  ></img>
  )
}
