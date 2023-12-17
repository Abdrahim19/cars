import { Outlet } from "react-router-dom"
import styles from "../styles/styles"

const Authlayout = () => {
  return (
    <div className={`${styles.center_grid} bg-lcui_whiteSoft`}>
      <Outlet />
    </div>
  )
}

export default Authlayout