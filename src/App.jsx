import Banner from "./components/Banner"
import Digitools from "./components/Digitools"
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"
import Steps from "./components/Steps"
import PricingPlan from "./components/PricingPlan"
import Workflow from "./components/Workflow"
import Footer from "./components/Footer"
import { Suspense, useState } from "react"
import { ToastContainer } from "react-toastify"

function App() {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const productPromise = async () => {
    const res = await fetch('/products.json');
    return res.json();
  }

  return (
    <>
      <header>
        <Navbar selectedProduct={selectedProduct} />
      </header>

      <main>
        <Banner />
        <Stats />

        <Suspense fallback={
          <div className="flex justify-center items-center py-16">
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>}>
          <Digitools productPromise={productPromise()} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
        </Suspense>

        <Steps />
        <PricingPlan />
        <Workflow />
      </main>

      <footer>
        <Footer />
      </footer>

      <ToastContainer stacked />
    </>
  )
}

export default App
