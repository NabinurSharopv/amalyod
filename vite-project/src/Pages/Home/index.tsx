import Dashboard from "../../components/dashboard"
import Header from "../../components/header"
import Hero from "../../components/hero"
// import Page1 from "../../components/Page1"
// import Page2 from "../../components/Page2"  

const Home = () => {
  return (
    <>
      <Header />
       <div>
        <Hero />
       </div>
       <Dashboard />
       {/* <Page1 />
       <Page2 /> */}
    </>
  )
}

export default  Home