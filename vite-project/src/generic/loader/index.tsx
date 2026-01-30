import { Skeleton } from "antd";

const LoaderApi = () => {
    
     const categoryLoader = () => {
        return Array.from({length: 9}).map((_,index)=> (
         <div key={index}>    
           <Skeleton.Input key={index} active className="w-full!" block />          
        </div>
         ));
     }

     const productLoader = () => {
        return Array.from({length: 6}).map((_, index) => (
         <div key={index} className="flex flex-col gap-2"> 
           {/* <Skeleton.Input active  className="w-full" />
           <Skeleton.Input active  /> */}
           <Skeleton.Image active style={{height: 28, width: "100%"}} />
           <Skeleton.Input active  />
        </div> 
        )
        );
     }

    return{categoryLoader, productLoader}
}

export { LoaderApi }