import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/turbopack.svg'
import styles from './Menu.module.css'

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.logo}>
                <img src={logoImg} alt="" height="55" width="150" />
            </div>
            <div className={styles.btn_quo}>
                <button>CANDIDATES</button>
                <button>BLOG</button>
                <button>EVENTS</button>
                <button>CONTACTS</button>
            </div>
            <div className={styles.lef_btn}>
                <button className={`${styles.btn_crf} ${styles.create}`}>Create+</button>
                <Link to='/find'>
                    <button className={`${styles.btn_crf} ${styles.find}`}>Find⟶</button>
                </Link>
            </div>
        </div>
    );
}

export default Menu