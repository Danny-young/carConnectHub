

export interface Listing {
    id: string;
    listing_url: string;
    scrape_id: string;
    last_scraped: string;
    name: string;
    summary: string;
    space: string;
    description: string;
    neighborhood_overview: string;
    notes: string;
    transit: string;
    access: string;
    interaction: string;
    house_rules: string;
    house_rules_text: string;
    house_rules_summary: string;
    house_rules_url: string;
    thumbnail_url: string;
    medium_url: string;
    review_scoring_rating : string;
    picture_urls: Pictureurl;
    price: string;
    currency: string;
    locale: string;
    property_type: string;
    bedrooms: number;
    bathrooms: number;
    living_rooms: number;
    beds: number;
    square_feet: number;
    amenities: string;
    host_id: string;
    host_url: string;
    host_name: string;
    host_since: string;
    host_location: string;
    host_about: string;
    host_response_time: string;
    host_response_rate: number;
    host_acceptance_rate: number;
    host_is_superhost: boolean;
    host_thumbnail_url: string;
}


interface Geolocation {
    lon: number;
    lat: number;
}

interface Pictureurl {
    thumbnail_url: boolean;
    filename: string;
    format: string;
    width: number;
    mimetype: string;
    height: number;
    etag: string;
    url: string;
    id: string;

}