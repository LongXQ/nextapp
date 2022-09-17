import styles from './tagnavigator.module.css'
import { useState, useEffect } from 'react'

export default function tagnavigator() {
    var data = [
        {
            "title": "全部",
            "href": "/"
        },
        {
            "title": "前端",
            "href": "/"
        },
        {
            "title": "Javascript",
            "href": "/"
        },
        {
            "title": "Vue.js",
            "href": "/"
        },
        {
            "title": "React",
            "href": "/"
        },
        {
            "title": "CSS",
            "href": "/"
        },
        {
            "title": "HTML",
            "href": "/"
        },
        {
            "title": "Node.js",
            "href": "/"
        },
        {
            "title": "Typescript",
            "href": "/"
        },
        {
            "title": "前端框架",
            "href": "/"
        },
        {
            "title": "Typescript",
            "href": "/"
        }
    ]

    const [currentData, setCurrentData] = useState(data.slice(0, 4))

    const [unfold, setUnfold] = useState(true)

    const [index, setIndex] = useState(0)

    useEffect(()=>{
        if (unfold) {
            setCurrentData(data.slice(0, 4))
        }else {
            setCurrentData(data)
        }
    }, [unfold])

    return (
        <nav role="navigation" className={`${styles.tag_nav}`}>
            <ul className={`${styles.nav_list} ${styles.tag_list}`}>
                {
                    currentData.map((item, i) =>
                        <li key={i} className={`${styles.nav_item} ${styles.tag} ${index == i ? styles.active : ''}`} onClick={() => setIndex(i)}>
                            <a>{item.title}</a>
                        </li>
                    )
                }
                <li className={`${styles.nav_item} ${styles.tag} ${unfold?styles.unfold:styles.fold}`} onClick={()=> setUnfold(!unfold)}>
                    {unfold?'展开':'收起'}
                </li>
            </ul>
        </nav>
    )
}