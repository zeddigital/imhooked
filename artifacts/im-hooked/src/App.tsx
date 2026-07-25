import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import Home from '@/pages/home';
import NotFound from '@/pages/not-found';
import ChartersPage from '@/pages/charters';
import BayCharterPage from '@/pages/charters/bay';
import OffshoreCharterPage from '@/pages/charters/offshore';
import GalleryPage from '@/pages/gallery';
import AboutPage from '@/pages/about';
import ContactPage from '@/pages/contact';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/charters" component={ChartersPage} />
      <Route path="/charters/bay" component={BayCharterPage} />
      <Route path="/charters/offshore" component={OffshoreCharterPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
