import React from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

const HomePage = () => {
  return (
    // 'relative' ensures children can be positioned if needed
    // Removed 'grid place-items-center' because we are using flex-col for the inner layout
    <main
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)), url('/src/assets/back-img.jpg')`,
      }}
    >
      {/* 1. PageNav stays at the top */}
      <PageNav />

      {/* 2. Hero Content centered in the remaining space */}
      <div className="flex h-[calc(100vh-95px)] flex-col items-center justify-center px-6 text-center">
        <section className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            You travel the world.
            <span className="block text-green-400">
              WorldWise keeps track of your adventures.
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </p>

          <Link
            to="/login"
            className="inline-block rounded-md bg-green-500 px-8 py-3 text-sm font-bold tracking-wider text-slate-900 transition-all hover:bg-green-400 active:scale-95"
          >
            START TRACKING NOW
          </Link>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
