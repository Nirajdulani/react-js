import React from "react";






function Widget(props) {

  
  return (
    <div>
 <div className="flex h-48 w-48  flex-row items-center justify-center bg-gray-100 py-6 sm:py-12">
  <div className="flex space-x-6" id="widget">
    <div className="flex flex-col items-center justify-center rounded-lg bg-white">
      <div className="flex flex-col space-x-2">
        <div className="text-center text-4xl font-bold">{props.fl}</div>
        <div className="my-2 text-center text-gray-500">Users reached</div>
        <div className="flex items-center text-green-500">
          <div className="mx-auto flex">
          
            <span>{props.per}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Widget;
