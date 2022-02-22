import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi"

const Items = () => {
    let [toggleForm, setToggleForm] = useState(false);
    return (
        <div>
            <button onClick={() => {setToggleForm(!toggleForm)}} 
                className={`bg-blue-400 text-white px-2 py-3 w-full text-left ${toggleForm ? 'rounded-t-md' : 'rounded-md' }`}>
                <div><BiCalendarPlus className="inline-block align-text-top" /> Add item</div>
            </button>
            {
                toggleForm && 
                <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="productName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Product Name
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="text" name="productName" id="productName"
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>
            
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Company
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="text" name="companyName" id="companyName"
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>
            
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Date
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="date" name="date" id="date"
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>
            
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Time
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="time" name="time" id="time"
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>
            
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Description
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea id="description" name="description" rows="3"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Description about the product"></textarea>
                        </div>
                    </div>
            
            
                    <div className="pt-5">
                        <div className="flex justify-end">
                        <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                            Submit
                        </button>
                        </div>
                    </div>
                </div>
            }
      </div>
    )

}


export default Items