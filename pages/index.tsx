import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vorhrox Realms!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <div className={styles['floating-elements']}>
        <div className={styles['floating-element']}></div>
        <div className={styles['floating-element']}></div>
        <div className={styles['floating-element']}></div>
      </div>

      <div className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.logo}>Vorhrox Realms!</div>
            <ul className={styles['nav-links']}>
              <li><a href="#home">Главная</a></li>
              <li><a href="#about">О сервере</a></li>
              <li><a href="#priorities">Приоритеты</a></li>
              <li><a href="#join">Присоединиться</a></li>
            </ul>
          </nav>
        </header>

        <section id="home" className={styles.hero}>
          <div className={styles['hero-content']}>
            <img
              src="https://cdn.discordapp.com/attachments/1381871904192729118/1389294277749768194/IMG_20250512_121428_817.jpg?ex=6864189f&is=6862c71f&hm=9e35d2a61847c608b1a2045cadd693e27ae0beb4bc78a392a7426273aa8ede3f&"
              alt="Vorhrox"
              className={styles.avatar}
            />
            <h1>Vorhrox Realms</h1>
            <p>Этот сервер создан для игр и общества фанатов Vorhrox'a!</p>
            <a href="https://discord.gg/gcUZBVBG" className={styles['cta-button']}>
              Зайти на сервер
            </a>
          </div>
        </section>

        <section id="stats" className={styles.stats}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-number']}>2480+</div>
            <div className={styles['stat-label']}>Участников на сервере</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-number']}>1+</div>
            <div className={styles['stat-label']}>Розыгрыши в неделю</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-number']}>2+</div>
            <div className={styles['stat-label']}>Видео в день</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-number']}>24/7</div>
            <div className={styles['stat-label']}>Активность на сервере</div>
          </div>
        </section>

        <section id="priorities" className={styles['content-grid']}>
          <div className={styles.card}>
            <img
              src="https://cdn.discordapp.com/attachments/1378298825139163136/1389309316145614991/2025-06-30_231852.png?ex=686426a1&is=6862d521&hm=aebbde61b7bb628bffbdd2cbf80e4969d6af6ff60d1846f24aa5772ec93324c4&"
              alt="Экономика"
            />
            <h3>Экономика</h3>
            <p>На сервере присутствует экономика! Заработайте свои миллионы и получите кастомную роль!</p>
          </div>
          <div className={styles.card}>
            <img
              src="https://cdn.discordapp.com/attachments/1378298825139163136/1389310314058878997/image.png?ex=6864278f&is=6862d60f&hm=b0dc5533b6faf71e5d34b417219e9cce78de99efafc4e7d78afa7369133ad86d&"
              alt="Сообщество"
            />
            <h3>Сообщество</h3>
            <p>Доброе активное и любящее сообщество!</p>
          </div>
          <div className={styles.card}>
            <img
              src="https://cdn.discordapp.com/attachments/1378298825139163136/1389310830063128626/2025-06-30_232505.png?ex=6864280a&is=6862d68a&hm=4ee8b042ce413b35b63ef8de1b4b0a617385cc2118b4947049569e5a8d812680&"
              alt="Голосовые каналы"
            />
            <h3>Голосовые каналы</h3>
            <p>Очень частый голосовой актив! Там вы можете встретить и администрацию и вообще всех! Включая самого создателя!</p>
          </div>
          <div className={styles.card}>
            <img
              src="https://cdn.discordapp.com/attachments/1389125003970347058/1389311743439667300/2025-06-30_232843.png?ex=686428e3&is=6862d763&hm=00993f44d5cc709e7f704012250c6958d84b118c05c5e6d820f88d0de9820554&"
              alt="Картинка"
            />
            <h3>Большое количество каналов помощи новичкам/проффи</h3>
            <p>Каналы макросов и всего такого!(так же и в остальных категориях игр если что)</p>
          </div>
        </section>

        <section id="about" className={styles['content-grid']}>
          <div className={styles.card}>
            <h3>О сервере</h3>
            <p>
              Сам сервер только поднимается с колен единственная помощь ему которую вы можете ему дать это: Просто сидеть в чатах! не важно в каком можно просто в трейдах или просто в экономике это будет большой вклад в сервер! благодарим каждого человека за хоть одно маленькое сообщение для вас просто но нам очень приятно!
            </p>
          </div>
        </section>

        <section id="join" className={styles.hero}>
          <div className={styles['hero-content']}>
            <h1>Заходите к нам!</h1>
            <p>И помните любая маленькая помощь - Огромное вложение в будущее в нашем случае это в будущее сервера!</p>
            <a href="https://discord.gg/gcUZBVBG" className={styles['cta-button']}>
              Зайти на сервер
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>2025 Vorhrox Realms Отдельное спасибо Саншайну.</p>
          <div className={styles['social-links']}>
            <a href="https://www.tiktok.com/@vorhrox">TT</a>
            <a href="https://t.me/vorhrox">TG</a>
            <a href="https://www.twitch.tv/vorhrox">TW</a>
            <a href="https://www.youtube.com/@vorhrox">YT</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
