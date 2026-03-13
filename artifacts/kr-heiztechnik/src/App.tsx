import { Switch, Route, Router as WouterRouter } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/components/layout";
import Home from "@/pages/home";
import Heizung from "@/pages/heizung";
import Sanitaer from "@/pages/sanitaer";
import Gas from "@/pages/gas";
import Notheizung from "@/pages/notheizung";
import Kontakt from "@/pages/kontakt";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/heizung" component={Heizung} />
      <Route path="/sanitaer" component={Sanitaer} />
      <Route path="/gas" component={Gas} />
      <Route path="/notheizung" component={Notheizung} />
      <Route path="/kontakt" component={Kontakt} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Use BASE_URL safely handling potential undefined values in generic environments
  const baseUrl = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  
  return (
    <HelmetProvider>
      <WouterRouter base={baseUrl}>
        <Layout>
          <Router />
        </Layout>
      </WouterRouter>
    </HelmetProvider>
  );
}

export default App;
