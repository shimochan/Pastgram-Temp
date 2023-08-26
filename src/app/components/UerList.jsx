import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItem';
import { Typography, Avatar } from '@mui/material';
import styles from './user_list.module.css';

const UserList = ({ users }) => {
    return (
      <List>
        {users.map((user) => (
          <ListItemButton key={user.name}>
            <Avatar className={styles.avatar}>{user.name[0].toUpperCase()}</Avatar>
            <Typography className={styles.name} variant="h6">{user.name}</Typography>
          </ListItemButton>
        ))}
      </List>
    );
};

export default UserList;
