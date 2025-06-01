import { AboutPage, BlogPosting, BreadcrumbList, FAQPage, Organization, SearchAction, Thing, WebSite, WithContext } from 'schema-dts';

export function SchemaJsonLd<T extends Thing>(json: WithContext<T>): string {
    return JSON.stringify(json);
}

export const schemaOrganization = ({
    base_url,
    site_title,
    email,
    author
}: {
    base_url: string,
    site_title: string,
    email: string,
    author: { url: string }
}): string => SchemaJsonLd<Organization>({
    '@context': 'https://schema.org',
    "@type": "Organization",
    name: site_title,
    url: base_url,
    logo: base_url + "/logo.png",
    email: email,
    sameAs: [
        author.url
    ],
    mainEntityOfPage: { '@id': base_url + "/#website" }
});

export const website = ({
    base_url,
    site_title,
    language
}: {
    base_url: string,
    site_title: string,
    language: string
}): string => SchemaJsonLd<WebSite>({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": base_url + "/#website",
    url: base_url,
    name: site_title,
    inLanguage: language,
    isPartOf: {
        '@id': base_url,
    },
    about: { '@id': base_url + "/#about" },
    mainEntity: { '@id': base_url + "/#website" },
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: base_url + "/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    } as unknown as SearchAction
});

export const aboutPage = ({
    base_url,
    site_title,
    description
}: {
    base_url: string,
    site_title: string,
    description: string
}): string => SchemaJsonLd<AboutPage>({
    "@context": "https://schema.org",
    "@type": 'AboutPage',
    "@id": base_url + "/#about",
    url: base_url,
    name: site_title,
    inLanguage: 'en-US',
    description: description,
    mainEntity: { '@id': base_url + "/#website" },
});

export const faqPage = (data: { question: string, answer: string }[]): string => SchemaJsonLd<FAQPage>({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.map(item => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
        }
    })),
});

export const blogPosting = ({
    base_url,
    headline,
    image,
    url,
    category,
    datePublished,
    dateModified,
    author,
    site_title
}: {
    base_url: string,
    headline: string,
    image: string,
    url: string,
    category: string,
    datePublished: string,
    dateModified: string,
    author: { name: string, url: string },
    site_title: string
}): string => SchemaJsonLd<BlogPosting>({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: headline,
    image: image,
    author: {
        "@type": "Person",
        name: author.name,
        url: author.url
    },
    publisher: {
        "@type": "Organization",
        name: site_title,
        logo: {
            "@type": "ImageObject",
            url: base_url + "/logo.png"
        }
    },
    datePublished: datePublished,
    dateModified: dateModified,
    articleSection: category,
    mainEntityOfPage: url
});

export const breadcrumbList = (items: { name: string, url: string }[]): string => SchemaJsonLd<BreadcrumbList>({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url
    }))
});
