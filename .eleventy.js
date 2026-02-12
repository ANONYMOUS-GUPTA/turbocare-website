module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");
eleventyConfig.addCollection("products", function(collectionApi) {
  return collectionApi.getFilteredByGlob("products/*.md");
});

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};