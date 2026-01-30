import Category from "./catigory"
import Products from "./products"

const Dashboard = () => {
  return (
    <div className="max-w-[1490px]   mt-5">
      <div className="grid grid-cols-[380px_1fr] gap-12">
          <Category />
          <Products />
      </div>
    </div>
  )
}

export default Dashboard