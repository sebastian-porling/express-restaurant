
/**
 * Main function, fetches the restaurants
 * and loads them into DOM
 */
(async function () {
    try {
        const restaurants = await getRestaurants();
        loadRestaurantsInDOM(restaurants);
    } catch (error) {
        console.log(error);
    }
})();
