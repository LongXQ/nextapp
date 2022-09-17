import styles from './toc.module.css'

import smoothscroll from 'smoothscroll-polyfill'

import { useState, useEffect } from 'react'

var unfoldFirstTime = true;

export default function toc(props) {

    const [unfold, setUnfold] = useState(false);

    useEffect(()=>{
        if(!unfoldFirstTime) {
            setUnfold(true)
        }
        unfoldFirstTime = false;
    }, [props.toc])


    function itemClick(item) {
        var targetEle = document.getElementById(item.dataId)
        smoothscroll.polyfill()
        window.scrollTo({
            top:targetEle.offsetTop,
            behavior:'smooth'
        })
    }

    return (
        <div className={`${'sticky-block-box'} ${unfold?'unfold-mobile':''}`} onClick={()=>setUnfold(false)}>
            <div className="sidebar-block catalog-block catalog-block pure isExpand">
                <nav className="article-catalog">
                    <div className="catalog-title">
                        {unfold?'隐藏':'目录'}
                    </div> 
                    <div className="catalog-body">
                        <ul className="catalog-list" style={{marginTop:'0px'}}>
                            {
                                props.data.map(item=>
                                    <li className="item d1">
                                        <div className="a-container">
                                            <a href={item.dataId} title={item.title} className="catalog-aTag" onClick={()=>itemClick(item)}>
                                            {item.title}
                                            </a>
                                        </div> 
                                    </li>
                                )
                            }
                            
                        </ul>
                    </div>
                </nav>
            </div> 

            <style jsx>{`
            .sticky-block-box {
                position: fixed;
                right: 10px;
                top: 10rem;
                width: 280px;
                height: 100%;
                transition: top .2s;
                z-index: 100;
                background-color: #fff;
            }

            @media (max-width: 1000px) {
                .sticky-block-box {
                    display: none;
                }
                .sticky-block-box.unfold-mobile {
                    display: block;
                    background-color: #f7f8fa;
                    right: 0px;
                }
            }

            .catalog-block {
                transition: all .2s linear;
            }
            .sidebar-block {
                position: relative;
                margin-bottom: 1.5rem;
                border-radius: 2px;
            }
            .catalog-block.isExpand {
                max-height: 675px;
            }
            .sidebar-block {
                margin-bottom: 20px;
            }


            .catalog-block.isExpand .article-catalog {
                height: 100%;
            }
            .article-catalog[data-v-cb93f23a] {
                background: #fff;
                border-radius: 4px;
                padding: 0;
            }

            .catalog-title {
                font-weight: 500;
                padding: 1.333rem 0;
                margin: 0 1.667rem;
                font-size: 16px;
                line-height: 2rem;
                color: #1d2129;
                border-bottom: 1px solid #e4e6eb;
            }

            .catalog-body {
                position: relative;
                max-height: 460px;
                margin: 8px 4px 0 0;
                overflow: auto;
            }
            .catalog-block.isExpand .article-catalog .catalog-body {
                max-height: 612px;
            }

            .catalog-list {
                position: relative;
                line-height: 22px;
                padding: 0 0 12px;
            }


            .catalog-list .item {
                margin: 0;
                padding: 0;
                font-size: 1.167rem;
                font-weight: 400;
                line-height: 22px;
                color: #333;
                list-style: none;
            }
            .catalog-list .item.d1 {
                font-weight: 400;
                color: #000;
            }


            .catalog-list .item .a-container {
                display: block;
                position: relative;
                padding: 0 0 0 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .catalog-list .item.d1>.a-container {
                margin: 0;
                padding: 0 0 0 11px;
            }
            .catalog-list .item.d1:first-child>.a-container {
                margin-top: 0;
            }
           
            .catalog-list .catalog-aTag {
                color: inherit;
                display: inline-block;
                padding: 8px;
                width: 90%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
           
            
            
            
            `}
            </style>
        </div> 
    )
}