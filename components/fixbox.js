

export default function fixbox() {

    var data = [
        {
            "title": "深圳[先行示范区]对在深圳打工的个人有哪些影响",
            "href": "/",
        },
        {
            "title": "JAVA轻量级错误码设计最佳实践",
            "href": "/",
        },
        {
            "title": "Python基础教程",
            "href": "/",
        },
        {
            "title": "热门算法大全",
            "href": "/",
        }

    ]
    return (
        <div className="fixbox top">
            <div className="list_box">
                <p className="title">
                    推荐
                    <span className="refresh">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M9.66667 6.66667C9.48257 6.66667 9.33333 6.51743 9.33333 6.33333V5.66667C9.33333 5.48257 9.48257 5.33333 9.66667 5.33333L11.8303 5.3334C10.987 4.12437 9.58586 3.33333 8 3.33333C5.42267 3.33333 3.33333 5.42267 3.33333 8C3.33333 10.5773 5.42267 12.6667 8 12.6667C10.1139 12.6667 11.8996 11.2611 12.4733 9.33358L13.8513 9.33355C13.2449 12.0054 10.8554 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C9.88507 2 11.5671 2.86932 12.6671 4.22893L12.6667 2.33333C12.6667 2.14924 12.8159 2 13 2H13.6667C13.8508 2 14 2.14924 14 2.33333V6C14 6.35145 13.728 6.63939 13.3831 6.66484L13.3333 6.66667H9.66667Z"
                                fill="#8A919F">
                            </path>
                        </svg>
                        换一换
                    </span>
                </p>
                <div className="theme_list">
                    {
                        data.map((item, index) => 
                            <a href="/pin/topic/7134608835959848967" className="item" target="_blank">
                                <p className="content">
                                    <span>
                                        {item.title}
                                    </span>
                                </p>
                                {/* <p className="hot">1k+</p> */}
                            </a>
                        )
                    }
                </div>
            </div>

            <a className="guide-link" href="/book/5c90640c5188252d7941f5bb/section/5c90673ee51d452a0748c424" target="_blank">
                欢迎光临本站
            </a>

            <style jsx>{`
            .list_box {
                background: #fff;
                border-radius: 4px;
                margin-top: 16px;
                -webkit-box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
                box-shadow: 0 1px 3px rgba(18,18,18,.1);
            }

            .refresh, .title {
                display: flex;
                align-items: center;
            }

            .title {
                justify-content: space-between;
                line-height: 56px;
                padding: 0 20px;
                font-weight: 500;
                font-size: 16px;
                color: #1d2129;
                border-bottom: 1px solid #e4e6eb;
                margin: 0;
            }

            .refresh {
                font-size: 14px;
                line-height: 20px;
                text-align: right;
                color: #8a919f;
                cursor: pointer;
            }

            .refresh svg{
                margin-right: 4px;
            }

            .theme_list {
                padding: 16px 20px;
            }

            .theme_list .item {
                // height: 22px;
                // margin-top: 12px;
                margin-bottom: 12px;
                display: flex;
                align-items: center;
            }

            .theme_list .content {
                // flex-grow: 1;
                // margin: 0;
                // display: -webkit-box;
                // overflow: hidden;
                // text-overflow: ellipsis;
                // -webkit-box-orient: vertical;
                // -webkit-line-clamp: 1;

                font-size: 14px;
                color: #515767;
                // word-break: break-all;
                word-break: break-word;
                display: inline;
                line-height: 21px;
                color: #175199;
                
            }

            .theme_list .content .tag {
                width: 16px;
                height: 16px;
                margin-bottom: 2px;
                vertical-align: middle;
            }

            .theme_list .content-label {
                font-size: 14px;
                color: #515767;
                word-break: break-all;
            }

            .theme_list .hot {
                flex-shrink: 0;
                font-size: 12px;
                color: #8a919f;
                padding-left: 30px;
            }

            .theme_list p {
                margin: 0;
            }

            .item:hover .content {
                color: #1e80ff;
            }

            .guide-link {
                display: block;
                line-height: 72px;
                border-radius: 4px;
                font-weight: 500;
                font-size: 16px;
                padding-left: 108px;
                color: #515767;
                margin-top: 20px;
                background-image: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/guide.1535752.png);
                background-color: #fff;
                background-size: 80px;
                background-repeat: no-repeat;
                background-position: 33px -1px;
                -webkit-box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
                box-shadow: 0 1px 3px rgba(18,18,18,.1);
            }
            
            `}

            </style>
        </div>
    )
}