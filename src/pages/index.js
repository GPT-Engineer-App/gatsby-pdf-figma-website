import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <main className="flex flex-col items-center justify-center min-h-screen p-4">
    <header className="flex justify-between w-full p-4 bg-gray-800 text-white">
      <nav className="flex space-x-4">
        <a href="#explore" className="hover:underline">Explore</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#learn" className="hover:underline">Learn</a>
        <a href="#login" className="hover:underline">Login</a>
      </nav>
      <a href="#try" className="bg-purple-600 px-4 py-2 rounded">Try free for 7 days</a>
    </header>
    <section className="text-center my-8">
      <h1 className="text-4xl font-bold">SPEND LESS, SAVE MORE, INVEST EASY</h1>
      <p className="my-4">Try for free today.</p>
      <div className="flex justify-center space-x-4">
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Try for free</button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded">Explore</button>
      </div>
      <StaticImage src="../images/hero.jpg" alt="Person using mobile app" className="my-8" />
    </section>
    <section id="explore" className="my-8">
      <h2 className="text-2xl font-bold">Everyday</h2>
      <p>Your clients, advisors, and administrators log into the same system.</p>
      <button className="bg-purple-600 text-white px-4 py-2 rounded">Try for free</button>
    </section>
    <section id="future" className="my-8">
      <h2 className="text-2xl font-bold">Future</h2>
      <p>Your clients, advisors, and administrators log into the same system.</p>
      <button className="bg-purple-600 text-white px-4 py-2 rounded">Try for free</button>
    </section>
    <section id="notifications" className="my-8">
      <h2 className="text-2xl font-bold">Notifications</h2>
      <p>Your clients, advisors, and administrators log into the same system.</p>
      <button className="bg-purple-600 text-white px-4 py-2 rounded">Try for free</button>
    </section>
    <section id="shared" className="my-8">
      <h2 className="text-2xl font-bold">Shared</h2>
      <p>Your clients, advisors, and administrators log into the same system.</p>
      <button className="bg-purple-600 text-white px-4 py-2 rounded">Try for free</button>
    </section>
    <section id="security" className="my-8">
      <h2 className="text-2xl font-bold">Security</h2>
      <p>Your clients, advisors, and administrators log into the same system.</p>
    </section>
    <section className="my-8">
      <h2 className="text-2xl font-bold">Money Connected to Alwy</h2>
      <p className="text-4xl font-bold">£2,814,712,709</p>
      <button className="bg-purple-600 text-white px-4 py-2 rounded">Try for free</button>
    </section>
    <footer className="w-full p-4 bg-gray-800 text-white text-center">
      Alwy
    </footer>
  </main>
)

export default IndexPage