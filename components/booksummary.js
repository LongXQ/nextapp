import { useState, useEffect } from 'react'

var unfoldFirstTime = true;
export default function booksummary(props) {
    const [unfold, setUnfold] = useState(false);

    useEffect(()=>{
        if(!unfoldFirstTime) {
            setUnfold(true)
        }
        unfoldFirstTime = false;
    }, [props.unfold])


    var data = [
        {
            "title": ""
        }
    ]

    return (
        <div className={`${'book-summary'} ${unfold?'unfold-mobile':''}`}>
            <div className="book-summary-masker" onClick={()=>{setUnfold(false)}}></div>
            <div className="book-summary-inner">
                {/* <div className="book-summary__header">
                    <a href="/course" target="" rel="" className="logo">
                        <svg width="137" height="28" viewBox="0 0 137 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="" style={{height: '100%',width: 'auto'}}>
                            <path
                                d="M17.5865 17.3955H17.5902L28.5163 8.77432L25.5528 6.39453L17.5902 12.6808H17.5865L17.5828 12.6845L9.62018 6.40201L6.6604 8.78181L17.5828 17.3992L17.5865 17.3955Z"
                                fill="#1E80FF"></path>
                            <path
                                d="M17.5872 6.77268L21.823 3.40505L17.5872 0.00748237L17.5835 0L13.3552 3.39757L17.5835 6.76894L17.5872 6.77268Z"
                                fill="#1E80FF"></path>
                            <path
                                d="M17.5865 23.2854L17.5828 23.2891L2.95977 11.7531L0 14.1291L0.284376 14.3574L17.5865 28L28.5238 19.3752L35.1768 14.1254L32.2133 11.7456L17.5865 23.2854Z"
                                fill="#1E80FF"></path>
                            <path
                                d="M133.287 18.4172H131.162L129.923 23.0758H126.825V16.7559H135.364V14.7315H126.825V11.1469H133.074V9.12256H118.454V11.1469H124.703V14.7315H116.164V16.7559H124.703V23.0758H121.601L120.363 18.4172H118.237L119.487 23.0758H115.543V25.1001H135.985V23.0758H132.041L133.287 18.4172Z"
                                fill="#323232"></path>
                            <path
                                d="M130.522 3.3151L130.2 2.94092H121.321L120.999 3.3151C119.298 5.2467 117.378 6.97337 115.278 8.46009V10.9522C116.206 10.3573 120.183 7.72295 122.327 4.98768H129.235C131.375 7.72295 135.356 10.3573 136.284 10.9522V8.46009C134.169 6.97586 132.235 5.2491 130.522 3.3151Z"
                                fill="#323232"></path>
                            <path
                                d="M94.9037 8.53127H96.494V6.50323H94.9037V2.88867H92.9056V6.50323H91.3303V8.53127H92.9094V14.7914L91.3303 15.3377V17.5828L92.9094 17.0365V20.7371C92.8414 22.2391 92.5579 23.7236 92.0674 25.145H94.1629C94.6112 23.7165 94.863 22.2335 94.9112 20.7371V16.3442L96.5053 15.7904V13.5229L94.9112 14.0767L94.9037 8.53127Z"
                                fill="#323232"></path>
                            <path
                                d="M99.1875 2.88867H97.6608V20.7446C97.6727 22.2359 97.4852 23.7221 97.1033 25.1637H99.1875C99.5206 23.7145 99.6851 22.2316 99.6776 20.7446V9.77357H112.321V2.88867H99.1875ZM110.308 7.75303H99.6851V4.91671H110.304L110.308 7.75303Z"
                                fill="#323232"></path>
                            <path
                                d="M110.305 23.405H107.566V17.6838H110.021H110.702H111.91V11.8166H110.021V15.9363H107.566V11.1431H105.676V15.9363H103.27V11.8166H101.381V17.6838H102.298H103.27H105.676V23.405H102.967V19.173H101.074V25.1524H102.286H102.967H110.305H110.683H112.195V19.173H110.305V23.405Z"
                                fill="#323232"></path>
                            <path
                                d="M53.0024 2.91846V4.83801L56.5908 6.11397L53.0024 7.38618V9.30573L59.2887 7.07187L65.5749 9.30573V7.38618L61.9865 6.11397L65.5749 4.83801V2.91846L59.2887 5.15232L53.0024 2.91846Z"
                                fill="#323232"></path>
                            <path
                                d="M79.9508 11.697H88.5944V9.47813H79.9508V2.80273H77.5299V9.47813H68.8863V11.697H77.5299V22.9823H67.76V25.2012H89.7207V22.9823H79.9508V11.697Z"
                                fill="#323232"></path>
                            <path
                                d="M48.9461 5.39227L52.2913 5.18272V3.24072L43.6813 3.78328V5.72529L47.0265 5.512V8.50545H43.5803V10.4213H47.0265V25.164H48.9461V10.4213H52.3923V8.50545H48.9461V5.39227Z"
                                fill="#323232"></path>
                            <path
                                d="M57.6539 9.01025H55.6595L55.1768 10.3648H52.9991V12.2357H54.5145L52.55 17.7662H53.8821V24.1534H55.7007V16.8457H58.6642V25.1787H60.5837V16.8457H63.4612V21.059C63.4534 22.1374 63.181 23.1974 62.6679 24.146H64.7147C65.1423 23.173 65.3627 22.1217 65.362 21.059V15.6932V15.1282H60.5837V13.2572H58.6642V15.1282H55.4836L56.5313 12.2245H65.594V10.3536H57.1749L57.6539 9.01025Z"
                                fill="#323232"></path>
                            <path d="M43.562 24.6246H45.4591L46.2786 11.4272H44.3815L43.562 24.6246Z" fill="#323232"></path>
                            <path d="M49.7849 11.4272L50.3499 23.2963H52.247L51.682 11.4272H49.7849Z" fill="#323232"></path>
                        </svg></a>
                    <div className="label">课程</div>
                </div> */}
                {/* <div className="buy-sticky">
                    <button className="section-buy">
                        购买: ￥59.9
                    </button>
                    <div className="vip-borrow-button"><span className="tooltip">
                        <div className="byte-tooltip byte-tooltip--light" style={{display: 'none'}}>
                            如果您下单购买了借阅中或曾经借阅过的课程，我们将把消耗的借阅卡退还给您，每门课程最多退还1张
                        </div><span className="byte-tooltip__wrapper"></span>
                    </span></div>
                </div> */}
                <div className="book-directory-comp beautify-scrollbar-warp book-directory" cur-index="-1">
                    <div style={{padding: '0px 15px'}}>

                    </div>
                    <div className="section-list">
                        <a className="section route-active">
                            <div className="left">
                                <div className="index">2</div>
                            </div>
                            <div className="center">
                                <div className="main-line">
                                    <div className="title">
                                        <span className="title-text">Node.js 的模块管理（上）</span>
                                    </div>
                                    <div className="right">

                                        <div className="label">
                                            试学
                                        </div>
                                    </div>
                                </div>
                                <div className="sub-line">
                                    <span>学习时长: 22分44秒</span>
                                </div>
                            </div>
                        </a>
                        <a className="section">
                            <div className="left">
                                <div className="index">4</div>
                            </div>
                            <div className="center">
                                <div className="main-line">
                                    <div className="title">
                                        <span className="title-text">包管理工具：NPM</span>
                                    </div>
                                    <div className="right">
                                        <div className="lock">
                                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" className="">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                d="M12.5822 5.29608C12.5184 2.81844 10.4914 0.833008 8.00036 0.833008C5.46911 0.833008 3.41703 2.88301 3.41703 5.41634V6.66634C1.80591 6.66761 0.500583 7.97418 0.500855 9.5853L0.501795 15.167C0.502167 17.3759 2.29292 19.1663 4.50179 19.1663H11.5004C13.7095 19.1663 15.5004 17.3755 15.5004 15.1663V9.58301C15.5004 7.97218 14.1945 6.66634 12.5837 6.66634V5.41634L12.5822 5.29608ZM8.00006 11.0002C9.10472 11.0002 10.0001 11.8968 10.0001 13.0002C10.0001 14.1035 9.10472 15.0002 8.00006 15.0002C6.89539 15.0002 6.00006 14.1035 6.00006 13.0002C6.00006 11.8968 6.89539 11.0002 8.00006 11.0002ZM5.08581 5.3163C5.13867 3.75039 6.42352 2.5 8.00079 2.5C9.61162 2.5 10.9175 3.80417 10.9175 5.41667V6.66667H5.08412V5.41667L5.08581 5.3163Z"
                                                fill="#C2C8D1"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="sub-line">
                                    <span>学习时长: 17分45秒</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="book-summary__footer">
                </div>
            </div>


            <style jsx>{`
            
            .book-summary {
                width: 320px;
                position: fixed;
                margin-top: 2.667rem;
                height: 100%;
                cursor: default;
                flex-shrink: 0;
                z-index: 11;
                border-right: 1px solid #ddd;
                transition: all .3s cubic-bezier(.4,0,.2,1);
                will-change: left;
                box-shadow: 2px 0 8px rgba(0, 0, 0, .15);
            }

            @media (max-width: 1000px){
                .book-summary {
                    transition: none;
                    width: 0;
                }
            }

            @media (max-width: 1000px) {
                .book-summary.unfold-mobile {
                    width: 100%;
                    left: 0;
                }
            }

            .book-summary .book-summary-masker {
                display: none;
                position: fixed;
                left: 0;
                top: 0;
                z-index: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,.3);
            }

            @media (max-width: 1000px) {
                .book-summary.unfold-mobile .book-summary-masker {
                    display: block;
                }
            }

            .book-summary .book-summary-inner {
                transition: all .3s cubic-bezier(.4,0,.2,1);
                background-color: #f7f8fa;
                position: relative;
                z-index: 1;
                height: 100%;
            }

            @media (max-width: 1000px) {
                .book-summary .book-summary-inner {
                    left: -350px;
                    box-shadow: 0 2px 30px 0 rgb(0 0 0 / 40%);
                    width: 320px;
                }
            }

            @media (max-width: 1000px) {
                .book-summary.unfold-mobile .book-summary-inner {
                    left: 0;
                }
            }


            .book-summary .book-summary-inner .book-summary__header {
                height: 60px;
                display: flex;
                padding-left: 16px;
                align-items: center;
                background-color: #fff;
                border-bottom: 1px solid #ddd;
            }

            .book-summary .book-summary-inner .book-summary__header .logo {
                height: 24px;
            }

            .book-summary .book-summary-inner .book-summary__header .label {
                margin-left: 13px;
                margin-right: 25px;
                padding-left: 10px;
                padding-right: 10px;
                height: 24px;
                line-height: 24px;
                font-size: 15px;
                font-weight: 500;
                color: #007fff;
                position: relative;
                background-color: rgba(0,127,255,.1);
            }

            .book-summary .book-summary-inner .book-summary__header .label:after {
                content: "";
                position: absolute;
                bottom: 0;
                right: 0;
                width: 0;
                height: 0;
                border-color: rgba(0,127,255,.2) #fff #fff rgba(0,127,255,.2);
                border-style: solid;
                border-width: 5px;
            }

            .book-summary .book-summary-inner .buy-sticky {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 60px;
                background: #fff;
                padding: 0 10px;
                box-shadow: 0 4px 10px rgb(0 0 0 / 5%);
            }

            .book-summary .book-summary-inner .buy-sticky .section-buy {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 40px;
                flex-grow: 1;
                cursor: pointer;
                border-radius: 4px;
                color: #fff;
                font-size: 14px;
                text-align: center;
            }

            button.section-buy {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-color: #007fff;
                color: #fff;
                border-radius: 2px;
                border: none;
                padding: 0.5rem 1.3rem;
                outline: none;
                transition: background-color .3s,color .3s;
                cursor: pointer;
            }

            .tooltip {
                width: 263px;
                color: var(--juejin-font-2);
            }

            .byte-tooltip--light {
                color: #1d252f;
                background-color: #fff;
                border-radius: 2px;
            }
            .byte-tooltip {
                padding: 8px 12px;
                border-radius: 2px;
                -webkit-box-shadow: 0 2px 8px 0 rgb(0 0 0 / 15%);
                box-shadow: 0 2px 8px 0 rgb(0 0 0 / 15%);
                font-size: 14px;
                font-weight: 400;
            }

            .byte-tooltip--light {
                background: var(--juejin-popup);
                color: var(--juejin-font-2);
            }
            .byte-tooltip {
                padding: 12px;
                border-radius: 4px;
                font-size: 12px;
                line-height: 20px;
            }

            .book-summary .book-summary-inner .book-directory {
                box-sizing: border-box;
                -webkit-overflow-scrolling: touch;
                height: calc(100% - 180px);
            }

            @media (max-width: 1000px) {
                .book-summary .book-summary-inner .book-directory {
                    height: calc(100% - 120px);
                }
            }

            
            .book-directory-comp {
                color: #000;
                padding: 18px 0;
            }

            .book-directory:hover {
                overflow-y: scroll;
            }

            @media (min-width: 721px) {
                .beautify-scrollbar-warp {
                    overflow-y: hidden;
                    overflow-x: hidden;
                }

                .beautify-scrollbar-warp::-webkit-scrollbar {
                    width: 12px;
                    height: 4px;
                }

                .beautify-scrollbar-warp::-webkit-scrollbar-thumb {
                    border: 4px solid transparent;
                    background-clip: padding-box;
                    border-radius: 7px;
                    background-color: #c9cdd4;
                }
            }

            

            .book-directory-comp .section-list {
                width: 320px;
            }

            .book-directory-comp .section-list .section {
                position: relative;
                display: flex;
                justify-content: flex-start;
                transition: all .2s;
                padding: 9px 16px;
                cursor: pointer;
            }

            .section:hover {
                background: #D8D8D833;
            }

            .book-directory-comp .section-list .section.route-active:after {
                content: "";
                position: absolute;
                width: 4px;
                height: 24px;
                left: 0;
                top: 9px;
                background: #1e80ff;
                border-radius: 0 8px 8px 0;
            }

            .book-directory-comp .section-list .section .left .index {
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
                color: #8a919f;
                padding: 0 6px;
                min-width: 26px;
                text-align: center;
            }

            .book-directory-comp .section-list .section.route-active .left .index {
                color: #1e80ff;
            }

            .book-directory-comp .section-list .section .center {
                flex-grow: 1;
            }
            .center {
                margin-left: auto;
                margin-right: auto;
            }

            .book-directory-comp .section-list .section .center .main-line {
                font-size: 15px;
                line-height: 24px;
                display: flex;
            }

            .book-directory-comp .section-list .section .center .main-line .title {
                font-size: 0;
                flex: 1;
                color: #252933;
            }

             .title-text {
                vertical-align: bottom;
                font-size: 16px;
                line-height: 24px;
            }

            .book-directory-comp .section-list .section.route-active .center .main-line .title, .book-directory-comp .section-list .section.route-active .left .index {
                color: #1e80ff;
            }

            

            .book-directory-comp .section-list .section .center .main-line .right {
                margin-left: 15px;
            }

            .book-directory-comp .section-list .section .center .main-line .right .label {
                height: 24px;
                background: #fff3db;
                line-height: 24px;
                border-radius: 12px;
                padding: 0 8px;
                color: #ff8412;
                font-size: 12px;
                white-space: nowrap;
            }

            .book-directory-comp .section-list .section .center .sub-line {
                display: flex;
                align-items: center;
                margin-top: 6px;
                font-size: 13px;
                color: #8a919f;
                line-height: 24px;
            }

            .book-summary__footer {
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                height: 60px;
                padding-top: 20px;
                padding-left: 20px;
                box-sizing: border-box;
                //background-color: #f7f8fa;
                background-color: #fff;
                z-index: 1;
            }
            
            `}</style>
        </div>
    )
}