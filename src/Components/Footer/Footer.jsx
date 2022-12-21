import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}> 
            <div> 
                <h1>Find The Next Step In Your Career</h1>
            </div>

            <div className={styles.blocks}> 
                <div className={styles.black_block}>
                    <h3>Reliable looking in any filled <span>⬈</span></h3>          
                </div>
                <div className={styles.green_block}>
                    <h5>Use the convenient candidate viewer <span>👤</span></h5>
                </div>
                <div className={styles.green_block}>
                    <h5>Add the best to your favorities <span>♡</span></h5>                  
                </div>
            </div>
        </div>
    )
}

export default Footer