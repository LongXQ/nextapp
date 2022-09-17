import styles from './sidebar.module.css'

function arrowClick(ev) {
    ev.preventDefault();
    var target = ev.currentTarget.childNodes[2];
    
    if(target.classList.contains("right")) {
        target.classList.remove("right");
        target.classList.add("down");
    }else{
        target.classList.remove("down");
        target.classList.add("right");
    }

    var nextSibling = ev.currentTarget.nextSibling;
    if (nextSibling != null) {
        if (nextSibling.style.display == 'none') {
            nextSibling.style.display = 'block';
        }else {
            nextSibling.style.display = 'none';
        }
    }
}

export default function sidebar() {
    return (
        <aside className="sidebar">
            <ul className="sidebar-links">
                <li><section className="sidebar-group"><button className="sidebar-heading clickable" onClick={arrowClick}><i className="icon iconfont icon-java"></i><span className="title">Java</span><span className="arrow right"></span></button>
                
                    <ul className="sidebar-links" style={{display:'none',transition: 'transform 0.25s, ease-in-out 0s, opacity 0.25s ease-in-out 0s',transform: 'translateY(0px)',opacity: 1}}>
                        <li><section className="sidebar-group"><button className="sidebar-heading clickable active" onClick={arrowClick}><i className="icon iconfont icon-basic"></i><span className="title">基础</span><span className="arrow right"></span></button></section></li>
                        <li><section className="sidebar-group"><button className="sidebar-heading clickable" onClick={arrowClick}><i className="icon iconfont icon-container"></i><span className="title">集合</span><span className="arrow right"></span></button></section></li>
                        <li><section className="sidebar-group"><button className="sidebar-heading clickable" onClick={arrowClick}><i className="icon iconfont icon-code"></i><span className="title">IO</span><span className="arrow right"></span></button></section></li>
                        <li><section className="sidebar-group"><button className="sidebar-heading clickable" onClick={arrowClick}><i className="icon iconfont icon-et-performance"></i><span className="title">并发编程</span><span className="arrow right"></span></button></section></li>
                        <li><section className="sidebar-group"><button className="sidebar-heading clickable" onClick={arrowClick}><i className="icon iconfont icon-virtual_machine"></i><span className="title">JVM</span><span className="arrow right"></span></button></section></li>
                        <li><section className="sidebar-group"><button className="sidebar-heading clickable" onClick={arrowClick}><i className="icon iconfont icon-featured"></i><span className="title">新特性</span><span className="arrow right"></span></button></section></li>
                    </ul>

                </section></li>
                <li>
                    <section className="sidebar-group"><button className="sidebar-heading clickable" onClick={arrowClick}><i className="icon iconfont icon-java"></i><span className="title">Python</span><span className="arrow right"></span></button>
                    </section>
                </li>
             </ul>

            <style jsx>{`
            .sidebar {
                box-shadow: 2px 0 8px rgba(0, 0, 0, .15);
                transform: translate(0);
            }
            .sidebar {
                top: 3.75rem;
            }
            .sidebar {
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                z-index: 150;
                overflow-y: auto;
                box-sizing: border-box;
                width: 20rem;
                margin: 0;
                background: rgba(255,255,255,.9);
                box-shadow: 2px 0 4px rgba(0, 0, 0, .15);
                font-size: 16px;
                transition: background-color .3s ease;,box-shadow .3s ease;,transform .3s ease;;
                //transform: translate(-100%);
                -webkit-backdrop-filter: saturate(150%) blur(12px);
                backdrop-filter: saturate(150%) blur(12px);
                scrollbar-color: var(--theme-color) var(--border-color);
                scrollbar-width: thin;
            }
            .sidebar>.sidebar-links {
                padding: 1.5rem 0;
            }
            .sidebar-links, .sidebar-links ul {
                margin: 0;
                padding: 0;
            }
            button.sidebar-heading {
                outline: 0;
                font-weight: inherit;
                line-height: inherit;
                text-align: left;
                cursor: pointer;
            }
            .sidebar-heading {
                display: flex;
                align-items: center;
                overflow: hidden;
                margin: 0;
                border-width: 0;
                border-left: 0.25rem solid transparent;
                border-top-right-radius: 0.25rem;
                border-bottom-right-radius: 0.25rem;
                background-color: transparent;
                font-size: 1.1em;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                transition: color .15s ease;
                transform: rotate(0);
            }

            .sidebar-heading:hover {
                background: #eee;
            }
            .sidebar-heading, .sidebar-link {
                box-sizing: border-box;
                width: 100%;
                padding: 0.35rem 1rem 0.35rem 1.25rem;
                color: #2c3e50;
            }
            .sidebar .icon {
                margin-right: 0.25em;
            }
            .sidebar-heading .icon {
                margin-right: 0.25em;
            }
            .sidebar-group .sidebar-group .sidebar-heading {
                font-size: 1em;
            }
            .iconfont {
                font-family: "iconfont" !important;
                font-size: 16px;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
            .sidebar-heading .title {
                flex: 1;
            }
            .sidebar-heading .arrow.right {
                transform: rotate(90deg);
            }
            .sidebar-heading .arrow.down {
                transform: rotate(180deg);
            }
            .sidebar-heading .arrow {
                display: inline-block;
                vertical-align: middle;
                width: 1em;
                height: 1em;
                background-image: url('arrow.svg');;
                line-height: normal;
                transition: all .3s;
                font-size: 1.5em;
            }
            `}</style>
        </aside>
    )
}