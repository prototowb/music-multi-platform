<template>
  <div>
    <app-header />

    <!-- Introduction -->
    <section class="intro__base">
      <div class="intro__background"></div>
      <div class="intro__container">
        <div class="intro__content">
          <h1 class="intro__headline">Listen to Great Music!</h1>
          <p class="intro__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            et dolor mollis, congue augue non, venenatis elit. Nunc justo eros,
            suscipit ac aliquet imperdiet, venenatis et sapien. Duis sed magna
            pulvinar, fringilla lorem eget, ullamcorper urna.
          </p>
        </div>
      </div>

      <img class="intro__image" src="../public/introduction-music.png" />
    </section>

    <!-- Main Content -->
    <section class="featured-tracks__base">
      <div class="featured-tracks__content">
        <div class="featured-tracks__header">
          <span class="featured-tracks__title">Songs</span>
          <i class="fa fa-headphones-alt"></i>
        </div>
        <!-- Playlist -->
        <ol id="playlist__base">
          <li class="playlist__item">
            <div>
              <a href="#" class="playlist__item-name">Song Title</a>
              <span class="playlist__item-artist">Artist Name</span>
            </div>

            <div class="playlist__comments">
              <span class="playlist__comments-icon">
                <i class="fa fa-comments"></i>
                15
              </span>
            </div>
          </li>
        </ol>
        <!-- .. end Playlist -->
      </div>
    </section>

    <!-- Player -->
    <div class="player__base">
      <div class="player__container">
        <!-- Play/Pause Button -->
        <div class="player__button">
          <button type="player__button--play">
            <i class="fa fa-play"></i>
          </button>
        </div>
        <!-- Current Position -->
        <div class="player__time">
          <span class="player__currenttime">00:00</span>
        </div>
        <!-- Scrub -->
        <div class="player__scrub">
          <div class="player__playing">
            <span class="player__song-title">Song Title</span> by
            <span class="player__song-artist">Artist</span>
          </div>
          <span class="player__timeline">
            <span class="player__seeker" style="left: 50%">
              <i class="fas fa-circle"></i>
            </span>
            <span class="player__timeline-fill" style="width: 50%"></span>
          </span>
        </div>
        <!-- Duration -->
        <div class="player__time">
          <span class="player__duration">03:06</span>
        </div>
      </div>
    </div>
  </div>

  <auth-modal />

</template>

<script>
import AppHeader from './components/Header.vue';
import AuthModal from './components/Auth.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AuthModal
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  background: rgb(230, 230, 230);
  font-family: "Helvetica Neue", Segoe UI, Roboto;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.header__base {
  background: rgba(55, 65, 81, 1);
}

.header__container {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1em 0;
}

.header__brand {
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 0.75em;
}

.nav__base {
  margin-left: auto;
}

.nav__menu {
  display: flex;
  flex-direction: row;
}

.nav__link {
  padding-right: 1em;
  color: white;
  list-style: none;
  text-decoration: inherit;
}

// Intro
.intro__base {
  color: white;
  text-align: center;
  position: relative;
  padding-top: 3em;
  padding-bottom: 3em;
}

.intro__background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-size: contain;
  animation: slide 50s linear infinite;
  will-change: background-position;
  z-index: -1;
  background-image: url(assets/header.png);
  background-size: cover;
}

.intro__container {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.intro__content {
  //nothing yet
}

.intro__headline {
  font-weight: bold;
  font-size: 3em;
  line-height: 1;
  margin-bottom: 1em;
}

.intro__text {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.intro__image {
  margin-left: auto;
  margin-right: auto;
  padding: 0 0.5em;
  margin-top: 5em;
  display: block;
  width: auto;
  max-width: 90%;
}

.featured-tracks__base {
  //nope
}

// featured-tracks__content
// featured-tracks__header
// featured-tracks__title

// playlist__base
// playlist__item
// playlist__item-name
// playlist__item-artist
// playlist__comments
// playlist__comments-icon

.player__base {
  // position: fixed;
  // left: 0;
  // bottom: 0;
  background: white;
  padding: 1em 0;
  text-align: left;
  vertical-align: top;
  width: 100%;
}

.player__container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.player__button {
  // nope
}
// player__button--play
// player__time
// player__currenttime
.player__scrub {
  width: 100%;
}
// player__playing
// player__song-title
// player__song-artist
.player__timeline {
  display: flex;
}

.player__seeker {
  position: relative;
  top: -7px;
}
.player__timeline-fill {
  background-color: darkcyan;
  height: 0.5em;
  background-size: 1rem 1rem;
  background-image: linear-gradient(
    45deg, rgba(255,255,255,.15) 
    25%, transparent 
    25%, transparent 
    50%, rgba(255,255,255,.15) 
    50%,rgba(255,255,255,.15) 
    75%, transparent 
    75%, transparent
  );
  animation: progress-bar-stripes 1s linear infinite;
}
// player__time
// player__duration

.modal__base {

}

.modal__container {

}

.backdrop__base {

}

// .backdrop__backdrop {
//   position: fixed;
//   top: 0;
//   left: 0;
//   height: 100vh;
//   width: 100%;
//   background-color: rgba(0, 0, 0, 0.45);
//   z-index: 10;
// }

// .modal__content {
//   position: fixed;
//   top: 20vh;
//   left: 10%;
//   width: 80%;
//   z-index: 100;
//   border-radius: 12px;
//   border: none;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
//   padding: 0;
//   margin: 0;
//   overflow: hidden;
//   background-color: white;
// }

// modal__titlebar
// modal__title
// modal__tabs
// modal__tabs-login
// modal__tabs-button
// modal__tabs-button--active
// modal__tabs-register
// modal__tabs-button
// login__form
// login__email
// login__email-label
// login__email-input
// login__password
// login__password-label
// login__password-input
// login__button--submit
// registration__form
// registration__name
// registration__name-label
// registration__name-input
// registration__email
// registration__email-label
// registration__email-input
// registration__age
// registration__age-label
// registration__age-input
// registration__password
// registration__password-label
// registration__password-input
// registration__pwconfirm
// registration__pwconfirm-label
// registration__pwconfirm-input
// registration__country
// registration__country-label
// registration__country-input
// registration__tos
// registration__tos-input
// registration__tos-label
// registration__button--submit

@keyframes progress-bar-stripes {
  0% {
    background-position: 1rem 0;
  }
  100% {
    background-position: 0 0;
  }
}

@keyframes slide {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -4000px 0;
  }
}
</style>
