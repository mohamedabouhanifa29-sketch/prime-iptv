export type CatalogCategory = "popular" | "trending";
export type CatalogItem = { id:string; title:string; type:"Movie"|"Series"; year?:string; image:string; category:CatalogCategory };

export const catalogCategories:{id:CatalogCategory;label:string}[]=[
  {id:"popular",label:"Popular Movies"},
  {id:"trending",label:"Trending Series"},
];

// Add licensed vertical artwork to public/images/catalog, then edit titles and years here.
// Missing files automatically display fallback-poster.svg instead of a broken image.
export const catalog:CatalogItem[]=[
  {id:"movie-1",title:"Featured Cinema",type:"Movie",year:"2026",image:"/images/catalog/movie-1.jpg",category:"popular"},
  {id:"movie-2",title:"Adventure Selection",type:"Movie",year:"2025",image:"/images/catalog/movie-2.jpg",category:"popular"},
  {id:"movie-3",title:"Drama Selection",type:"Movie",year:"2025",image:"/images/catalog/movie-3.jpg",category:"popular"},
  {id:"movie-4",title:"Action Selection",type:"Movie",year:"2026",image:"/images/catalog/movie-4.jpg",category:"popular"},
  {id:"series-1",title:"Featured Series",type:"Series",year:"2026",image:"/images/catalog/series-1.jpg",category:"trending"},
  {id:"series-2",title:"Weekly Selection",type:"Series",year:"2025",image:"/images/catalog/series-2.jpg",category:"trending"},
  {id:"series-3",title:"Drama Collection",type:"Series",year:"2025",image:"/images/catalog/series-3.jpg",category:"trending"},
  {id:"series-4",title:"Series Spotlight",type:"Series",year:"2026",image:"/images/catalog/series-4.jpg",category:"trending"},
];
