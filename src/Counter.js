import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  let [like, setLike] = useState(10);
  let [disLike, setDislike] = useState(10);
  return (
    <div className="counter-container">
      <IconButton className="like-disLike" onClick={() => { setLike(like + 1) }} aria-label="like movie" color="primary">
        <Badge badgeContent={like} color="primary"> 👍 </Badge>
      </IconButton>
      <IconButton className="like-disLike" onClick={() => { setDislike(disLike + 1) }} aria-label="dislike movie" color="error">
        <Badge badgeContent={disLike} color="error"> 👎 </Badge>
      </IconButton>
    </div>
  );
}