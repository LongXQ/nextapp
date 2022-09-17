import Head from 'next/head'
import { readFileSync } from 'fs'
import path from "path"
import { marked } from 'marked';
import prism from 'prismjs';
import "prismjs/components/prism-java";
import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
//import "prismjs/themes/prism-twilight.css";
import Header from '../components/header'
import Subheader from '../components/subheader';

import Booksummary from '../components/booksummary';

import Direction from '../components/direction';

import { useState, useEffect } from 'react'
import { data } from 'autoprefixer';

import Toc from '../components/toc';

export default function page({java}) {

    const [state, setState] = useState(false);

    const [toc, setToc] = useState(false);

    marked.setOptions({
        highlight: function(code, lang) {
          if (prism.languages[lang]) {
            return prism.highlight(code, prism.languages[lang], lang);
          } else {
            return code;
          }
        }
      });

      var headingNum = -1;

      var headingData = [

      ]
     
   const renderer = {
        heading(text, level) {
            const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
            headingNum++;

            var dataId = "#heading-" + headingNum

            var heading = {
                "level": level,
                "dataId": dataId,
                "title": text
            }

            headingData.push(heading);

            return `
                    <h${level} id="${dataId}">
                        ${text}
                    </h${level}>`;
        }
    };

    marked.use({ renderer });

    const html = marked.parse(java);

    // console.log(headingData)

    // function handleScroll() {
    //     var scrollTop = document.documentElement.scrollTop;
    //     var targetEle = document.getElementById("#heading-10")
    //     console.log("scrollTop " + scrollTop + " offsetTop " + targetEle.offsetTop)
    // }

    // useEffect(()=>{
    //     window.addEventListener('scroll', handleScroll);
    // }, [])
    
  return (
    <>
        <Header />
        <div className='subheader-wraper'>
            <Subheader />
        </div>

        <main className='page-container main-container'>
            <div className='view column-view'>
                <div className='booksummarywraper'>
                    <Booksummary unfold={state}></Booksummary>
                </div>
                
                <div className='main-area article-area'>
                    <div className='article'>
                        <div className="markdown line-numbers" dangerouslySetInnerHTML={{__html: html}}>
                        </div>
                    </div>
                </div>

                <Toc data={headingData} toc={toc}></Toc>

                {/* <Direction></Direction> */}

                <div className="handle book-direction">
                    <div className="book-handle">
                        <div className="step-btn step-btn--prev" onClick={()=>{setState(!state)}}>
                            {/* <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/87ad47e35a060899d2234a8b5e7f378f.svg"/> */}
                            目录
                        </div> 
                        <div className="step-btn step-btn--next" onClick={()=>{setToc(!toc)}}>
                            {/* <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/54d8a353dfbeff543c8a513821df8caf.svg"/> */}
                            导航
                        </div>
                    </div>
                </div>
            </div>


      
        </main>

        {/* <div className="login-button-wrap">
            <button className="login-button">
                导航
            </button> 
        </div> */}

        <style jsx global>{`
        .login-button-wrap {
            position: fixed;
            top: 0px;
            right: 10px;
            z-index: 1000;
            cursor: pointer;
            background: var(--juejin-navigation);
            border: 1px solid #f1f1f1;
            height: 60px;
            width: 50px;
        }
        .login-button {
            position: absoulte;
            height: 100%;
            width: 100%;
        }

        .book-handle {
            position: fixed;
            width: 100%;
            left: 50%;
            max-width: calc(100vw - 340px);
            bottom: 70px;
            transform: translateX(-50%);
            display: none;
        }

        @media (max-width: 700px) {
            .book-handle {
                max-width: 100%;
                bottom: 30px;
                margin-left: 0;
                display: flex;
                justify-content: center;
                transition: all .3s;
            }
        }

        .book-handle .step-btn {
            cursor: pointer;
            position: absolute;
            bottom: 0;
            z-index: 10;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            border-radius: 50%;
            background-color: #007fff;
            color: #fff;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            box-shadow: 0 4px 10px rgb(0 0 0 / 15%);
        }

        .book-handle .step-btn.step-btn--prev {
            left: 10px;
        }

        .book-handle .step-btn img {
            width: 32px;
        }

        @media (max-width: 700px) {
            .book-handle .step-btn.step-btn--next {
                right: 10px;
            }
        }

        .subheader-wraper {
            position: relative;
        }



    // .container {
    //     position: relative;
    //     margin: 0 auto;
    //     width: 100%;
    //     max-width: 960px;
    // }

    .main-container>.view {
        margin-top: 4.767rem;
    }
    .column-view {
        padding: 0 0 8rem;
    }

    .article-area {
        margin-bottom: 1.5rem;
    }
    .main-area {
        position: relative;
        width: 820px;
        max-width: 100%;
        box-sizing: border-box;
        // margin-left: 340px;
        margin: 0 auto;
        padding-left: 30px;
    }



@media (max-width: 1140px){
    .main-area {
        width: calc(100% - 26.67rem);
    }
}

@media (max-width: 1000px){
    .main-area {
        width: 100%;
        margin-left: 0px;
        padding-left: 0px;
    }
    .booksummarywraper{
        //display:none;
    }
}

@media (max-width: 1000px) {
    .article-area {
        margin-bottom: 0;
    }
}


    .article {
        position: relative;
        padding-top: 2.667rem;
        padding-bottom: 3.33rem;
        //z-index: 1;
    }
    .main-area>* {
        border-radius: 4px;
        background-color: #fff;
        padding-left: 2.67rem;
        padding-right: 2.67rem;
        box-sizing: border-box;
    }
    @media (max-width: 1000px) {
        .main-area>.article {
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }

@media (max-width: 1000px) {
    .main-area>.article {
        border: none;
    }
}


    a.anchor {
        float: left;
        margin-top: 0.125em;
        margin-left: -0.87em;
        padding-right: 0.23em;
        font-size: .85em;
        opacity: 0;
        transition: opacity .2s;
        color: #2980B9;
    }


    h1:hover>a.anchor, h2:hover>a.anchor, h3:hover>a.anchor,h4:hover>a.anchor {
        opacity: 1;
    }

    .markdown {
        color: #454d64;
        font-size: 15px;
        line-height: 1.75;
        word-break: break-word;
        font-weight: 400;
        overflow-x: hidden;
        padding-top: 0!important;
    }
   
    *, :after, :before {
        box-sizing: border-box;
    }
    .markdown img {
        max-width: 100%;
    }
    .markdown h2 {
        font-size: 24px;
    }
    .markdown p {
        margin: 16px 0;
    }
    .markdown blockquote {
        margin: 16px 0;
        padding: 0 24px;
        color: rgba(69,77,100,.7);
        border-left: 4px solid #ebedf1;
        overflow: hidden;
    }
    .markdown ol, .markdown ul {
        margin: 8px 0 8px 32px;
        padding: 0;
    }
    .markdown ol li, .markdown ul li {
        margin-bottom: 4px;
    }

    
  `}</style>
    </>
    
  )
}

export async function getStaticProps(context) {
    const java = readFileSync(path.join(process.cwd(), 'doc\java', 'java.md'), 'utf-8')
    return {
      props: {java}, // will be passed to the page component as props
    }
  }
