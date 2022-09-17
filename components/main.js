import Card from "./card"
import Bookcard from "./bookcard"

import { useState, useEffect } from 'react'

function getData(num) {
    console.log("num " + num)
    var data = [];
    for(let i=0;i<num;i++) {
        data.push(<Card></Card>)
    }
    return data;
}


export default function main() {
    let [state, setState] = useState(10)
    let [data, setData] = useState([])

    function handleScroll() {
        let clientHeight = document.documentElement.clientHeight;
        let scrollTop = document.documentElement.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight;

        let lastChildClientHeight = document.getElementById('entry-list-id').lastChild.clientHeight;
    
        if ((clientHeight + scrollTop) >= (scrollHeight - lastChildClientHeight)) {
            state = state + 10;
            setState(state);
            setData(getData(state));
        }
    }

    

    useEffect(()=>{
        console.log('useEffect')
        window.addEventListener('scroll', handleScroll);
        setData(getData(state));
    }, [])
    
    return (
        <main className="container main-container with-view-nav">
            <div className="view timeline-index-view">
                <div className="timeline-container">
                    <div className="timeline-content">
                        <div className="timeline-entry-list">
                            <div className="entry-list-container">
                                <header className="list-header" style={{ display: 'block' }}>
                                    <nav role="navigation" className="list-nav">
                                        <ul className="nav-list left" >
                                            <li className="nav-item active"><a href="/">推荐</a></li>
                                            <li className="nav-item">
                                                <a href="/?sort=newest" >最新</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/?sort=three_days_hottest">热榜</a>
                                            </li>
                                        </ul>
                                        <div className="dorp-down-area">
                                        </div>
                                    </nav>
                                </header>
                                <div className="entry-list-wrap">
                                    <div id="entry-list-id" name="entry-list" tag="div" className="entry-list list" ad-list="">
                                        {
                                            data.map(item=>
                                                item
                                            )
                                        }
                                        {/* <Card></Card>
                                        <Card></Card>
                                        <Card></Card>
                                        <Card></Card>
                                        <Card></Card>
                                        <Card></Card>
                                        <Card></Card>
                                        <Card></Card>
                                        <Bookcard></Bookcard>
                                        <Card></Card>
                                        <Card></Card>
                                        <Card></Card>
                                        <Card></Card>
                                        <Bookcard></Bookcard> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
            .container {
                // position: relative;
                // margin: 0 auto;
                // width: 100%;
                // max-width: 960px;
                width: 720px;
                max-width: 100%;
                flex-shrink: 0;
                // margin-right: 20px;
            }

            // .main-container.with-view-nav>.view {
            //     margin-top: 4.67rem;
            // }

            .timeline-container {
                margin-top: 0;
            }
            
            .timeline-content {
                position: relative;
                //margin-top: 0.33rem;
            }

            @media (max-width: 600px) {
                .timeline-content {
                    margin-top: 0.5rem;
                }
            }

            
            .timeline-entry-list {
                margin-right: 21.667rem;
                border-radius: 2px;
                width: 700px;
            }

            @media (max-width: 960px) {
                .timeline-entry-list {
                    width: 100%;
                }
            }

            
            .entry-list-container {
                background-color: #fff;
                -webkit-box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
                box-shadow: 0 1px 3px rgba(18,18,18,.1);
            }
            
            .list-header {
                padding: 1.3rem 1rem;
                border-bottom: 1px solid hsla(0,0%,59.2%,.1);
            }
            
            .list-nav {
                justify-content: flex-start!important;
            }
            .list-header .list-nav, .list-header .nav-list {
                display: flex;
                justify-content: space-between;
            }
            
            .list-header .nav-list {
                align-items: center;
                line-height: 1;
            }
            
            .list-nav .nav-list.left .nav-item {
                font-size: 1.17rem;
            }
            .list-header .left .nav-item {
                padding: 0 1.2rem;
                font-size: 1.16rem;
                border-right: 1px solid hsla(0,0%,59.2%,.2);
            }
            .nav-item {
                position: relative;
                cursor: pointer;
            }
            
            .list-header .nav-list .nav-item.active a, .list-header .nav-list .nav-item a:hover {
                color: #007fff;
            }
            
            .nav-item>a:before {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }
            
            .dorp-down-area {
                position: relative;
                z-index: 9;
            }
            
            .entry-list {
                width: 100%;
                background-color: #fff;
                //background-color: #f2f3f5;
                position: relative;
            }

            @media (max-width: 960px) {
                .entry-list {
                    background-color: #f2f3f5;
                }    
            }
            `}</style>
        </main>

    )
}