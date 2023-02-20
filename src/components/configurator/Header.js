function ConfiguratorHeader({
  currentShirtMotiveTitle,
  currentShirtMotiveArtist,
  currentShirtMotiveArtistSlug,
}) {
  return (
    <>
      <header className="w-full h-auto flex flex-row justify-between items-start">
        <div className="meta">
          <p className="font-bold">{currentShirtMotiveTitle}</p>
          <p>
            by{" "}
            <a href={"#" + currentShirtMotiveArtistSlug}>
              {currentShirtMotiveArtist}
            </a>
          </p>
        </div>
        <div className="flex flex-row gap-1 h-auto">
          <button className="btn btn-primary">←</button>
          <button className="btn btn-primary">→</button>
        </div>
      </header>
    </>
  );
}

export default ConfiguratorHeader;
