import { useContext } from 'react'
import { FaTimesCircle } from 'react-icons/fa';

import AlertContext from "../../context/alert/AlertContext"

function Alert() {

  const { alert } = useContext(AlertContext)


  return (
      <div>
        <strong>{alert && alert.msg}</strong>
      </div>
  )
}

export default Alert