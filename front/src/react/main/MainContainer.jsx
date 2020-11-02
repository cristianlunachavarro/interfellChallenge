import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import Main from './Main'
import {useHistory} from 'react-router-dom'

const MainContainer = () => {
    let history = useHistory()

   const user = useSelector((state) => state.userReducer.user)
   const info = useSelector((state) => state.userReducer.info)
   const message = useSelector((state) => state.userReducer.message)
   
   useEffect(()=>{
        if (!user._id) {
            history.push('/acceder')
        }
   })

  return(
      <Main
      user={user}
      info={info}
      message={message}
      />
  )
}

export default MainContainer