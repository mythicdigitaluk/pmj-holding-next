// Dependencies
import { MetadataRoute } from 'next';

export default function Sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://pmjbuildingservices.co.uk',
      lastModified: new Date(),
    },
  ];
}
