import * as cheerio from "cheerio";

export const cheerioCheck = (content: string) => {
  // Load the HTML string into cheerio
  const $ = cheerio.load(content);

  // Check if the HTML contains elements with class 'gallery'
  //const hasGallery = $(".gallery").length > 0;
  const hasImages = $("img").length > 0;

  // Check if the HTML contains a video element
  const hasIframe = $("iframe").length > 0;
  const hasVideo = $("video").length > 0;

  return { hasIframe, hasImages, hasVideo };
};

// export const cheerioCheckClient = (content: string) => {
//   // Load the HTML string into cheerio
//   const $ = cheerio.load(content);

//   // Check if the HTML contains elements with class 'gallery'
//   //const hasGallery = $(".gallery").length > 0;
//   const hasImages = $("img").length > 0;

//   // Check if the HTML contains a video element
//   const hasIframe = $("iframe").length > 0;
//   const hasVideo = $("video").length > 0;

//   return { hasIframe, hasImages, hasVideo };
// };
