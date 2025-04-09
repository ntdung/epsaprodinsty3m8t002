import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { ContentPageDataFragmentDoc, type ContentPageDataFragment } from "@/gql/graphql";
import { CmsContentArea, CmsContent, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * Content Page
 * Content Page
 */
export const ContentPagePage : CmsComponent<ContentPageDataFragment> = ({ data : {ContentReferenceProp, ContentAreaProp } }) => {
   
    return (
       <div>
            <CmsEditable cmsFieldName="ContentReferenceProp" as="pre" className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">
                {JSON.stringify(ContentReferenceProp, undefined, 4)}    
            </CmsEditable> 
            <CmsContentArea fieldName="ContentAreaProp" items={ ContentAreaProp } className="w-full" />
        </div>
    )
}
ContentPagePage.displayName = "Content Page (Page/ContentPage)"
ContentPagePage.getDataFragment = () => ['ContentPageData', ContentPageDataFragmentDoc]
ContentPagePage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ContentPagePage