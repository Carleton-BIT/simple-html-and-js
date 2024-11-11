async function fetchArtwork() {
  const randomId = Math.floor(Math.random() * 10000);
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomId}`;

  const response = await fetch(url);
  const data = await response.json();

  // Use logical OR to set default values if title or artistDisplayName is missing
  const title = data.title || "Unknown Title";
  const artist = data.artistDisplayName || "Unknown Artist";
  const imageUrl = data.primaryImage || '';

  // Optional - re-run function of there's no image
  if (!imageUrl) {
    fetchArtwork();
    return;
  }

  // Select elements
  const titleElement = document.querySelector("#artwork-title");
  const artistElement = document.querySelector("#artwork-artist");
  const imageContainer = document.querySelector("#artwork-image");

  // Set the text content for title and artist
  titleElement.textContent = title;
  artistElement.textContent = artist;

  // Clear previous image or message
  imageContainer.innerHTML = '';

  // Display image or fallback message
  if (imageUrl) {
      const imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      imageElement.alt = "Artwork image";
      imageContainer.appendChild(imageElement);
  } else {
      const noImageMessage = document.createElement("p");
      noImageMessage.textContent = "No image available";
      imageContainer.appendChild(noImageMessage);
  }
}
