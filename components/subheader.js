import styles from './subheader.module.css'

import { useState, useEffect } from 'react'

export default function subheader() {
    var data = [
        {
            "title": "综合",
            "active": true,
            "href": "/"
        },
        {
            "title": "后端",
            "href": "/"
        },
        {
            "title": "前端",
            "href": "/"
        },
        {
            "title": "Andorid",
            "href": "/"
        },
        {
            "title": "iOS",
            "href": "/"
        },
        {
            "title": "人工智能",
            "href": "/"
        },
        {
            "title": "开发工具",
            "href": "/"
        },
        {
            "title": "代码人生",
            "href": "/"
        },
        {
            "title": "阅读",
            "href": "/"
        }
    ]

    const [clicked, setClicked] = useState(0);

    return (
        <nav role="navigation" className={styles.view_nav}>
            <div className={`${styles.nav_list} ${styles.left}`}>
            {
                data.map((item, index) => 
                    <a className={`${styles.nav_item} ${clicked==index?styles.active:''}`} onClick={()=>setClicked(index)}>
                        <div className="category-popover-box" >
                            {item.title}
                        </div>
                    </a>                      
                )
            }
            </div>
        </nav>
    )

}
