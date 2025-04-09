import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { TextPropertiesPageDataFragmentDoc, type TextPropertiesPageDataFragment } from "@/gql/graphql";
import { RichText, CmsEditable, CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * Text Properties Page
 * Text Properties Page
 */
export const TextPropertiesPagePage : CmsComponent<TextPropertiesPageDataFragment> = ({ contentLink, data: { StringProp: stringProp, XhtmlProp: xhtmlProp }, children }) => {
    const componentName = 'Text Properties Page'
    const componentInfo = 'Text Properties Page'
    return (
            <div>
            <CmsEditable
                cmsFieldName="StringProp"
                as="p"
                className="text-2xl text-people-eater my-6"
              >
                {stringProp ?? ""}
            </CmsEditable>

            <RichText
            cmsFieldName="XhtmlProp"
            text={xhtmlProp?.json}
            className="prose max-w-none prose-img:rounded-[2rem] prose-img:p-4 prose-img:border-2"
          />
            </div>
        )
}
TextPropertiesPagePage.displayName = "Text Properties Page (Page/TextPropertiesPage)"
TextPropertiesPagePage.getDataFragment = () => ['TextPropertiesPageData', TextPropertiesPageDataFragmentDoc]
TextPropertiesPagePage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default TextPropertiesPagePage