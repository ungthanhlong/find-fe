
import styles from "@styles/Header.module.scss";


export default function Header() {
  return (
    <div className={`${styles["header"]}`}>
      <div className={`${styles["header-container"]}`}>
        <div className={`${styles["logo"]}`}>
          <div className={`${styles["logo-container"]}`}>
            <div className={`${styles["logo-image"]}`}>
              <div>
                <span>U</span>
              </div>
              <div>
                <span>Q</span>
              </div>
              <div>
                <span>N</span>
              </div>
              <div>
                <span>Y</span>
              </div>
            </div>
            <div className={`${styles["logo-name"]}`}>
            </div>
          </div>
        </div>
        <div className={`${styles["menu"]}`}>
          <ul className={`${styles["menu-list-item"]}`}>
            <li>Trang chủ</li>
            <li>Diễn đàn</li>
            <li>Thành viên</li>
          </ul>
        </div>
        <div className={`${styles["account"]}`}>
          <div className={`${styles["account-container"]}`}>
            <button className={`${styles["btn-style"]}`}>Đăng ký</button>
            <div className={`${styles["verti-divider"]}`}></div>
            <button className={`${styles["btn-style"]} ${styles["btn-primany"]}`}>Đăng nhập</button>
          </div>


        </div>



      </div>
    </div>
  )
}
