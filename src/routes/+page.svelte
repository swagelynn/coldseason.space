<div>
  <h1>coldseason</h1>
  <h1 class="sub">this music is sentient and judging you</h1>
  {#each [
    { name: "spotify", url: "https://open.spotify.com/artist/4NWVxhAQhzcNXxiAU79FnL" },
    { name: "apple music", url: "https://music.apple.com/gb/artist/coldseason/1860686513" },
    { name: "deezer", url: "https://www.deezer.com/en/artist/68923822" },
    { name: "amazon music", url: "https://music.amazon.co.uk/artists/B07TYS3TLF/coldseason" },
    { name: "bandcamp", url: "https://mcoldseason.bandcamp.com"}
    ] as { name, url }, i}
    <a href={url} target="_blank">
      <h1 class={`${i === 0 ? "break" : ""} link`}>{name}</h1>
    </a>
  {/each}
</div>
