import * as postService from '../../../../services/postService'

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const VoteHandler = ({ user, postId, iterationsArr, setIterationsArr, iteration }) => {
  const voteArr = iteration.votes.map((v) => v.profileId)

  const handleVote = async (vote) => {
    const res = await postService.castVote(postId, iteration._id, vote)
    setIterationsArr(iterationsArr.map((iter) => iter._id === iteration._id ? res : iter))
  }

  const undoVote = async () => {
    const res = await postService.undoVote(postId, iteration._id)
    setIterationsArr(iterationsArr.map((iter) => iter._id === iteration._id ? res : iter))
  }

  return (
    <div>
      {!voteArr.includes(user.profile)
        ? <>
            <button className='det-btn' onClick={() => handleVote(1)}>
              <ArrowDropUpIcon />
            </button>
            <button className='det-btn' onClick={() => handleVote(-1)}>
              <ArrowDropDownIcon />
            </button>
          </>
        : <button onClick={undoVote}>Undo Vote</button>
      }
    </div>
  )
}

export default VoteHandler