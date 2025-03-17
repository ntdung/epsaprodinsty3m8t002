/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment ContentAreaBlockData on ContentAreaBlock {\n  ContentAreaBlockProperty {\n    ...IContentListItem\n  }\n}": typeof types.ContentAreaBlockDataFragmentDoc,
    "fragment ContentAreaItemBlockData on ContentAreaItemBlock {\n  ContentAreaItemBlockProperty {\n    ...IContentListItem\n  }\n}": typeof types.ContentAreaItemBlockDataFragmentDoc,
    "fragment ContentReferenceBlockData on ContentReferenceBlock {\n  ContentReferenceBlockProperty {\n    ...ReferenceData\n  }\n}": typeof types.ContentReferenceBlockDataFragmentDoc,
    "fragment DateTimeBlockData on DateTimeBlock {\n  DateTimeProperty\n}": typeof types.DateTimeBlockDataFragmentDoc,
    "fragment NumberBlockData on NumberBlock {\n  IntegerProperty\n  FloatProperty\n}": typeof types.NumberBlockDataFragmentDoc,
    "fragment NumberBlockPropertyData on NumberBlockProperty {\n  IntegerProperty\n  FloatProperty\n}": typeof types.NumberBlockPropertyDataFragmentDoc,
    "fragment NumberElementData on NumberElement {\n  IntegerProperty\n  FloatProperty\n}": typeof types.NumberElementDataFragmentDoc,
    "fragment TextBlockData on TextBlock {\n  ShortStringBlockProperty\n  LongStringBlockProperty\n  XHTMLStringBlockProperty {\n    json\n    html\n  }\n}": typeof types.TextBlockDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}": typeof types.BlankExperienceDataFragmentDoc,
    "fragment ContentAreaPageData on ContentAreaPage {\n  ContentAreaProp {\n    ...BlockData\n  }\n}": typeof types.ContentAreaPageDataFragmentDoc,
    "fragment DateTimePageData on DateTimePage {\n  DateTimePageProperty\n}": typeof types.DateTimePageDataFragmentDoc,
    "fragment NumberPageData on NumberPage {\n  NumberBlockProperty {\n    ...NumberBlockPropertyData\n  }\n  IntegerProperty\n  FloatProperty\n}": typeof types.NumberPageDataFragmentDoc,
    "fragment IContentData on _IContent\n    {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment CompositionData on ICompositionNode {\n        name: displayName\n        layoutType: nodeType    \n        type\n        key\n        template: displayTemplateKey\n        settings: displaySettings {\n            key\n            value\n        }\n        ... on ICompositionStructureNode {\n            nodes @recursive(depth: 10) {\n                name: displayName\n            }\n        }\n        ... on ICompositionComponentNode  {\n            component {\n                ...BlockData\n                ...ElementData\n            }\n        }\n    }\n\nfragment IElementData on _IComponent {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment ElementData on _IComponent  {\n        ...IElementData\n    }\n\nfragment BlockData on _IComponent  {\n        ...IContentData\n    }\n\nfragment PageData on _IContent {\n        ...IContentData\n    }\n\nfragment LinkData on ContentUrl {\n        base\n        hierarchical\n        default\n    }\n\nfragment ReferenceData on ContentReference {\n        key\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentInfo on IContentMetadata {\n        key\n        locale\n        types\n        displayName\n        version\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentListItem on _IContent {\n        ...IContentData\n    }\n\nfragment ExperienceData on _IExperience {\n        composition {\n            ...CompositionData\n        }\n    }\n\nfragment LinkItemData on Link {\n        title\n        text\n        target\n        url {\n            ...LinkData\n        }\n    }": typeof types.IContentDataFragmentDoc,
    "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { in: $path }, base: { eq: $siteId } }}\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...IContentData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }": typeof types.getContentByIdDocument,
};
const documents: Documents = {
    "fragment ContentAreaBlockData on ContentAreaBlock {\n  ContentAreaBlockProperty {\n    ...IContentListItem\n  }\n}": types.ContentAreaBlockDataFragmentDoc,
    "fragment ContentAreaItemBlockData on ContentAreaItemBlock {\n  ContentAreaItemBlockProperty {\n    ...IContentListItem\n  }\n}": types.ContentAreaItemBlockDataFragmentDoc,
    "fragment ContentReferenceBlockData on ContentReferenceBlock {\n  ContentReferenceBlockProperty {\n    ...ReferenceData\n  }\n}": types.ContentReferenceBlockDataFragmentDoc,
    "fragment DateTimeBlockData on DateTimeBlock {\n  DateTimeProperty\n}": types.DateTimeBlockDataFragmentDoc,
    "fragment NumberBlockData on NumberBlock {\n  IntegerProperty\n  FloatProperty\n}": types.NumberBlockDataFragmentDoc,
    "fragment NumberBlockPropertyData on NumberBlockProperty {\n  IntegerProperty\n  FloatProperty\n}": types.NumberBlockPropertyDataFragmentDoc,
    "fragment NumberElementData on NumberElement {\n  IntegerProperty\n  FloatProperty\n}": types.NumberElementDataFragmentDoc,
    "fragment TextBlockData on TextBlock {\n  ShortStringBlockProperty\n  LongStringBlockProperty\n  XHTMLStringBlockProperty {\n    json\n    html\n  }\n}": types.TextBlockDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}": types.BlankExperienceDataFragmentDoc,
    "fragment ContentAreaPageData on ContentAreaPage {\n  ContentAreaProp {\n    ...BlockData\n  }\n}": types.ContentAreaPageDataFragmentDoc,
    "fragment DateTimePageData on DateTimePage {\n  DateTimePageProperty\n}": types.DateTimePageDataFragmentDoc,
    "fragment NumberPageData on NumberPage {\n  NumberBlockProperty {\n    ...NumberBlockPropertyData\n  }\n  IntegerProperty\n  FloatProperty\n}": types.NumberPageDataFragmentDoc,
    "fragment IContentData on _IContent\n    {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment CompositionData on ICompositionNode {\n        name: displayName\n        layoutType: nodeType    \n        type\n        key\n        template: displayTemplateKey\n        settings: displaySettings {\n            key\n            value\n        }\n        ... on ICompositionStructureNode {\n            nodes @recursive(depth: 10) {\n                name: displayName\n            }\n        }\n        ... on ICompositionComponentNode  {\n            component {\n                ...BlockData\n                ...ElementData\n            }\n        }\n    }\n\nfragment IElementData on _IComponent {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment ElementData on _IComponent  {\n        ...IElementData\n    }\n\nfragment BlockData on _IComponent  {\n        ...IContentData\n    }\n\nfragment PageData on _IContent {\n        ...IContentData\n    }\n\nfragment LinkData on ContentUrl {\n        base\n        hierarchical\n        default\n    }\n\nfragment ReferenceData on ContentReference {\n        key\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentInfo on IContentMetadata {\n        key\n        locale\n        types\n        displayName\n        version\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentListItem on _IContent {\n        ...IContentData\n    }\n\nfragment ExperienceData on _IExperience {\n        composition {\n            ...CompositionData\n        }\n    }\n\nfragment LinkItemData on Link {\n        title\n        text\n        target\n        url {\n            ...LinkData\n        }\n    }": types.IContentDataFragmentDoc,
    "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { in: $path }, base: { eq: $siteId } }}\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...IContentData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }": types.getContentByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ContentAreaBlockData on ContentAreaBlock {\n  ContentAreaBlockProperty {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment ContentAreaBlockData on ContentAreaBlock {\n  ContentAreaBlockProperty {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ContentAreaItemBlockData on ContentAreaItemBlock {\n  ContentAreaItemBlockProperty {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment ContentAreaItemBlockData on ContentAreaItemBlock {\n  ContentAreaItemBlockProperty {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ContentReferenceBlockData on ContentReferenceBlock {\n  ContentReferenceBlockProperty {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment ContentReferenceBlockData on ContentReferenceBlock {\n  ContentReferenceBlockProperty {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment DateTimeBlockData on DateTimeBlock {\n  DateTimeProperty\n}"): (typeof documents)["fragment DateTimeBlockData on DateTimeBlock {\n  DateTimeProperty\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment NumberBlockData on NumberBlock {\n  IntegerProperty\n  FloatProperty\n}"): (typeof documents)["fragment NumberBlockData on NumberBlock {\n  IntegerProperty\n  FloatProperty\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment NumberBlockPropertyData on NumberBlockProperty {\n  IntegerProperty\n  FloatProperty\n}"): (typeof documents)["fragment NumberBlockPropertyData on NumberBlockProperty {\n  IntegerProperty\n  FloatProperty\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment NumberElementData on NumberElement {\n  IntegerProperty\n  FloatProperty\n}"): (typeof documents)["fragment NumberElementData on NumberElement {\n  IntegerProperty\n  FloatProperty\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TextBlockData on TextBlock {\n  ShortStringBlockProperty\n  LongStringBlockProperty\n  XHTMLStringBlockProperty {\n    json\n    html\n  }\n}"): (typeof documents)["fragment TextBlockData on TextBlock {\n  ShortStringBlockProperty\n  LongStringBlockProperty\n  XHTMLStringBlockProperty {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}"): (typeof documents)["fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ContentAreaPageData on ContentAreaPage {\n  ContentAreaProp {\n    ...BlockData\n  }\n}"): (typeof documents)["fragment ContentAreaPageData on ContentAreaPage {\n  ContentAreaProp {\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment DateTimePageData on DateTimePage {\n  DateTimePageProperty\n}"): (typeof documents)["fragment DateTimePageData on DateTimePage {\n  DateTimePageProperty\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment NumberPageData on NumberPage {\n  NumberBlockProperty {\n    ...NumberBlockPropertyData\n  }\n  IntegerProperty\n  FloatProperty\n}"): (typeof documents)["fragment NumberPageData on NumberPage {\n  NumberBlockProperty {\n    ...NumberBlockPropertyData\n  }\n  IntegerProperty\n  FloatProperty\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentData on _IContent\n    {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment CompositionData on ICompositionNode {\n        name: displayName\n        layoutType: nodeType    \n        type\n        key\n        template: displayTemplateKey\n        settings: displaySettings {\n            key\n            value\n        }\n        ... on ICompositionStructureNode {\n            nodes @recursive(depth: 10) {\n                name: displayName\n            }\n        }\n        ... on ICompositionComponentNode  {\n            component {\n                ...BlockData\n                ...ElementData\n            }\n        }\n    }\n\nfragment IElementData on _IComponent {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment ElementData on _IComponent  {\n        ...IElementData\n    }\n\nfragment BlockData on _IComponent  {\n        ...IContentData\n    }\n\nfragment PageData on _IContent {\n        ...IContentData\n    }\n\nfragment LinkData on ContentUrl {\n        base\n        hierarchical\n        default\n    }\n\nfragment ReferenceData on ContentReference {\n        key\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentInfo on IContentMetadata {\n        key\n        locale\n        types\n        displayName\n        version\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentListItem on _IContent {\n        ...IContentData\n    }\n\nfragment ExperienceData on _IExperience {\n        composition {\n            ...CompositionData\n        }\n    }\n\nfragment LinkItemData on Link {\n        title\n        text\n        target\n        url {\n            ...LinkData\n        }\n    }"): (typeof documents)["fragment IContentData on _IContent\n    {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment CompositionData on ICompositionNode {\n        name: displayName\n        layoutType: nodeType    \n        type\n        key\n        template: displayTemplateKey\n        settings: displaySettings {\n            key\n            value\n        }\n        ... on ICompositionStructureNode {\n            nodes @recursive(depth: 10) {\n                name: displayName\n            }\n        }\n        ... on ICompositionComponentNode  {\n            component {\n                ...BlockData\n                ...ElementData\n            }\n        }\n    }\n\nfragment IElementData on _IComponent {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment ElementData on _IComponent  {\n        ...IElementData\n    }\n\nfragment BlockData on _IComponent  {\n        ...IContentData\n    }\n\nfragment PageData on _IContent {\n        ...IContentData\n    }\n\nfragment LinkData on ContentUrl {\n        base\n        hierarchical\n        default\n    }\n\nfragment ReferenceData on ContentReference {\n        key\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentInfo on IContentMetadata {\n        key\n        locale\n        types\n        displayName\n        version\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentListItem on _IContent {\n        ...IContentData\n    }\n\nfragment ExperienceData on _IExperience {\n        composition {\n            ...CompositionData\n        }\n    }\n\nfragment LinkItemData on Link {\n        title\n        text\n        target\n        url {\n            ...LinkData\n        }\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { in: $path }, base: { eq: $siteId } }}\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...IContentData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }"): (typeof documents)["query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { in: $path }, base: { eq: $siteId } }}\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...IContentData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;