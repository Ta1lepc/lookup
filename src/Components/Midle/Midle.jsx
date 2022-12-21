import React, {useState} from 'react'
import styles from './Midle.module.css'

const Midle = () => {
    const [slide, setSlide] = useState(1)
    const sequence = [1,2,3]
    return (
        <div className={styles.midle_block}> 
            <div className={styles.look_text}>
                <h1 className={styles.lookup}>Lookup.</h1>
                <h1>Interview.</h1>
                <h1>Hire!</h1>
            </div>

            <div className={styles.gallery}>
                <div className={`${styles.slide} ${slide === 1 ? styles.active : ""}`} style={{ background: "url('https://travelask.ru/system/images/files/000/333/092/wysiwyg/wind-turbines-wind-energy.jpg?1501623293')" }} onClick={() => setSlide(sequence[0]) }>
                    <div className={styles.txt_slide}><h3>Energy Engineering</h3></div>
                </div>
                <div className={`${styles.slide} ${slide === 2 ? styles.active : ""}`} style={{ background: "url('https://hameleone.ru/wp-content/uploads/c/6/a/c6a82e8e57ff4a7de6a72ff01cbfc27b.jpeg')" }} onClick={() => setSlide(sequence[1])}>
                    <div className={styles.txt_slide}><h3>Real Estate</h3></div>
                </div>
                <div className={`${styles.slide} ${slide === 3 ? styles.active : ""}`} style={{ background: "url('https://assets.new.siemens.com/siemens/assets/api/uuid:72a2162ee2337e0211184b50551082ca1263bdd0/width:2000/quality:high/7191-1602-energy-suite-160329-2-highres-cmyk.jpg')" }} onClick={() => setSlide(sequence[2])}>
                    <div className={styles.txt_slide}><h3>Industry</h3></div>
                </div>
            </div>

            <div className={styles.find_prof}> 
                <div className={styles.findbl}>Find Your Professional</div>
                <div className={styles.go}>Go</div>
            </div>
        </div>
    )  
}

export default Midle