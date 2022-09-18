import Header from '../../components/header'
import Main from '../../components/main'

function toggleClick(ev) {
  ev.preventDefault();
  var previousSibling = ev.currentTarget.previousSibling;
  if(previousSibling.classList.contains('unfold-mobile')) {
    previousSibling.classList.remove('unfold-mobile');
  }else{
    previousSibling.classList.add('unfold-mobile');
  }
}

export default function index({java}) {
  return (
    <>
     <Header current='mq'></Header>
    <div className='container main-container'>
     <main className='main'>
       <Main></Main>
     </main>
     </div>
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
      // margin-top: 4.67rem;
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
