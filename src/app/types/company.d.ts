export interface CompanyProperties {
  created_at: string;
  entity_def_id: string;
  facebook: { value: string };
  facet_ids: string[];
  identifier: {
    uuid: string;
    value: string;
    image_id: string;
    permalink: string;
    entity_def_id: string;
  };
  image_id: string;
  image_url: string;
  name: string;
  permalink: string;
  short_description: string;
  twitter: { value: string };
  updated_at: string;
  uuid: string;
  website_url: string;
  stock_exchange_symbol: string;
  linkedin: string;
}

export interface Company {
  properties: CompanyProperties;
}

export interface Identifier {
  uuid: string;
  permalink: string;
  value: string;
  image_id: string;
  entity_def_id: string;
}

export interface AutocompleteItem {
  identifier: Identifier;
  facet_ids: string[];
  short_description: string;
}

export interface AutocompleteResponse {
  entities: AutocompleteItem[];
}

interface CompanyDetailsProps {
    entityId: string;
  }