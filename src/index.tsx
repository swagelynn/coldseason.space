import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FaultyTerminal from './effects/FaultyTerminal';
import LogoLoop from './effects/LogoLoop';
import LightPillar from './effects/LightPillar';
function App() {
	const data = {
		coldseason: {
			spotify: 'https://open.spotify.com/artist/4NWVxhAQhzcNXxiAU79FnL',
			deezer: 'https://www.deezer.com/en/artist/68923822',
			apple: 'https://music.apple.com/gb/artist/coldseason/1860686513',
			amazon: 'https://music.amazon.co.uk/artists/B07TYS3TLF/coldseason',
			bandcamp: 'https://mcoldseason.bandcamp.com',
		},
		'F[]C[]T[]RY []CC[]D[]NT': {
			spotify: 'https://open.spotify.com/artist/3ejEDrU3QkF0O4cufGBeSg',
			deezer: 'https://www.deezer.com/en/artist/367556312',
			apple: 'https://music.apple.com/gb/artist/factoryaccident/1869121206',
			amazon: 'https://music.amazon.co.uk/artists/B0GGWHJKGR/factoryaccident',
		},
	};
	return (
		<>
			<LightPillar
				topLeftColor="#3f0402"
				bottomLeftColor="#b7218a"
				topRightColor="#5d47ea"
				bottomRightColor="#20e074"
				intensity={4}
				rotationSpeed={0}
				glowAmount={0.002}
				pillarWidth={8}
				pillarHeight={0.6}
				noiseIntensity={0.5}
				pillarRotation={180}
				interactive={true}
				mixBlendMode="normal"
				quality="high"
				pixelation={3}
			/>
			<div className="w-full h-full absolute top-0 left-0 flex flex-row justify-between items-center select-none">
				{Object.entries(data).map(([key, values], i) => (
					<div
						key={key}
						className="flex flex-col text-white  m-24 gap-8"
						style={{
							alignItems: i === 0 ? 'flex-start' : 'flex-end',
						}}
					>
						<h1
							className="text-3xl mix-blend-color-dodge"
							style={{ marginBottom: '30vh' }}
						>
							{key}
						</h1>
						{Object.entries(values).map(([name, link]) => (
							<h1 key={name} className="text-2xl cursor-pointer mix-blend-color-dodge hover:mix-blend-normal" onClick={() => window.open(link, "_blank")}>
								{name}
							</h1>
						))}
					</div>
				))}
			</div>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
