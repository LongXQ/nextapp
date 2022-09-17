import Header from '../components/header'
import Toc from '../components/toc'
import Sidebar from '../components/sidebar'
import Subheader from '../components/subheader'
import Main from '../components/main'
import Dock from '../components/dock'

import Listbox from '../components/listbox'

import Fixbox from '../components/fixbox'
import Bookcard from '../components/bookcard'

import Booksummary from '../components/booksummary'

import Category from '../components/category'

import Tagnavigator from '../components/tagnavigator'

function toggleClick(ev) {
  ev.preventDefault();
  var previousSibling = ev.currentTarget.previousSibling;
  if(previousSibling.classList.contains('unfold-mobile')) {
    previousSibling.classList.remove('unfold-mobile');
  }else{
    previousSibling.classList.add('unfold-mobile');
  }
}

export default function Test({java}) {
  return (
    <>
     <Header></Header>
     <div className='subheader-wraper'>
            <Subheader />
        </div>
    <div className='container main-container'>
    <Tagnavigator></Tagnavigator>
     <main className='main'>
       <div className='dock'>
         <Dock></Dock>
       </div>
       <Main></Main>
       <div className="sidebar">
         <Listbox></Listbox>
         <Fixbox></Fixbox>
       </div>
     </main>
     </div>

    {/* <Category></Category> */}
   


    
{/* <Header></Header>
<Subheader></Subheader> */}
{/* <Booksummary></Booksummary>
<div className="toggle-sidebar-wrapper" onClick={toggleClick}>
  <span className="arrow left"></span>
</div> */}

    

    <style jsx>{`
.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
}

.subheader-wraper {
  position: relative;
}

.main-container {
  max-width: 1240px;
}
    .main {
      margin-top: 4.67rem;
      margin-bottom: 6rem;
      display: flex;
      align-items: flex-start;
    }

    .dock {
      margin-right: 20px;
      width: 180px;
  }

    .sidebar {
      width: 260px;
      flex: 1
    }

    @media (max-width: 1200px){
      .dock, .sidebar {
          display: none;
      }
    }

    .toggle-sidebar-wrapper {
      position: fixed;
      background: #fff;
      // top: calc(3.75rem);
      // bottom: 0;
      height :100%;
      left: 322px;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      transition: left .3s ease;
  }

.toggle-sidebar-wrapper .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 1em;
    height: 1em;
    background-image: url('/arrow.svg');
    line-height: normal;
    transition: all .3s;
}

.toggle-sidebar-wrapper .arrow.left {
  transform: rotate(-90deg);
}
    
    `}

    </style>
    
    
    </>
  )
}
