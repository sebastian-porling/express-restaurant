
/**
 * Fetches the restaurant data from the server
 */
const getRestaurants = async () => {
    const res = await fetch("/data");
    if (!res.ok) throw "Coudln't fetch restaurant data!";
    return await res.json();
};
