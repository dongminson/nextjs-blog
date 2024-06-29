import React from 'react';
import Link from 'next/link';

import Brain from './brain';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.wrapper}>
        <div className={classes.leftColumn}>
          <div className={classes.leftWrapper}>
            <h1>Stories and ideas</h1>
            <p>A place to read and deepen your understanding</p>
            <div className={classes.buttonWrapper}>
              <Link href="/posts">
                <button className={classes.button}>Read more</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.rightColumn}>
          <Brain />
        </div>
      </div>
    </section>
  );
}

export default Hero;
