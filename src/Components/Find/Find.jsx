import React, { useState } from 'react'
import styles from './Find.module.css'

const Find = () => {
    const [avt, setAvt] = useState({
        login: "",
        password: "" 
    })
    return (
        <div className="avtorizate">
            <form className={styles.avtorize}> 
                 <input type="text" value={avt.login} />
                 <input type="text" value={avt.password} />
            </form>
        </div>
     );
}

export default Find