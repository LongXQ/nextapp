

export default function card() {
    return (
        <li data-growing-container="true" data-growing-title="entryList" className="item">
            <div className="entry" style={{ marginBottom: '0px' }}>
                <div className="meta-container">
                    <div className="tag_list">
                        <a href="/tag/%E5%90%8E%E7%AB%AF" target="_blank" rel="" className="tag">
                            后端
                        </a>
                        <a href="/tag/Java" target="_blank" rel="" className="tag">
                            Java
                        </a>
                    </div>
                </div>
                {/* <div className="content-wrapper">
                    <div className="content-main">
                        <div className="title-row">
                            <a href="/post/7138648965041356830" target="_blank" rel=""
                                title="JAVA轻量级错误码设计最佳实践" className="title">
                                JAVA轻量级错误码设计最佳实践
                            </a>
                        </div>
                        <div className="abstract">
                            <a href="/post/7138648965041356830"
                                target="_blank" rel="">
                                <div>
                                    概述目前公司团队项目中返回异常都没有错误码，如果遇到错误提示只会返回一个错误信息。随着微服务组...
                                </div>
                            </a>
                        </div>
                    </div>
                    <img
                        src="https://pic4.zhimg.com/v2-f523971495eae51efb08b2111097b609_bh.webp?source=d6434cab"
                        alt="JAVA轻量级错误码设计最佳实践" className="lazy thumb" loading="lazy" style={{}} />
                </div> */}

                <div className="title-row">
                    <a href="/post/7138648965041356830" target="_blank" rel=""
                                title="JAVA轻量级错误码设计最佳实践" className="title">
                                JAVA轻量级错误码设计最佳实践JAVA轻量级错误码
                    </a>
                </div>
                <div className="content-wrapper">
                    <div className="content-main">
                        <div className="abstract">
                            <a href="/post/7138648965041356830"
                                target="_blank" rel="">
                                <div className="content">
                                    概述目前公司团队项目中返回异常都没有错误码，如果遇到错误提.概述目前公司团队项目中返回异常都没有错误码，如果遇到错误提
                                   
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="content-cover">
                        <img
                        src="https://pic4.zhimg.com/v2-f523971495eae51efb08b2111097b609_bh.webp?source=d6434cab"
                        alt="JAVA轻量级错误码设计最佳实践" className="thumb" loading="lazy" />
                    </div>
                    
                </div>
            </div>

            <style jsx>{`
            .item {
                transition: all .3s ease-in;
                box-shadow: none;
                border-bottom: 1px solid #f0f2f7;
            }

            .item:hover {
                background-color: #f7f8fa;
            }

            @media (max-width: 960px) {
                .item {
                    background-color: #fff;
                    margin-bottom: 10px;
                }    
            }

            .entry {
                cursor: pointer;
                position: relative;
                padding: 12px 20px 0;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }

            .meta-container {
                color: #86909c;
            }
            
            .meta-container, .meta-row {
                display: flex;
                align-items: center;
            }

            .meta-container .user-message {
                display: flex;
                align-items: center;
                margin-right: 8px;
                max-width: 162px;
                font-size: 13px;
                line-height: 22px;
                color: #4e5969;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-all;
            }

            .popover-box {
                display: inline;
            }

            .meta-container .date {
                position: relative;
                padding: 0 10px;
                line-height: 22px;
                font-size: 13px;
                flex-shrink: 0;
            }

            .meta-container .date:before {
                left: 0;
            }

            .meta-container .date:after {
                right: 0;
            }

            .meta-container .date:after, .meta-container .date:before {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                display: block;
                width: 1px;
                height: 14px;
                background: #e5e6eb;
                content: " ";
            }

            .tag_list, .tag_list .tag {
                display: flex;
                align-items: center;
            }

            .tag_list .tag {
                position: relative;
                flex-shrink: 0;
                font-size: 13px;
                line-height: 22px;
                padding: 0 8px;
                color: #86909c;
            }

            .tag_list .tag:not(:last-child):after {
                position: absolute;
                right: -1px;
                display: block;
                content: " ";
                width: 2px;
                height: 2px;
                border-radius: 50%;
                background: #4e5969;
            }

            .content-wrapper {
                display: flex;
                padding-bottom: 12px;
                margin-top: 10px;
                width: 100%;
            }

            .content-wrapper .content-main {
                flex: 1 1 auto;
                margin-right: 10px;
                max-width: 500px;
            }

            .content {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
            }

            .title-row {
                margin-top: 8px;
            }

            .title {
                font-weight: 700;
                font-size: 18px;
                line-height: 24px;
                color: #1d2129;
                width: 100%;
                // display: -webkit-box;
                // overflow: hidden;
                // text-overflow: ellipsis;
                // -webkit-box-orient: vertical;
                // -webkit-line-clamp: 1;
            }

            .abstract {
                margin-bottom: 10px;
            }

            .abstract a {
                color: #121212;
                font-size: 15px;
                line-height: 1.67;
                // overflow: hidden;
                // text-overflow: ellipsis;
                // display: -webkit-box;
                // -webkit-box-orient: vertical;
                // -webkit-line-clamp: 1;
            }

            .content-cover {
                max-width: 200px;
                //height: 105px;
                border-radius: 4px;
                margin-top: 4px;
                overflow: hidden;
                vertical-align: top;
            }

            .thumb {
                width: 100%;
                height: 100%;
                background-color: #fff;
                object-fit: cover;
            }

            @media (max-width: 448px) {
                .content-cover {
                    width: 100%;
                    height: 100%;
                }    
            }
           

            `}

            </style>
        </li>
    )

}