

export default function bookcard(props) {

    var data = {
        "tag": "新品",
        "title": "从前端到全栈",
        "desc": "核心技术点+应用场景详解，全方位体验 Node.js开发",
        "img": "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c802eb3fdc3a41a29229d496ebd0ef67~tplv-k3u1fbpfcp-no-mark:280:280:200:280.awebp?"
    }
    return (
        <div>
            <a href="/book/7133100888566005763" target="_blank" rel="" tag="div" className={`${'item'} ${props.sideBar?'sidebar': ''}`}>
                <div className="poster">
                    <img src={data.img}
                        alt="「从前端到全栈」封面" className="lazy poster-img" loading="lazy" />
                </div>
                <div className="info">
                    <div className={`${'title'} ${props.sideBar?'sidebar': ''}`}>
                        <span className="presale">{data.tag}</span>
                        <span className="text-highlight">{data.title}</span>
                    </div>
                    <span className={`${'text-highlight'}  ${'desc'} ${props.sideBar?'sidebar': ''}`}>{data.desc}</span>
                    <div className="other" style={props.sideBar?{display:'none'}:{}}>    
                        <div className="price">
                            <div className="price-text">专辑</div>
                        </div>

                        <div className="messages">
                            <span className="">
                            </span>
                            <span className="message">
                                <span>
                                    已更新11小节
                                </span>
                            </span>
                            {/* <span className="message">
                                <span>1767</span>
                                <span>人已购买</span>
                            </span> */}
                        </div>
                    </div>
                </div>

            </a>
            <style jsx>{`
            .item {
                display: flex;
                box-sizing: border-box;
                background-color: var(--juejin-layer-1);
                position: relative;
                padding: 12px 20px 12px 20px;
                border-bottom: 1px solid #f0f2f7;
            }
            .item:after {
                display: table;
                content: "";
                clear: both;
            }

            .item.sidebar {
                padding: 0 0 10px 0;
            }

            .poster {
                width: 80px;
                //height: 140px;
                flex-shrink: 0;
                box-shadow: 3px 4px 12px 0 rgb(0 0 0 / 20%);
                overflow: hidden;
                background-color: #ccc;
                position: relative;
            }

            .poster .poster-img {
                height: 100%;
                width: 100%;
            }
            
            .lazy {
                position: relative;
                -o-object-fit: cover;
                object-fit: cover;
            }

            .lazy:not(.immediate):before {
                transition: opacity .2s;
            }
           
            .lazy:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: inherit;
                border-radius: inherit;
            }

            .info {
                position: relative;
                flex-grow: 1;
                overflow: hidden;
                box-sizing: border-box;
                font-size: 14px;
                color: #2e3135;
                padding-left: 22px;
            }

            .info .title {
                color: var(--juejin-font-1);
                font-size: 20px;
                font-weight: 400;
            }

            .info .title.sidebar {
                font-size: 16px;
                padding-bottom: 10px;
            }

            .info .title .presale {
                display: inline-block;
                vertical-align: middle;
                height: 20px;
                transform: translateY(-3px);
                line-height: 20px;
                font-size: 12px;
                border-radius: 2px;
            }

            .info .title .presale {
                padding-left: 6px;
                padding-right: 6px;
                color: #fff;
                cursor: default;
                margin-right: 8px;
                background-color: #f64242;
            }

            .info .desc {
                margin-top: 5px;
                line-height: 20px;
                height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                color: var(--juejin-font-2);
            }

            .info .desc.sidebar {
                display: inline;
            }

           
            .lazy {
                position: relative;
                -o-object-fit: cover;
                object-fit: cover;
            }

            .info .other {
                margin-top: 6px;
                display: flex;
                align-items: center;
            }

            .info .other .price {
                color: var(--juejin-font-warning);
                font-size: 18px;
                margin-right: 15px;
                display: inline-flex;
                align-items: center;
            }

            .info .other span.message {
                opacity: .6;
                font-size: 13px;
                color: var(--juejin-font-3);
            }

            .info .other span.message:not(:last-child):after {
                content: "·";
                color: var(--juejin-font-3);
                margin-left: 5px;
                margin-right: 5px;
            }
            `}</style>
        </div>
    )
}