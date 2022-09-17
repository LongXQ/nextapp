import styles from './listbox.module.css'

import Bookcard from './bookcard'


function SimpleListBox() {
    var data = [
        {
            "content": "从前端到全栈",
            "href": "/",
            "img": "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63a19491ebe14783949200f3d5c306e0~tplv-k3u1fbpfcp-watermark.image?",
            // "count": "18赞 · 26评论"
        },
        {
            "content": "Java基础知识",
            "href": "/",
            "img": "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63a19491ebe14783949200f3d5c306e0~tplv-k3u1fbpfcp-watermark.image?",
            // "count": "18赞 · 26评论"
        }
    ]
    return (
            <>
            {
                data.map((item, index) => 
                    <a href={item.href} className={styles.hot_item} target="_blank">
                        <div className={styles.hot_content}>
                            <p className={styles.content}>
                                {item.content}
                            </p>
                            {item.count?(<p className={styles.count}>{item.count}</p>):''}
                        </div>
                        {item.img?(<img src={item.img} />):''}
                    </a>           
                )
            }
            </>
    )
    
}

export default function listbox() {
    return (
        <div className={styles.list_box}>
            <p className={styles.title}>精选专栏</p>
            <div className={styles.hot_list}>
                <Bookcard  sideBar={true}></Bookcard>
                <Bookcard  sideBar={true}></Bookcard>
                <Bookcard  sideBar={true}></Bookcard>
            </div>
        </div>
    )
}