const slugify= (text) =>{ 
    return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
};

module.exports.slugify = slugify;