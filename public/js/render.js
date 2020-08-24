
/**
 * Generates the restaurants as html elements and loads them into dom
 * @param restaurants list of restaurants
 */
const loadRestaurantsInDOM = (restaurants) => {
    const restaurantsHTML = restaurants.map(generateRestaurantHTML).join("\n");
    $("#restaurants-view").html(restaurantsHTML);
};

/**
 * Generates a restaurant html element
 * @param restaurant restaurant object
 */
const generateRestaurantHTML = (restaurant) => {
    return `
<div class="restaurant col-lg-6 p-5">
    <div class="background-img rounded" style="background-image: url(${
        restaurant.image
    });"></div>
    <h2 class="restaurant-name mt-2">${restaurant.name}</h2>
    <h6 class="restaurant-loc text-primary">${restaurant.location}</h3>
    ${generateRatingComponent(restaurant.rating)}
    <p class="restaurant-desc p-2">${restaurant.description}</p>
    <hr class="hr-secondary">
    <h4>reviews (${restaurant.reviews.length})</h4>
    <div class="reviews p-4">
        ${restaurant.reviews.map(generateReviewComponent).join("\n")}
    </div>
</div>`;
};

/**
 * Generates a rating components with stars
 * @param rating between 1-5 integer
 */
const generateRatingComponent = (rating) => {
    const getChecked = (star) => (rating >= star ? "checked" : "");
    const stars = [1, 2, 3, 4, 5].map(getChecked);
    const starHTML = (star) => `<span class="fa fa-star ${star}"></span>`;
    return`
<div class="rating">
    ${stars.map(starHTML).join("\n\t")}
</div>`;
};

/**
 * Generates a review component
 * @param review review object
 */
const generateReviewComponent = (review) => {
    return `
<div class="review">
    <div class="d-flex">
        <h5 class="review-name mr-4">${review.name}</h4>
        ${generateRatingComponent(review.rating)}
    </div>
    <p class="review-comment">${review.comment}</p>
</div>`;
};
