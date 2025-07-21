import Link from 'next/link';
import ImageSlideshow from '@/components/images/image-slideshow';

import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>My Diner – Food for True Foodies</h1>
            <p>Taste & share dishes from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            My Diner is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes and connect
            with other food lovers.
          </p>
          <p>
            My Diner is a place to discover new dishes and connect with other
            food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why My Diner?</h2>
          <p>
            My Diner is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes and connect
            with other food lovers.
          </p>
          <p>
            My Diner is a place to discover new dishes and connect with other
            food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
