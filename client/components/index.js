/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as Footer} from './footer'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as AllCreatures} from './creatures/all-creatures'
export {default as AllFish} from './creatures/all-fish'
export {default as SingleFish} from './creatures/single-fish'
export {default as AllBugs} from './creatures/all-bugs'
export {default as SingleBug} from './creatures/single-bug'
export {default as IslandCreator} from './island-creator'
export {default as AllMusic} from './music/all-music'
export {default as AllSongs} from './music/all-songs'
export {default as AllBGMS} from './music/all-bgms'
