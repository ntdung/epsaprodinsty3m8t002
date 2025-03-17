import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { NumberElementDataFragmentDoc, type NumberElementDataFragment } from "@/gql/graphql";

/**
 * Number Element
 * 
 */
export const NumberElementComponent : CmsComponent<NumberElementDataFragment> = ({ data, children }) => {
    const componentName = 'Number Element'
    const componentInfo = ''
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
NumberElementComponent.displayName = "Number Element (Component/NumberElement)"
NumberElementComponent.getDataFragment = () => ['NumberElementData', NumberElementDataFragmentDoc]

export default NumberElementComponent