import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/Lutfor_Rahman_raju.jpg'
          alt='An image showing Lutfor'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Lutfor Raju</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
}

export default Hero;
