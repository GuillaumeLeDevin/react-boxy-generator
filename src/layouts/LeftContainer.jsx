import { useState } from "react"
import ShadowList from "./ShadowList/ShadowList"
import BoxPanel from "./BoxPanel/BoxPanel"


export default function LeftContainer() {

    const [tabs, setTabs] = useState(0);

    const tabsList = [
        {name: "Shadow", component: <ShadowList />},
        {name: "BoxPanel", component: <BoxPanel />}
    ]

  return (
    <div className="relative mt-20 border rounded-b rounded-tr shadow-xl w-[600px] h-[550px] bg-gray-50 md:mt-0">
        <div className="flex absolute -translate-y-full -left-[1px]">
            {tabsList.map((tab, index) => (
                <button
                onClick={() => setTabs(index)}
                key={index}
                className="min-w-[125px] py-2 px-3 mr-4 font-bold border-t border-x border-gray-300 bg-slate-50 hover:bg-slate-200 text-slate-700 rounded-t focus:outline-none hover:ring-2 ring-inset hover:ring-blue-300"
                style={{backgroundColor: tabs === index ? "" : "#e2e8f0"}}>
                    {tab.name}
                </button>
            ))}
        </div>
        <div className="h-full overflow-y-auto">
            {tabsList[tabs].component}
        </div>
    </div>
  )
}