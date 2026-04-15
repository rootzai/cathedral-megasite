import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
}

export function SEO({
    title,
    description = "An investigation into institutional betrayal and the architecture of complicity.",
    image = "/assets/social-share.jpg",
    url = "https://cathedral.investigation",
    type = "website"
}: SEOProps) {
    const siteTitle = `${title} | The Cathedral`;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            {image && <meta property="twitter:image" content={image} />}
        </Helmet>
    );
}
