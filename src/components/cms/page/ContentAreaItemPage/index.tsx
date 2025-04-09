import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { ContentAreaItemPageDataFragmentDoc, type ContentAreaItemPageDataFragment } from "@/gql/graphql";
import { CmsContentArea, CmsContent, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * Content Area Item Page
 * 
 */
export const ContentAreaItemPagePage : CmsComponent<ContentAreaItemPageDataFragment> = ({ data: { ContentAreaItemProp } }) => {
    const componentName = 'Content Area Item Page'
    const componentInfo = ''
    return (
        <div className="mx-auto px-2 container">
            <CmsEditable cmsFieldName="ContentAreaItemProp" as="pre" className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">
                           {JSON.stringify(ContentAreaItemProp, undefined, 4)}    
                        </CmsEditable>
        </div>
    )
}
ContentAreaItemPagePage.displayName = "Content Area Item Page (Page/ContentAreaItemPage)"
ContentAreaItemPagePage.getDataFragment = () => ['ContentAreaItemPageData', ContentAreaItemPageDataFragmentDoc]
ContentAreaItemPagePage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ContentAreaItemPagePage