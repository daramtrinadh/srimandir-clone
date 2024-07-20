import "./page.css";

const page = () => {
  return (
    <div className='home-section'>
      <div className='intro'>
        <div className='para-content'>
          <img
            src='https://res.cloudinary.com/ds2bmmnmg/image/upload/v1721367205/img_achievement_n91ail.webp'
            alt='no.1'
            className='no1'
          />
          <p>WORLD’S LARGEST APP FOR HINDU DEVOTEES</p>
        </div>
        <h1>
          Pray daily with <span className='span-text'>Sri Mandir</span>.
        </h1>
        <h1>One App for all your devotional needs. </h1>
        <div>
          <button className='download-btn'>
            <img
              src='https://res.cloudinary.com/ds2bmmnmg/image/upload/v1721373364/img_playstore_logo_hutorn.svg'
              alt='playstore-btn'
            />
          </button>
          <button className='download-btn'>
            <img
              src='https://res.cloudinary.com/ds2bmmnmg/image/upload/v1721373365/img_appstore_logo_hphbsq.svg'
              alt='appstore-btn'
            />
          </button>
        </div>
      </div>
      <img
        src='https://res.cloudinary.com/ds2bmmnmg/image/upload/v1721369533/img_hero_artwork_en_x3mdbt.webp'
        alt='banner'
        className='banner-img'
      />
    </div>
  );
};
export default page;
