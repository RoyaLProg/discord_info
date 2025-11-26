import Background from './assets/background.mp4'
import { useEffect, useState } from 'react'
import { VolumeX, Volume2 } from 'lucide-react'

function App() {
	const [ muted, setMuted ] = useState<boolean>(false);

	useEffect(() => {
		const _muted = localStorage.getItem('muted');
		if (_muted !== undefined)
			setMuted(Boolean(_muted));
	}, []);

	useEffect(() => {
		localStorage.setItem('muted', `${muted}`);
	}, [muted]);

	return (
		<div className='bg-black w-screen h-screen overflow-hidden'>
			<div className='sm:block md:hidden w-full h-full text-white flex justify-center items-center'>
				<p> fuck your phone screen </p>
			</div>
			<div className='h-screen w-screen -translate-y-full flex items-center justify-center'>
			<video src={Background} controls={false} autoPlay className='size-full z-1' loop muted={muted} />
				<div
					className='absolute top-8 left-8 h-16 w-16 bg-gray-500/30 rounded-xl flex justify-center items-center'
					onClick={() => setMuted(!muted)}
				>
					{ muted ?
						<VolumeX color='#fff' strokeWidth={4}/>
					:
						<Volume2 color='#fff' strokeWidth={4}/>
					}
				</div>
				<div className='h-1/2 w-1/2 z-100 flex flex-col justify-center p-4 gap-4'>
					<div className='flex gap-4 items-center relative'>
						<div className='w-32 h-32 overflow-hidden'>
							<img src="https://cdn.discordapp.com/avatars/320302900553318400/116f123f99566cf588e624e6e27b6c6f.webp?size=512" className='rounded-full'/>
							<img src="https://cdn.discordapp.com/avatar-decoration-presets/a_c48b135704ecb5c88f2f71f6c8bcce2f.png" className='-translate-y-full'/>
						</div>
						<p className='text-white text-5xl font-extrabold text-center'>RoyaL</p>
						<div className='bg-red-400/50 p-2 rounded-xl flex items-center gap-2 h-12'>
							<img src="https://cdn3.emoji.gg/emojis/98152-pink-heart-guild-tag.png" width='32px' alt="Pink_Heart_Guild_Tag"/>
							<p className='font-bold'>TETO</p>
						</div>
					</div>
					<div className='w-full h-1/3 flex gap-2'>
						<div className='w-1/2 bg-gray-500/30 backdrop-blur rounded-xl flex items-center'>
							<p className='text-center font-bold w-full text-gray-200'>INCOMING DISCORD</p>
						</div>
						<div className='w-1/2 bg-gray-500/30 backdrop-blur rounded-xl flex items-center'>
							<p className='text-center font-bold w-full text-gray-200'>INCOMING PORTFOLIO</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
