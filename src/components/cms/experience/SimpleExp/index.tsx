import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, CompositionDataFragmentDoc, SimpleExpDataFragmentDoc, type SimpleExpDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * Simple Exp [Test]
 * 
 */
export const SimpleExpExperience : CmsComponent<SimpleExpDataFragment> = ({ data }) => {
    const composition = getFragmentData(CompositionDataFragmentDoc, getFragmentData(ExperienceDataFragmentDoc, data)?.composition)
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
SimpleExpExperience.displayName = "Simple Exp [Test] (Experience/SimpleExp)"
SimpleExpExperience.getDataFragment = () => ['SimpleExpData', SimpleExpDataFragmentDoc]
SimpleExpExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default SimpleExpExperience