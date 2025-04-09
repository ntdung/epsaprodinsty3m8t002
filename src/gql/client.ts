import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const LinkDataFragmentDoc = gql`
    fragment LinkData on ContentUrl {
  base
  hierarchical
  default
}
    `;
export const IContentInfoFragmentDoc = gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IContentDataFragmentDoc = gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const BlockDataFragmentDoc = gql`
    fragment BlockData on _IComponent {
  ...IContentData
}
    `;
export const IElementDataFragmentDoc = gql`
    fragment IElementData on _IComponent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ElementDataFragmentDoc = gql`
    fragment ElementData on _IComponent {
  ...IElementData
}
    `;
export const ReferenceDataFragmentDoc = gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const ContentAreaBlockDataFragmentDoc = gql`
    fragment ContentAreaBlockData on ContentAreaBlock {
  ContentRefProp {
    ...ReferenceData
  }
}
    `;
export const ContentRefBlockDataFragmentDoc = gql`
    fragment ContentRefBlockData on ContentRefBlock {
  ContentRefProp {
    ...ReferenceData
  }
}
    `;
export const NumberBlockDataFragmentDoc = gql`
    fragment NumberBlockData on NumberBlock {
  IntegerProp
  FloatProp
}
    `;
export const SimpleBlockDataFragmentDoc = gql`
    fragment SimpleBlockData on SimpleBlock {
  StringProp
}
    `;
export const StringBlockDataFragmentDoc = gql`
    fragment StringBlockData on StringBlock {
  ShortStringProp
}
    `;
export const CompositionDataFragmentDoc = gql`
    fragment CompositionData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
  ... on ICompositionStructureNode {
    nodes @recursive(depth: 10) {
      name: displayName
    }
  }
  ... on ICompositionComponentNode {
    component {
      ...BlockData
      ...ElementData
      ...ContentAreaBlockData
      ...ContentRefBlockData
      ...NumberBlockData
      ...SimpleBlockData
      ...StringBlockData
    }
  }
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionData
  }
}
    `;
export const BlankExperienceDataFragmentDoc = gql`
    fragment BlankExperienceData on BlankExperience {
  ...ExperienceData
}
    `;
export const SimpleExpDataFragmentDoc = gql`
    fragment SimpleExpData on SimpleExp {
  StringProp
  ...ExperienceData
}
    `;
export const ContentAreaItemPageDataFragmentDoc = gql`
    fragment ContentAreaItemPageData on ContentAreaItemPage {
  ContentAreaItemProp {
    ...BlockData
    ...ContentAreaBlockData
    ...ContentRefBlockData
    ...NumberBlockData
    ...SimpleBlockData
    ...StringBlockData
  }
}
    `;
export const ContentPageDataFragmentDoc = gql`
    fragment ContentPageData on ContentPage {
  ContentAreaProp {
    ...BlockData
    ...ContentAreaBlockData
    ...ContentRefBlockData
    ...NumberBlockData
    ...SimpleBlockData
    ...StringBlockData
  }
  ContentReferenceProp {
    ...ReferenceData
  }
}
    `;
export const ContentRefPageDataFragmentDoc = gql`
    fragment ContentRefPageData on ContentRefPage {
  ContentRefPageProp {
    ...ReferenceData
  }
}
    `;
export const LinkItemDataFragmentDoc = gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    ...LinkData
  }
}
    `;
export const LinksPageDataFragmentDoc = gql`
    fragment LinksPageData on LinksPage {
  LinkColltionProp {
    ...LinkItemData
  }
}
    `;
export const SimplePageDataFragmentDoc = gql`
    fragment SimplePageData on SimplePage {
  StringProp
}
    `;
export const StringBlockPropertyDataFragmentDoc = gql`
    fragment StringBlockPropertyData on StringBlockProperty {
  ShortStringProp
}
    `;
export const StringBlockPageDataFragmentDoc = gql`
    fragment StringBlockPageData on StringBlockPage {
  StringBlockProp {
    ...StringBlockPropertyData
  }
}
    `;
export const TextPropertiesPageDataFragmentDoc = gql`
    fragment TextPropertiesPageData on TextPropertiesPage {
  StringProp
  XhtmlProp {
    json
    html
  }
}
    `;
export const PageDataFragmentDoc = gql`
    fragment PageData on _IContent {
  ...IContentData
}
    `;
export const IContentListItemFragmentDoc = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const getContentByIdDocument = gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items {
      ...BlockData
      ...PageData
      ...ContentAreaBlockData
      ...ContentRefBlockData
      ...NumberBlockData
      ...SimpleBlockData
      ...StringBlockData
      ...BlankExperienceData
      ...SimpleExpData
      ...ContentAreaItemPageData
      ...ContentPageData
      ...ContentRefPageData
      ...LinksPageData
      ...SimplePageData
      ...StringBlockPageData
      ...TextPropertiesPageData
    }
  }
}
    ${BlockDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${ContentAreaBlockDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ContentRefBlockDataFragmentDoc}
${NumberBlockDataFragmentDoc}
${SimpleBlockDataFragmentDoc}
${StringBlockDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${SimpleExpDataFragmentDoc}
${ContentAreaItemPageDataFragmentDoc}
${ContentPageDataFragmentDoc}
${ContentRefPageDataFragmentDoc}
${LinksPageDataFragmentDoc}
${LinkItemDataFragmentDoc}
${SimplePageDataFragmentDoc}
${StringBlockPageDataFragmentDoc}
${StringBlockPropertyDataFragmentDoc}
${TextPropertiesPageDataFragmentDoc}`;
export const getContentByPathDocument = gql`
    query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {
  content: _Content(
    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}}}
    locale: $locale
  ) {
    total
    items {
      ...IContentData
      ...PageData
      ...BlankExperienceData
      ...SimpleExpData
      ...ContentAreaItemPageData
      ...ContentPageData
      ...ContentRefPageData
      ...LinksPageData
      ...SimplePageData
      ...StringBlockPageData
      ...TextPropertiesPageData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionDataFragmentDoc}
${BlockDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${ContentAreaBlockDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ContentRefBlockDataFragmentDoc}
${NumberBlockDataFragmentDoc}
${SimpleBlockDataFragmentDoc}
${StringBlockDataFragmentDoc}
${SimpleExpDataFragmentDoc}
${ContentAreaItemPageDataFragmentDoc}
${ContentPageDataFragmentDoc}
${ContentRefPageDataFragmentDoc}
${LinksPageDataFragmentDoc}
${LinkItemDataFragmentDoc}
${SimplePageDataFragmentDoc}
${StringBlockPageDataFragmentDoc}
${StringBlockPropertyDataFragmentDoc}
${TextPropertiesPageDataFragmentDoc}`;
export const getContentTypeDocument = gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items {
      _metadata {
        types
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>(getContentByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>(getContentByPathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentByPath', 'query', variables);
    },
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>(getContentTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentType', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;