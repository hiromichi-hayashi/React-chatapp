import {
  Card,
  Typography,
  CardHeader,
  CardContent,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    width: '300px',
    padding: '15px',
    margin: '10px',
  },
});

const ChatItem = ({ username, content, onClick, isAuthor }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title={username}
        action={
          isAuthor && (
            <Button onClick={onClick} variant='contained'>
              削除
            </Button>
          )
        }
      />
      <CardContent>
        <Typography>{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default ChatItem;
