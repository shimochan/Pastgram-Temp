import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItem'
import { Typography, Avatar, Button } from '@mui/material'
import styles from './user_list.modulecopy.css'

const UserRequest = ({ users }) => {
  return (
    <List>
      {users.map((user) => (
        <div className={styles.box}>
        <ListItemButton key={user.name} >
          <Avatar className={styles.avatar}>
            {user.name[0].toUpperCase()}
          </Avatar>
          <Typography className={styles.name} variant="h6">
            {user.name}
          </Typography>
            <div className={styles.button}>
            <Button className={styles.ok} variant="contained">
              承認
            </Button>
            <Button className={styles.no} variant="contained">
              削除
            </Button>
            </div>
        </ListItemButton>
        </div>
      ))}
    </List>
  )
}

export default UserRequest;
