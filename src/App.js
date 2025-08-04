import React, { Suspense, useEffect, useRef } from 'react';
import { HashRouter, Route, Routes, Navigate, Outlet, BrowserRouter } from 'react-router-dom';
import { Footer, Header, Nav, BottomNavigations } from './components';
import { BackToTop, ScrollProgress, SpeedDialCV } from './view/action';
import '../src/assets/css/index.css';
import { useGlobalContext } from "./context/contextGlobal";


const Page404 = React.lazy(() => import('./view/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./view/pages/page500/Page500'));

const Cv = React.lazy(() => import('./view/cv/cvLinh'));

const ProtectedRoute = () => {
  const { isMobile } = useGlobalContext();
  return (
    <div className="flex flex-col w-full body-cv"  >
      {/* progress bar */}
      <ScrollProgress />

      {/* back to top */}
      <BackToTop />

      {/* <SpeedDialCV /> */}

      {/* <!-- Header --> */}
      <Header />

      {/* Nav */}
      {isMobile == false ? <Nav /> : <BottomNavigations />}

      {/* nd chinh */}
      <Outlet />

      {/* Footer */}
      <Footer />

    </div>

  );
};

function App() {

  return (
    <BrowserRouter >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Navigate to="/cv" replace />} />
            <Route exact path="/cv" name="Cv" element={<Cv />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter >
  )
}

export default App
