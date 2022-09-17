import styles from './header.module.css'

import { useState, useEffect } from 'react'


function phoneShowOnClick(ev) {
    ev.preventDefault();
    var svg = ev.currentTarget.childNodes[1];
    if(svg.classList.contains(styles.active)) {
        svg.classList.remove(styles.active);
    }else{
        svg.classList.add(styles.active);
    }

    var nextSibling = ev.currentTarget.nextSibling;
    if(nextSibling.classList.contains(styles.show)) {
        nextSibling.classList.remove(styles.show);
    }else{
        nextSibling.classList.add(styles.show);
    }
}

export default function header({props}) {
    var data = [
        {
            "title": "首页",
            "href": "/"
        },
        {
            "title": "沸点",
            "href": "/"
        },
        {
            "title": "课程",
            "tip": "上新",
            "href": "/"
        },
        {
            "title": "直播",
            "href": "/"
        },
        {
            "title": "活动",
            "href": "/"
        },
        {
            "title": "商城",
            "href": "/"
        },
        {
            "title": "APP",
            "href": "/"
        },
        {
            "title": "插件",
            "href": "/"
        }

    ]

    const [clicked, setClicked] = useState(0);

    return (
        <>
        <div className={styles.main_header_box}>
            <header data-fetch-key="0" className={`${styles.visible} ${styles.main_header}`}  visible="visible">
                <div className={styles.container} >
                    <a href="/" className={styles.logo} >
                        <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="稀土掘金" className={styles.logo_img}  /> 
                        <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg" alt="稀土掘金" className={styles.mobile}  />
                    </a>
                    <nav role="navigation" className={styles.main_nav}>
                        <ul className={styles.nav_list} >
                            <li className={styles.main_nav_list} >
                                <div className={`${styles.phone_show_menu} ${styles.isResourceVisible}`} onClick={phoneShowOnClick} >
                                    <span >首页</span> 
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.unfold16_icon} >
                                        <path d="M2.45025 4.82431C2.17422 4.49957 2.40501 4.00049 2.83122 4.00049H9.16878C9.59498 4.00049 9.82578 4.49957 9.54975 4.82431L6.38097 8.55229C6.1813 8.78719 5.8187 8.78719 5.61903 8.55229L2.45025 4.82431Z" ></path>
                                    </svg>
                                </div> 
                                <ul className={`${styles.phone_hide} ${styles.isResourceVisible}`}>
                                    {
                                        data.map((item, index) => 
                                            
                                            <li key={index} className={`${styles.nav_item} ${styles.link_item} ${clicked==index?styles.active:''}`} onClick={()=>setClicked(index)}>
                                                <a aria-current="page">
                                                    {item.title}
                                                    {item.tip != null?(<span className={styles.tablead}>{item.tip}</span>):null}
                                                </a>
                                            </li> 
                                        )
                                    }
                                </ul>
                            </li> 
                            {/* <ul className={styles.right_side_nav} >
                            </ul> */}
                        </ul>
                    </nav>
                </div> 
            </header>
        </div>
      </>
    )
  }