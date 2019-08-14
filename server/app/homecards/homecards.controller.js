const axios = require("axios");
const constants = require("./constants");
const methods = {
  handleEndpointGet: handleEndpointGet
};

async function handleEndpointGet(ctx, next) {
  let nextFunction = getHomecards;
  await nextFunction(ctx);
}

const getIds = async ctx => {
  try {
    const { data } = await axios.get(constants.madridPropertiesUrl);
    return [...data.data].slice(0, constants.maxHomecardsNumber).map(property => property.id);
  } catch (err) {
    ctx.status = 503;
    ctx.body = "Service unavailable";
  }
};

const getDetails = async (ids, ctx) => {
  try {
    const queryParams = ids.map(id => `ids[]=${id}`).join("&");
    const preparedUrl = `${constants.detailsUrl}?${queryParams}`;
    const { data } = await axios.get(preparedUrl);
    return data.data.homecards;
  } catch (err) {
    ctx.status = 503;
    ctx.body = "Service unavailable";
  }
};

async function getHomecards(ctx) {
  const ids = await getIds(ctx);
  const homecards = await getDetails(ids, ctx);
  const parsedHomecards = homecards.map(homecard => {
    const {
      adId,
      currencySymbol,
      pricePerMonth,
      photoUrls: { homecardHidpi },
      title
    } = homecard;

    return {
      adId,
      currencySymbol,
      pricePerMonth,
      photoUrls: { homecardHidpi },
      title
    }
  });
  ctx.body = { homecards: parsedHomecards };
}

module.exports = methods;
