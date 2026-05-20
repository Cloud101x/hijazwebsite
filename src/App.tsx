import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteFallback } from './components/layout/RouteFallback';
import { NotFound } from './pages/NotFound';

const AgencyApp = lazy(() => import('./portfolio/agency/AgencyApp'));
const PortfolioIndex = lazy(() =>
  import('./pages/PortfolioIndex').then((m) => ({ default: m.PortfolioIndex })),
);
const ArcadeApp = lazy(() => import('./portfolio/arcade/ArcadeApp'));
const CommerceApp = lazy(() => import('./portfolio/commerce/CommerceApp'));
const SchoolApp = lazy(() => import('./portfolio/school/SchoolApp'));
const ConstructionApp = lazy(() => import('./portfolio/construction/ConstructionApp'));
const EstateApp = lazy(() => import('./portfolio/estate/EstateApp'));

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<AgencyApp />} />
        <Route path="/portfolio" element={<PortfolioIndex />} />
        <Route path="/arcade" element={<ArcadeApp />} />
        <Route path="/commerce" element={<CommerceApp />} />
        <Route path="/school" element={<SchoolApp />} />
        <Route path="/construction" element={<ConstructionApp />} />
        <Route path="/estate" element={<EstateApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
