import { Users, TrendingUp, CheckCircle, Heart, Home, Info, Briefcase, Phone, User, Search, Filter } from "lucide-react";

export default function App() {
  return (
  <div className="min-h-screen bg-white ">
  <div className=" h-15 border  gap-6 pt-4">
     <div className="flex justify-center gap-3 ">
       <div className="flex items-center gap-1 border border-blue-500 text-blue-500 font-bold text-sm p-2   rounded-lg"><Home className="size-4 " /> Home</div>
    <div className="flex items-center gap-1 border border-black font-bold text-sm p-2  rounded-lg"><Briefcase className="size-4" /> Service</div>
      <div className="flex items-center gap-1 border border-black font-bold text-sm p-2 rounded-lg"><Phone className="size-4" /> Contact</div>
      <div className="flex items-center gap-1 border border-black font-bold text-sm p-2 rounded-lg"><User className="size-4" /> Profile</div>
      
      </div>


     {/* <div className="flex  justify-end gap-3 ">
          <div className="  h-4 w-4 border border-black pt-4 rounded"> </div>
           <div className="  h-4 w-4 border border-black pt-4 rounded"> </div>
            <div className="  h-4 w-4 border border-black pt-4 rounded"> </div>
      </div> */}
  


 <div className="  overflow-y-auto  border-x border-b pt-8 px-8 space-y-10 ">


  <div className="flex items-center justify-between ">
     <div className="  font-bold text-2xl font-bold   ">  Dahboard </div>
     <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 border border-black rounded-lg px-2 py-1">
          <Search className="size-4" />
          <input type="text" placeholder="Search" className="outline-none text-sm" />
        </div>
        <div className="flex items-center gap-1 border border-black font-bold text-sm px-2 py-1 rounded-lg">
          <Filter className="size-4" /> Filter
        </div>
     </div>
</div>

      <div className=" grid grid-cols-4 gap-6  ">


        <div className="rounded-lg border border-black bg-gray-100 shadow-md p-3">
  <div className="flex items-center gap-2">
    <div className="size-5 rounded-full border border-black bg-blue-100 shrink-0 flex items-center justify-center">
      <Users className="size-3" />
    </div>

    <p className="font-mono text-base font-bold truncate">
      New Applicants
    </p>
  </div>

  <div className="mt-2 flex items-center gap-2">
    <span className="font-bold">148</span>
    <span className="text-xs text-green-600 font-medium bg-green-200 px-2 py-1 rounded">+18%</span>
  </div>
</div>


          <div className="   border border-black rounded-lg   bg-gray-100 shadow-md p-3">
           <div className="flex items-center gap-2">
    <div className="size-5 rounded-full border border-black bg-blue-100 shrink-0 flex items-center justify-center">
      <TrendingUp className="size-3" />
    </div>

    <p className="font-mono text-base font-bold truncate">
      Interview Conversion Rate
    </p>
  </div>

  <div className="mt-2 flex items-center gap-2">
    <span className="font-bold">190</span>
    <span className="text-xs text-red-600 font-medium bg-red-200 px-2 py-1 rounded">-22%</span>
  </div>

          </div>
           <div className="   border border-black rounded-lg   bg-gray-100 shadow-md p-3">
           

             <div className="flex items-center gap-2  ">
    <div className="size-5 rounded-full border border-black bg-blue-100 shrink-0 flex items-center justify-center">
      <CheckCircle className="size-3" />
    </div>

    <p className="font-mono text-base font-bold truncate">
      Offer Acceptance Rate
    </p>
  </div>

  <div className="mt-2 flex items-center gap-2">
    <span className="font-bold">256</span>
    <span className="text-xs text-green-600 font-medium bg-green-200 px-2 py-1 rounded">+15%</span>
  </div>

   
           </div>

            <div className="   border border-black rounded-lg   bg-gray-100 shadow-md p-3 ">
              
             <div className="flex items-center gap-2  ">
    <div className="size-5 rounded-full border border-black bg-blue-100 shrink-0 flex items-center justify-center">
      <Heart className="size-3" />
    </div>

    <p className="font-mono text-base font-bold truncate">
      Employee Retention Rate
    </p>
  </div>

  <div className="mt-2 flex items-center gap-2">
    <span className="font-bold">92</span>
    <span className="text-xs text-red-600 font-medium bg-red-200 px-2 py-1 rounded">-15%</span>
  </div>
            </div>
      </div>
          <div className="grid grid-cols-12 gap-6">
            <div className=" h-80  col-span-8 border flex border-black p-4 gap-30 overflow-x-auto rounded flex gap-4 ">
               <div>item1</div>
                <div>item1</div>
                 <div>item1</div>
               <div>item1</div>
                <div>item1</div>
                 <div>item1</div>
                  <div>item1</div>
                   <div>item1</div>
                    <div>item1</div>
                     <div>item1</div>
                      <div>item1</div>


            </div>
             <div className="h-80  col-span-4  border border-black rounded"></div> 
          </div>
          <div className="grid grid-cols-3 gap-6 pb-5">
            <div className="  h-60 border  border-black p-5 overflow-y-auto  ">
              
              <div>item1</div>
               <div>item1</div>
                <div>item1</div>
                 <div>item1</div>
                  <div>item1</div>
                   <div>item1</div>
                    <div>item1</div>
                     <div>item1</div>
                      <div>item1</div>
                       <div>item1</div>
                        <div>item1</div>
                         <div>item1</div>
                          <div>item1</div>

            </div>
             <div className="  h-60 border border-black p-5 overflow-y-auto rounded">
              
              
              <div>item1</div>
               <div>item1</div>
                <div>item1</div>
                 <div>item1</div>
                  <div>item1</div>
                   <div>item1</div>
                    <div>item1</div>
                     <div>item1</div>
                      <div>item1</div>
                       <div>item1</div>
                        <div>item1</div>
                         <div>item1</div>
                          <div>item1</div>

            </div> 
              <div className="  h-60 border  border-black p-5 overflow-y-auto rounded shrink-0">
              
              <div>item1</div>
               <div>item1</div>
                <div>item1</div>
                 <div>item1</div>
                  <div>item1</div>
                   <div>item1</div>
                    <div>item1</div>
                     <div>item1</div>
                      <div>item1</div>
                       <div>item1</div>
                        <div>item1</div>
                         <div>item1</div>
                          <div>item1</div>

            </div>
             
          </div>     
      </div>
</div></div>

  );
} 