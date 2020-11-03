import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Main from './Main'
import {useHistory} from 'react-router-dom'
import { getWalletInfo } from '../../redux/actions/wallet-actions'

const MainContainer = () => {
    let history = useHistory()
    const dispatch = useDispatch()

   const user = useSelector((state) => state.userReducer.user)
   const amount = useSelector((state) => state.walletReducer.amount)
   const transactions = useSelector((state) => state.walletReducer.transactions)
   const message = useSelector((state) => state.userReducer.message)
   
   useEffect(()=>{
        if (!user._id) {
            history.push('/acceder')
        }
   })

   useEffect(() => {
       dispatch(getWalletInfo(user.username))
   }, [])

  return(
      <Main
      user={user}
      amount={amount}
      transactions={transactions}
      message={message}
      />
  )
}

export default MainContainer