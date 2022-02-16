const fetchapi = async () => {
  const url =
    "https://api.giphy.com/v1/gifs/random?api_key=9pjHHdojR9INhZjQ7qFFfwDuopVvAJWZ&limit=1";
  const fetchURL = await fetch(url);

  const data = await fetchURL.json();

  return data.data.images.fixed_height_downsampled.url;
};

export default fetchapi;
