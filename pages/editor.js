import React, { useRef, useEffect } from 'react';

import Editor from "@monaco-editor/react";

var startX, startWidth, editorInstance;

function startDrag(e) {
    startX = e.clientX
    startWidth = getScalableDivWidth('.scalable')
    
    document.documentElement.addEventListener('mousemove', onDrag)
    document.documentElement.addEventListener('mouseup', stopDrag)
}
  
function onDrag(e) {
    let newWidth = startWidth + e.clientX - startX
    let x = document.querySelectorAll('.scalable')
  
    if(newWidth < 320) {
      x[0].style.width = 320 + 'px'
      x[1].style.width = 320 + 'px'
      return
    }
  
    x[0].style.width = newWidth + 'px'
    x[1].style.width = newWidth + 'px'
    editorInstance.layout()
  }
  
  function stopDrag(e) {
  //   localStorage.setItem('scalable_width', getScalableDivWidth())
    document.documentElement.removeEventListener('mousemove', onDrag)
    document.documentElement.removeEventListener('mouseup', stopDrag)
  }
  
  function getScalableDivWidth(ele) {
    return parseInt(window.getComputedStyle(document.querySelector(ele)).width, 10)
  }

  function updateEditor() {
startWidth = getScalableDivWidth('.scalable')

document.querySelector('.scalable').style.width = startWidth + 'px'

document.querySelector('.separator').addEventListener('mousedown', startDrag)

// var editor = monaco.editor.create(document.getElementById('container'), {
//         value: ['<div>hello,world</div>'].join('\n'),
//         language: 'javascript'
//     })

}


export default function MonacoEditor() {

    useEffect(() => {
        document.querySelector('body').className = "fixed overflow-hidden w-full min-h-full flex text-gray-900 dark:text-white bg-white dark:bg-gray-900";
        // Update the document title using the browser API
        updateEditor();

    }, []);

    function handleEditorDidMount(editor, monaco) {
        // here is the editor instance
        // you can store it in `useRef` for further usage
        editorInstance = editor; 
      }
    

    return (
     <>
        <header className="relative z-20 flex-none py-3 pl-5 pr-3 sm:pl-6 sm:pr-4 md:pr-3.5 lg:px-6 flex items-center space-x-4 antialiased"
                style={{fontFeatureSettings:"cv02, cv03,cv04,cv11"}}>
            <div className=" flex-auto flex items-center min-w-0 space-x-6">
                <svg width="171" height="21" fill="none" className="flex-none text-black dark:text-white">
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M16.414.441c-4.377 0-7.113 2.189-8.207 6.566 1.642-2.188 3.556-3.01 5.745-2.462 1.249.312 2.141 1.218 3.13 2.22 1.608 1.634 3.471 3.525 7.54 3.525 4.376 0 7.112-2.189 8.206-6.566-1.641 2.189-3.556 3.01-5.745 2.462-1.248-.312-2.14-1.218-3.129-2.22C22.345 2.332 20.482.44 16.414.44zM8.207 10.29c-4.377 0-7.113 2.189-8.207 6.566 1.641-2.189 3.556-3.01 5.745-2.463 1.249.313 2.141 1.218 3.13 2.221 1.608 1.634 3.471 3.524 7.54 3.524 4.376 0 7.112-2.188 8.206-6.565-1.641 2.188-3.556 3.009-5.745 2.462-1.248-.312-2.14-1.218-3.129-2.22-1.61-1.634-3.472-3.525-7.54-3.525z"
                    fill="#38BDF8"></path>
                <path
                    d="M50.135 7.576v-2.36h-2.812V2.042l-2.45.726v2.45h-2.086v2.359h2.086v5.443c0 2.949 1.497 3.992 5.262 3.538v-2.2c-1.86.091-2.812.114-2.812-1.338V7.576h2.812zM60.874 5.217v1.61c-.862-1.18-2.2-1.905-3.97-1.905-3.084 0-5.647 2.586-5.647 5.965 0 3.357 2.563 5.965 5.648 5.965 1.769 0 3.107-.726 3.969-1.928v1.633h2.45V5.217h-2.45zm-3.584 9.3c-2.041 0-3.584-1.52-3.584-3.63s1.543-3.629 3.584-3.629c2.041 0 3.584 1.52 3.584 3.63 0 2.108-1.543 3.628-3.584 3.628zM67.403 3.516c.862 0 1.565-.726 1.565-1.565 0-.862-.703-1.565-1.565-1.565s-1.565.703-1.565 1.565c0 .839.704 1.565 1.565 1.565zM66.18 16.557h2.45V5.217h-2.45v11.34zM71.472 16.557h2.45V0h-2.45v16.557zM89.83 5.217l-2.222 7.825-2.359-7.825h-2.336l-2.382 7.825-2.2-7.825h-2.585l3.56 11.34h2.405l2.381-7.643 2.36 7.643h2.403l3.561-11.34h-2.585zM95.445 3.516c.862 0 1.565-.726 1.565-1.565 0-.862-.703-1.565-1.565-1.565s-1.565.703-1.565 1.565c0 .839.703 1.565 1.565 1.565zM94.22 16.557h2.45V5.217h-2.45v11.34zM105.479 4.922c-1.542 0-2.767.567-3.515 1.746V5.217h-2.45v11.34h2.45V10.48c0-2.314 1.27-3.266 2.88-3.266 1.543 0 2.541.907 2.541 2.63v6.714h2.449V9.594c0-2.948-1.814-4.672-4.355-4.672zM121.454.68v6.147c-.862-1.18-2.2-1.905-3.97-1.905-3.084 0-5.647 2.586-5.647 5.965 0 3.357 2.563 5.965 5.647 5.965 1.77 0 3.108-.726 3.97-1.928v1.633h2.449V.68h-2.449zm-3.584 13.836c-2.041 0-3.584-1.52-3.584-3.629 0-2.11 1.543-3.629 3.584-3.629 2.041 0 3.584 1.52 3.584 3.63 0 2.108-1.543 3.628-3.584 3.628z"
                    fill="currentColor"></path>
                <path
                    d="M133.181 4.859h-4.362v11.699h2.306v-3.844h2.056c2.256 0 3.994-1.738 3.994-3.928 0-2.189-1.738-3.927-3.994-3.927zm0 5.699h-2.056V7.015h2.056c.986 0 1.705.752 1.705 1.771 0 1.003-.719 1.772-1.705 1.772zM142.654 14.352V4.859h-2.306v11.699h6.769v-2.206h-4.463zM157.945 16.558h2.507l-4.111-11.7h-2.858l-4.095 11.7h2.491l.701-2.106h4.663l.702 2.106zm-4.629-4.262l1.604-4.78 1.605 4.78h-3.209zM171 4.859h-2.607l-2.54 4.88-2.541-4.88h-2.607l3.995 7.136v4.563h2.289v-4.563L171 4.86z"
                    fill="#38BDF8"></path>
                </svg>
                <div className="hidden sm:flex items-center space-x-4 min-w-0">
                    <button type="button"
                    className="relative flex-none rounded-md text-sm font-semibold leading-6 py-1.5 px-3 hover:bg-sky-400 bg-sky-500 text-white shadow-sm dark:shadow-highlight/20">
                        <span
                            className="absolute inset-0 flex items-center justify-center" aria-hidden="false">
                            Share
                        </span>
                        <span
                            className="absolute inset-0 flex items-center justify-center invisible" aria-hidden="true"><span
                            className="sr-only">Loading</span><svg fill="none" viewBox="0 0 24 24"
                            className="w-4 h-4 animate-spin">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4">
                            </circle>
                            <path className="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                            </svg>
                        </span>
                        <span className="invisible" aria-hidden="true">Copied!</span>
                    </button>
                 </div>
            </div>
    <div className="flex items-center">
        <div className="relative"><button
                className="text-gray-500 text-xs leading-5 font-semibold bg-gray-400/10 rounded-full py-1 px-3 flex items-center hover:bg-gray-400/20 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:shadow-highlight/4"
                id="headlessui-listbox-button-1" type="button" aria-haspopup="true" aria-expanded="false">v
                3.0.24<svg width="6" height="3" className="ml-2 overflow-visible" aria-hidden="true">
                    <path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round"></path>
                </svg>
            </button>
            <div className="absolute top-full right-0 mt-2 rounded-lg shadow-lg"></div>
        </div>
        <div className="hidden lg:flex items-center ml-6 rounded-md ring-1 ring-gray-900/5 shadow-sm dark:ring-0 dark:bg-gray-800 dark:shadow-highlight/4">
            <button type="button"
                className="group focus:outline-none focus-visible:ring-2 rounded-md focus-visible:ring-sky-500 dark:focus-visible:ring-sky-400"><span
                    className="sr-only">Switch to vertical split layout</span><svg width="42" height="36"
                    viewBox="-8 -7 42 36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="fill-sky-100 stroke-sky-500 dark:fill-sky-400/50 dark:stroke-sky-400">
                    <path d="M12 3h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9" fill="none"></path>
                    <path d="M3 17V5a2 2 0 0 1 2-2h7a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2Z"></path>
                </svg>
            </button>
            <button type="button"
                className="group focus:outline-none focus-visible:ring-2 rounded-md focus-visible:ring-gray-400/70 dark:focus-visible:ring-gray-500"><span
                    className="sr-only">Switch to horizontal split layout</span><svg width="42" height="36"
                    viewBox="-8 -7 42 36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="fill-gray-100 stroke-gray-400/70 hover:fill-gray-200 hover:stroke-gray-400 dark:fill-gray-400/20 dark:stroke-gray-500 dark:hover:fill-gray-400/30 dark:hover:stroke-gray-400">
                    <path d="M23 11V3H3v8h20Z" strokeWidth="0"></path>
                    <path d="M23 17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2ZM22 11H4"
                        fill="none"></path>
                </svg>
            </button>
            <button type="button"
                className="group focus:outline-none focus-visible:ring-2 rounded-md focus-visible:ring-gray-400/70 dark:focus-visible:ring-gray-500"><span
                    className="sr-only">Switch to preview-only layout</span><svg width="42" height="36"
                    viewBox="-8 -7 42 36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="fill-gray-100 stroke-gray-400/70 hover:fill-gray-200 hover:stroke-gray-400 dark:fill-gray-400/20 dark:stroke-gray-500 dark:hover:fill-gray-400/30 dark:hover:stroke-gray-400">
                    <path d="M23 17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" fill="none">
                    </path>
                </svg>
            </button>
            <button type="button"
                className="hidden md:block group focus:outline-none focus-visible:ring-2 rounded-md focus-visible:ring-gray-400/70 dark:focus-visible:ring-gray-500">
                <span
                    className="sr-only">Toggle responsive design mode</span><svg width="42" height="36"
                    viewBox="-8 -7 42 36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="fill-gray-100 stroke-gray-400/70 hover:fill-gray-200 hover:stroke-gray-400 dark:fill-gray-400/20 dark:stroke-gray-500 dark:hover:fill-gray-400/30 dark:hover:stroke-gray-400">
                    <path d="M15 19h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a1 1 0 0 0-1 1" fill="none"></path>
                    <path d="M12 17V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2Z"></path>
                </svg>
            </button>
        </div>
        <div className="hidden sm:block mx-6 lg:mx-4 w-px h-6 bg-gray-200 dark:bg-gray-700"></div><button type="button"
            className="ml-4 sm:ml-0 ring-1 ring-gray-900/5 shadow-sm hover:bg-gray-50 dark:ring-0 dark:bg-gray-800 dark:hover:bg-gray-700 dark:shadow-highlight/4 group focus:outline-none focus-visible:ring-2 rounded-md focus-visible:ring-sky-500 dark:focus-visible:ring-2 dark:focus-visible:ring-gray-400"><span
                className="sr-only"><span className="dark:hidden">Switch to dark theme</span><span
                    className="hidden dark:inline">Switch to light theme</span></span><svg width="36" height="36"
                viewBox="-6 -6 36 36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="stroke-sky-500 fill-sky-100 group-hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:group-hover:stroke-gray-300">
                <g className="dark:opacity-0">
                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                    <path
                        d="M12 4v.01M17.66 6.345l-.007.007M20.005 12.005h-.01M17.66 17.665l-.007-.007M12 20.01V20M6.34 17.665l.007-.007M3.995 12.005h.01M6.34 6.344l.007.007"
                        fill="none"></path>
                </g>
                <g className="opacity-0 dark:opacity-100">
                    <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
                    <path
                        d="M12 3v1M18.66 5.345l-.828.828M21.005 12.005h-1M18.66 18.665l-.828-.828M12 21.01V20M5.34 18.666l.835-.836M2.995 12.005h1.01M5.34 5.344l.835.836"
                        fill="none"></path>
                </g>
            </svg></button>
    </div>
        </header>

        <main className="flex-auto relative border-t border-gray-200 dark:border-gray-800">
            
            <div className="scalable flex items-center flex-none pl-5 sm:pl-6 pr-4 lg:pr-6 absolute z-10 top-0 left-0 -mb-px antialiased"
                style={{width: "537px",fontFeatureSettings:"cv02, cv03, cv04, cv11"}}>
                <div className="flex space-x-5">
                    <button type="button"
                        className="relative flex py-3 text-sm leading-6 font-semibold focus:outline-none text-sky-500"><span
                            className="absolute bottom-0 inset-x-0 bg-sky-500 h-0.5 rounded-full transition-opacity duration-150"></span>
                            HTML
                    </button>
                    <button
                        type="button"
                        className="relative flex py-3 text-sm leading-6 font-semibold focus:outline-none text-gray-700 hover:text-gray-900 focus:text-gray-900 dark:text-gray-300 dark:hover:text-white"><span
                            className="absolute bottom-0 inset-x-0 bg-sky-500 h-0.5 rounded-full transition-opacity duration-150 opacity-0"></span>
                            CSS
                    </button>
                    <button
                        type="button"
                        className="relative flex py-3 text-sm leading-6 font-semibold focus:outline-none text-gray-700 hover:text-gray-900 focus:text-gray-900 dark:text-gray-300 dark:hover:text-white"><span
                            className="absolute bottom-0 inset-x-0 bg-sky-500 h-0.5 rounded-full transition-opacity duration-150 opacity-0"></span>
                            Config
                    </button>
                </div>
                <div className="ml-auto flex items-center">
                    <button type="button"
                        className="ml-4 text-sm font-semibold text-gray-500 flex items-center hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"><svg
                            viewBox="0 0 24 24" className="w-6 h-6 mr-1" aria-hidden="true">
                            <path
                                d="M5 9a2 2 0 0 1 2 2 1 1 0 1 0 2 0 2 2 0 0 1 2-2 1 1 0 1 0 0-2 2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2Z"
                                fill="currentColor" className="text-gray-400 dark:text-gray-500"></path>
                            <path
                                d="M11 16a3 3 0 0 1 3 3 1 1 0 1 0 2 0 3 3 0 0 1 3-3 1 1 0 1 0 0-2 3 3 0 0 1-3-3 1 1 0 1 0-2 0 3 3 0 0 1-3 3 1 1 0 1 0 0 2Z"
                                fill="currentColor" className="text-gray-300 dark:text-gray-400"></path>
                        </svg>Tidy<span className="sr-only">, and focus editor</span>
                    </button>
                </div>
            </div>

            <div className="SplitPane  vertical "
                style={{display:"flex",flex: "1 1 0%",height: "100%",position:"absolute",outline: "none",overflow: "hidden",userSelect: "text",flexDirection: "row",left: "0px",right: "0px"}}>
                <div className="Pane vertical Pane1 scalable"
                    style={{flex:"0 0 auto",position: "relative",outline: "none",width: "537px",marginTop: "-1px",display: "flex",flexDirection: "column"}}>
                    <div className="flex flex-auto">
                        <div className="mt-12 relative flex-auto">
                            <div className="SplitPane  horizontal "
                                style={{display: "flex",flex: "1 1 0%",height: "100%",position: "absolute",outline: "none",overflow: "hidden",userSelect: "text",bottom: "0px",flexDirection: "column",minHeight: "100%",top: "0px",width: "100%"}}>
                                <div className="Pane horizontal Pane1  "
                                    style={{flex: "1 1 0%",position: "relative",outline: "none",display: "flex",flexDirection: "column"}}>
                                    <div className="border-t border-gray-200 dark:border-white/10 flex-auto flex -mb-2">
                                        <div className="relative flex-auto">
                                        
                                    
                                            <div id="container" className="absolute inset-0 w-full h-full">
                                                <Editor height="100%" width="100%" defaultLanguage="json" defaultValue="// some comment json" onMount={handleEditorDidMount}/>
                                            </div>

                                            <button type="button"
                                                className="rounded-full bg-gray-50 text-gray-500 text-xs font-semibold leading-6 py-0.5 pl-2 pr-2.5 flex items-center hover:bg-gray-100 transition-opacity select-none dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 opacity-0 pointer-events-none focus:opacity-100 focus:pointer-events-auto absolute bottom-4 right-[calc(14px+0.625rem)]"><svg
                                                    viewBox="0 0 20 20" className="w-5 h-5 text-gray-400 flex-none mr-1" fill="none"
                                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round" aria-hidden="true">
                                                    <path
                                                        d="M7 4.75H5.75a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H13">
                                                    </path>
                                                    <path
                                                        d="M12 6.25H8a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM7.75 10.25h4.5M7.75 13.25h4.5">
                                                    </path>
                                                </svg><span className="">Copy<span className="sr-only">, then focus
                                                        editor</span></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <span role="presentation" className="Resizer horizontal "
                                    style={{zIndex: 10,background: "none"}}>
                                </span>
                                <div className="Pane horizontal Pane2  "
                                    style={{flex: "0 0 auto",position: "relative",outline: "none", height: "48px",display: "flex"}}>
                                    <div
                                        className="flex-auto flex flex-col ring-1 ring-gray-900/[0.07] rounded-t-lg overflow-hidden dark:rounded-none dark:ring-0 shadow-[0_2px_11px_rgba(0,0,0,0.1),0_3px_6px_rgba(0,0,0,0.05)]">
                                        <button type="button"
                                            className="flex-none group h-12 px-6 text-left text-sm leading-6 bg-white font-semibold focus:outline-none text-gray-700 hover:text-gray-900 dark:bg-gray-900 dark:text-gray-300 dark:hover:text-white flex items-center justify-between border-y border-t-transparent border-b-gray-900/10 dark:bg-gradient-to-b dark:from-[#242F41] dark:to-gray-800 dark:shadow-highlight/4 dark:ring-1 dark:ring-inset dark:ring-white/[0.08] dark:rounded-t-lg dark:border-0">
                                            Generated CSS
                                            <svg
                                                className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 rotate-180"
                                                fill="none" viewBox="0 0 24 24">
                                                <path d="m17 10-5 5-5-5" stroke="currentColor" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <span role="presentation" className="Resizer Resizer vertical separator"></span>

                <div className="Pane vertical Pane2  " style={{flex: "1 1 0%", position: "relative", outline: "none", marginTop: "-1px"}}>
                    <div className="absolute inset-0 w-full h-full">
                        <div
                            className="absolute inset-0 top-12 lg:top-0 flex flex-col border-t border-gray-200 dark:border-white/10 lg:border-0 bg-gray-50 dark:bg-black">
                            <div className="flex-auto grid justify-center" style={{gridTemplateColumns: "100%"}}>
                                <div className="relative">
                               
                                <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                                    <img src="/beams.jpg" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
                                    <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                                    <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                                      <div className="mx-auto max-w-md">
                                        <img src="https://play.tailwindcss.com/img/logo.svg" className="h-6" alt="Tailwind Play" />
                                        <div className="divide-y divide-gray-300/50">
                                          <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                                            <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
                                            <ul className="space-y-4">
                                              <li className="flex items-center">
                                                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                                  <circle cx="12" cy="12" r="11" />
                                                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                                </svg>
                                                <p className="ml-4">
                                                  Customizing your
                                                  <code className="text-sm font-bold text-gray-900">tailwind.config.js</code> file
                                                </p>
                                              </li>
                                              <li className="flex items-center">
                                                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                                  <circle cx="12" cy="12" r="11" />
                                                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                                </svg>
                                                <p className="ml-4">
                                                  Extracting classes with
                                                  <code className="text-sm font-bold text-gray-900">@apply</code>
                                                </p>
                                              </li>
                                              <li className="flex items-center">
                                                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                                  <circle cx="12" cy="12" r="11" />
                                                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                                </svg>
                                                <p className="ml-4">Code completion with instant preview</p>
                                              </li>
                                            </ul>
                                            <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
                                          </div>
                                          <div className="pt-8 text-base font-semibold leading-7">
                                            <p className="text-gray-900">Want to dig deeper into Tailwind?</p>
                                            <p>
                                              <a href="https://tailwindcss.com/docs" className="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
     </>
    )
  }