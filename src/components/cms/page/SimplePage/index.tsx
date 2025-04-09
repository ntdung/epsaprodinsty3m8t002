import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { SimplePageDataFragmentDoc, type SimplePageDataFragment } from "@/gql/graphql";
import { RichText, CmsEditable, CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * Simple Page [Test]
 * 
 */
export const SimplePagePage : CmsComponent<SimplePageDataFragment> = ({ contentLink, data: { StringProp: stringProp }, children }) => {
    const componentName = 'Simple Page [Test]'
    const componentInfo = ''
    return (
        <CmsEditable
            cmsFieldName="StringProp"
            as="p"
            className="text-2xl text-people-eater my-6"
          >
            {stringProp ?? ""}
          </CmsEditable>
    )
    
}
SimplePagePage.displayName = "Simple Page [Test] (Page/SimplePage)"
SimplePagePage.getDataFragment = () => ['SimplePageData', SimplePageDataFragmentDoc]
SimplePagePage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default SimplePagePage