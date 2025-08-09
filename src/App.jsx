import { useState, useEffect } from 'react';
import './index.css';
// images
import logo from './assets/logo.png';
import middleIcon from './assets/middle-icon-white.png';
import endIcon from './assets/end-icon.png';
import secondLogo from './assets/2ndlogo.png';
import mainStage from './assets/main-stage.png';
import cosmicStage from './assets/cosmic-stage.png';
import festivalMap from './assets/DE_PARK.png';
import involvirajImg from './assets/involviraj.png';
import bazarImg from './assets/bazar.png';
import umetniciImg from './assets/umetnici.png';
import mobileHeader from './assets/0-02-05-0a2624c5e6aef5ebf988a151fdbc7f5e568ba8651cf6beeadce7ed0b9ff56b4d_21cafa3ef33.png';
import dzambaz from './assets/dzambaz.jpg';
import cige from './assets/cige.png';
import eruption from './assets/eruption.png';
import bdm from './assets/bdm.png';
import dik from './assets/dik.png';
import mihaelMihaela from './assets/mihael_mihaela.png';
import parketi from './assets/parketi.jpg';

import sponsorsLabel from './assets/podrzateli.png';
import sponsorsLogos from './assets/sponzori.png';

function App() {
	const [timeLeft, setTimeLeft] = useState({
		days: '00',
		hours: '00',
		minutes: '00',
		seconds: '00',
	});

	const [menuActive, setMenuActive] = useState(false);
	const toggleMenu = () => setMenuActive(!menuActive);

	useEffect(() => {
		const eventDate = new Date('August 15, 2025 00:00:00').getTime();

		const updateCountdown = () => {
			const now = new Date().getTime();
			const distance = eventDate - now;

			if (distance < 0) {
				setTimeLeft({
					days: '00',
					hours: '00',
					minutes: '00',
					seconds: '00',
				});
				return;
			}

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
			const minutes = Math.floor((distance / (1000 * 60)) % 60);
			const seconds = Math.floor((distance / 1000) % 60);

			setTimeLeft({
				days: String(days).padStart(2, '0'),
				hours: String(hours).padStart(2, '0'),
				minutes: String(minutes).padStart(2, '0'),
				seconds: String(seconds).padStart(2, '0'),
			});
		};

		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<main className='background'>
			{/* Page 1 */}
			<section className='page'>
				<div className='nav-bar'>
					{/* Left side: logo + date */}
					<div className='nav-left'>
						<img src={logo} alt='Logo' className='nav-logo' />
					</div>

					{/* Hamburger menu icon for mobile */}
					<div className='hamburger' onClick={toggleMenu}>
						☰
					</div>

					{/* Navigation center (will hide on mobile) */}
					<div
						className={`nav-center ${menuActive ? 'active' : ''}`}
						id='mobile-menu'>
						<img
							src={middleIcon}
							alt='Middle Icon'
							className='mid-icon'
							id='middleIcon'
						/>
						<div className='nav-links'>
							<a className='nav-text' href='#programa'>
								Програма
							</a>
							<a className='nav-text' href='#involviraj'>
								Биди Дел
							</a>
							<a className='nav-text' href='#artisti'>
								Артисти
							</a>
							<a className='nav-text' href='#za-nas'>
								За Нас
							</a>
						</div>
					</div>

					{/* Right icon (desktop only) */}
					<img src={endIcon} alt='End Icon' className='end-icon' />
				</div>

				{/* Countdown Timer Section */}
				<section className='countdown-container'>
					<div className='countdown-box'>
						<div className='countdown-item'>
							<span className='smText' id='days'>
								{timeLeft.days}
							</span>
							<label className='smText'>DAYS</label>
						</div>
						<div className='separator'>:</div>
						<div className='countdown-item'>
							<span className='smText' id='hours'>
								{timeLeft.hours}
							</span>
							<label className='smText'>HOURS</label>
						</div>
						<div className='separator'>:</div>
						<div className='countdown-item'>
							<span className='smText' id='minutes'>
								{timeLeft.minutes}
							</span>
							<label className='smText'>MINUTES</label>
						</div>
						<div className='separator'>:</div>
						<div className='countdown-item'>
							<span className='smText' id='seconds'>
								{timeLeft.seconds}
							</span>
							<label className='smText'>SECONDS</label>
						</div>
					</div>
				</section>

				{/* Countdown Logo Section */}
				<section className='logo-section'>
					<div className='rotated-mobile-logo'>
						<img src={secondLogo} alt='Second Logo' />
					</div>
				</section>

				{/* Stage Design Section */}
				<section className='stage-section' id='programa'>
					<div className='stage-wrapper'>
						<img
							src={mainStage}
							alt='Main Stage'
							className='stage-image main-stage'
						/>
						<img
							src={cosmicStage}
							alt='Cosmic Stage'
							className='stage-image cosmic-stage'
						/>
					</div>
				</section>
			</section>

			{/* Page 2 & 3 placeholder */}
			<section className='page'>
				<h2></h2>
			</section>

			{/* MAP SECTION FOR MOBILE */}
			<div className='mobile-map'>
				<img src={festivalMap} alt='Festival Map' />
			</div>

			{/* Info Section: involviraj */}
			<div className='info-section involviraj' id='involviraj'>
				<div className='info-image'>
					<img src={involvirajImg} alt='Image 1' />
				</div>
				<div className='info-text'>
					<div className='info-paragraph'>
						<p>
							<strong>СФЕСТ - Волонтерскиот тим се собира!</strong>
							<br />
							Твојата енергија ќе биде дел од СФЕСТ искуството што ќе
							остане незаборавно.
							<br />
							<br />
							<span className='highlight'>Приоритет:</span>{' '}
							Ентузијазам – Тимски дух – Љубов кон уметноста!
							<br />
							<span className='highlight'>Пријавување:</span> веднаш –
							местата се ограничени!
							<br />
							<span className='highlight'>
								Бараме помошници за:
							</span>{' '}
							Организација – Техничка поддршка – Гости и посетители –
							Креативен тим.
							<br />
							<br />
							Заедно создаваме нешто прекрасно!
						</p>
					</div>
					<a
						className='info-button'
						href='https://docs.google.com/forms/d/e/1FAIpQLScG19WaX56_BaNOxK7C9SX2T0in6y7lOfpLQ9qzSezfZEMcoQ/viewform'
						target='_blank'
						rel='noreferrer'>
						Кликни тука
					</a>
				</div>
			</div>

			{/* Info Section: bazar */}
			<div className='info-section bazar'>
				<div className='info-image'>
					<img src={bazarImg} alt='Image 2' />
				</div>
				<div className='info-text'>
					<p>
						СФЕСТ - Базар зона ги отвора вратите! Влези во светот на
						автентичните креации и покажи ја својата вештина!
						Селектираме само 20 локални бизниси - твојот е еден од
						нив?
						<br />
						Приоритет: Рачни изработки - од срце до раце!
						<br />
						Пријави до: 1 август - времето тече!
						<br />
						<br />
						Твојата креативност заслужува своја сцена!
					</p>
					<a
						className='info-button'
						href='https://docs.google.com/forms/d/e/1FAIpQLScKJ8COkLzwjRMUFdF3w3QYx5rA2DyvsGyUHv8T4kAKxPIjrg/viewform'
						target='_blank'
						rel='noreferrer'>
						Кликни тука
					</a>
				</div>
			</div>

			{/* Info Section: umetnici */}
			<div className='info-section umetnici'>
				<div className='info-image'>
					<img src={umetniciImg} alt='Image 3' />
				</div>
				<div className='info-text'>
					<p>
						СФЕСТ - Уметност жива како твојата душа! Влези длабоко во
						твојата имагинација и прикажи ни ја твојата свест
						нацртана!
						<br />
						Тема: СВЕСТ - каква е твојата?
						<br />
						Формат: до А3
						<br />
						Краен рок: 10 август
						<br />
						Бараме визионери: Сликари - Дизајнери - Муралисти -
						Графити артисти
						<br />
						<br />
						Твојата креација ќе живее на нашиот легендарен Wall of
						Art!
					</p>
					<a
						className='info-button'
						href='https://docs.google.com/forms/d/e/1FAIpQLScMA0e_MQn5T_13pJi6GWMaTRBkM3FN6aEUssR9p4m6o0mGjw/viewform'
						target='_blank'
						rel='noreferrer'>
						Кликни тука
					</a>
				</div>
			</div>

			{/* Artists Section */}
			<section className='artists-section' id='artisti'>
				<img
					className='mobile-header-image'
					src={mobileHeader}
					alt='Header Logo'
				/>
				<div className='artists-grid'>
					<div className='artist-card no-bg'>
						<img src={dzambaz} alt='Dzambazov' />
					</div>
					<div className='artist-card'>
						<img src={cige} alt='Cige' />
					</div>
					<div className='artist-card'>
						<img src={eruption} alt='Eruption' />
					</div>
					<div className='artist-card'>
						<img src={bdm} alt='BDM' />
					</div>
					<div className='artist-card'>
						<img src={dik} alt='Dik' />
					</div>
					<div className='artist-card'>
						<img src={mihaelMihaela} alt='Mihael & Mihaela' />
					</div>

					{/* Centered Parketi */}
					<div className='full-width-center'>
						<div className='artist-card no-bg'>
							<img src={parketi} alt='Parketi' />
						</div>
					</div>
				</div>
			</section>

			{/* Sponsor Section */}
			<section className='sponsor-section'>
				<div className='sponsor-wrapper'>
					<img
						src={sponsorsLabel}
						alt='Поддржатели'
						className='sponsor-label'
					/>
					<img
						src={sponsorsLogos}
						alt='Sponsors'
						className='sponsor-logos'
					/>
				</div>
			</section>

			{/* About Us Section */}
			<section className='about-us-section' id='za-nas'>
				<div className='about-container'>
					<h2 className='about-heading'>
						Како се роди идејата за Фест Струмица?
					</h2>
					<p className='about-paragraph'>
						Фест Струмица е плод на креативните умови на локалните
						артисти, културни работници, и младински активисти од
						Струмица кои сакаат да го промовираат и развиваат
						културниот живот во градот.
						<br />
						<br />
						Нашата мисија е да создадеме платформа каде што различни
						уметнички изрази ќе се спојат и ќе инспирираат поширока
						публика.
					</p>
				</div>
			</section>
			<h5
				style={{
					color: 'white',
					alignItems: 'center',
					justifyContent: 'center',
					display: 'flex',
				}}>
				© 2025 All Rights Reserved. Designed by Ljupcho Popov
			</h5>
		</main>
	);
}

export default App;
