import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  imageStyle: {
    width: "100%"
  },
});

export default function Banner() {
  const classes = useStyles();

  return (
        <img className={classes.imageStyle} src='images/banner-image.png'  ></img>
  )
}
