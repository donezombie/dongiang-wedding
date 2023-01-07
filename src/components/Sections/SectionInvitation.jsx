import React from 'react';
import FlowerInvitationLeft from 'assets/invitation-left.png';
import FlowerInvitationRight from 'assets/invitation-right.png';
import MiniCalendar from 'components/MiniCalendar';

const SectionInvitation = () => {
	//! State

	//! Render
	return (
		<section className='main-invitation'>
			<div className='main-invitation__left'>
				<img className='main-invitation__left__flower' alt="left-img" src={FlowerInvitationLeft} />
				<div className='main-invitation__left__box'>
					Hihi
				</div>
			</div>
			<div className='main-invitation__right'>
				<img className='main-invitation__right__flower' alt="left-img" src={FlowerInvitationRight} />
				<div className='main-invitation__right__box'>
					<MiniCalendar />
				</div>
			</div>
		</section>
	);
};

export default SectionInvitation;
