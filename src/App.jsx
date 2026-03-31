import Banner from "./components/Banner"
import Digitools from "./components/Digitools"
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"
import Steps from "./components/Steps"
import PricingPlan from "./components/PricingPlan"
import Workflow from "./components/Workflow"
import Footer from "./components/Footer"
import { Suspense } from "react"

function App() {
  const productPromise = async () => {
    const res = await fetch('/products.json');
    return res.json();
  }

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Banner />
        <Stats />

        <Suspense fallback={<div>Loading...</div>}>
          <Digitools productPromise={productPromise()} />
        </Suspense>

        <Steps />
        <PricingPlan />
        <Workflow />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
