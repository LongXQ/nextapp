import styles from './category.module.css'

export default function category() {
    var data = [
        {
            "title": "综合",
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

    return (
        <div className={styles.category_popover}>
            <nav className={styles.tag_nav}> 
                <ul className={styles.tag_list}>
                    {
                        data.map((item, index) => 
                            <li key={index} className={styles.tag}>
                                <a href={item.href}>{item.title}</a>
                            </li>
                        )
                    }
                </ul>
            </nav>

        </div>
    )
}