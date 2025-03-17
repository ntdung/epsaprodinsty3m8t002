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
export const IContentListItemFragmentDoc = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const ContentAreaBlockDataFragmentDoc = gql`
    fragment ContentAreaBlockData on ContentAreaBlock {
  ContentAreaBlockProperty {
    ...IContentListItem
  }
}
    `;
export const ContentAreaItemBlockDataFragmentDoc = gql`
    fragment ContentAreaItemBlockData on ContentAreaItemBlock {
  ContentAreaItemBlockProperty {
    ...IContentListItem
  }
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
export const ContentReferenceBlockDataFragmentDoc = gql`
    fragment ContentReferenceBlockData on ContentReferenceBlock {
  ContentReferenceBlockProperty {
    ...ReferenceData
  }
}
    `;
export const DateTimeBlockDataFragmentDoc = gql`
    fragment DateTimeBlockData on DateTimeBlock {
  DateTimeProperty
}
    `;
export const NumberBlockDataFragmentDoc = gql`
    fragment NumberBlockData on NumberBlock {
  IntegerProperty
  FloatProperty
}
    `;
export const NumberElementDataFragmentDoc = gql`
    fragment NumberElementData on NumberElement {
  IntegerProperty
  FloatProperty
}
    `;
export const TextBlockDataFragmentDoc = gql`
    fragment TextBlockData on TextBlock {
  ShortStringBlockProperty
  LongStringBlockProperty
  XHTMLStringBlockProperty {
    json
    html
  }
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
      ...ContentAreaItemBlockData
      ...ContentReferenceBlockData
      ...DateTimeBlockData
      ...NumberBlockData
      ...NumberElementData
      ...TextBlockData
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
export const ContentAreaPageDataFragmentDoc = gql`
    fragment ContentAreaPageData on ContentAreaPage {
  ContentAreaProp {
    ...BlockData
    ...ContentAreaBlockData
    ...ContentAreaItemBlockData
    ...ContentReferenceBlockData
    ...DateTimeBlockData
    ...NumberBlockData
    ...NumberElementData
    ...TextBlockData
  }
}
    `;
export const DateTimePageDataFragmentDoc = gql`
    fragment DateTimePageData on DateTimePage {
  DateTimePageProperty
}
    `;
export const NumberBlockPropertyDataFragmentDoc = gql`
    fragment NumberBlockPropertyData on NumberBlockProperty {
  IntegerProperty
  FloatProperty
}
    `;
export const NumberPageDataFragmentDoc = gql`
    fragment NumberPageData on NumberPage {
  NumberBlockProperty {
    ...NumberBlockPropertyData
  }
  IntegerProperty
  FloatProperty
}
    `;
export const PageDataFragmentDoc = gql`
    fragment PageData on _IContent {
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
      ...ContentAreaItemBlockData
      ...ContentReferenceBlockData
      ...DateTimeBlockData
      ...NumberBlockData
      ...NumberElementData
      ...TextBlockData
      ...BlankExperienceData
      ...ContentAreaPageData
      ...DateTimePageData
      ...NumberPageData
    }
  }
}
    ${BlockDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${ContentAreaBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${ContentAreaItemBlockDataFragmentDoc}
${ContentReferenceBlockDataFragmentDoc}
${ReferenceDataFragmentDoc}
${DateTimeBlockDataFragmentDoc}
${NumberBlockDataFragmentDoc}
${NumberElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${ContentAreaPageDataFragmentDoc}
${DateTimePageDataFragmentDoc}
${NumberPageDataFragmentDoc}
${NumberBlockPropertyDataFragmentDoc}`;
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
      ...ContentAreaPageData
      ...DateTimePageData
      ...NumberPageData
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
${IContentListItemFragmentDoc}
${ContentAreaItemBlockDataFragmentDoc}
${ContentReferenceBlockDataFragmentDoc}
${ReferenceDataFragmentDoc}
${DateTimeBlockDataFragmentDoc}
${NumberBlockDataFragmentDoc}
${NumberElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${ContentAreaPageDataFragmentDoc}
${DateTimePageDataFragmentDoc}
${NumberPageDataFragmentDoc}
${NumberBlockPropertyDataFragmentDoc}`;
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