import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    type?: string;
    name?: string;
    image?: string;
}

const SEO = ({
    title,
    description,
    canonical,
    type = 'website',
    name = 'Hwa Rang | Taekwondo ITF',
    image = 'https://hwarang-tkd.vercel.app/og-image.jpg'
}: SEOProps) => {
    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel="canonical" href={canonical} />

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* Local Business Structured Data for Rich Snippets */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SportsClub",
                    "name": "Hwa Rang Taekwondo ITF",
                    "image": image,
                    "@id": "https://hwarang-tkd.vercel.app",
                    "url": "https://hwarang-tkd.vercel.app",
                    "telephone": "+5492657619592",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Eleodoro Lobos 432",
                        "addressLocality": "Villa Mercedes",
                        "addressRegion": "San Luis",
                        "postalCode": "5730",
                        "addressCountry": "AR"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": -33.675,
                        "longitude": -65.458
                    },
                    "openingHoursSpecification": [
                        {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Tuesday",
                                "Thursday"
                            ],
                            "opens": "17:30",
                            "closes": "21:00"
                        }
                    ],
                    "sameAs": [
                        "https://www.instagram.com/academia__hwarang/",
                        "https://www.facebook.com/academia.hwarang"
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
