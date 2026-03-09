'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ARTISTS = [
  { name: 'Nas', note: 'Illmatic is a masterpiece' },
  { name: 'Jay-Z', note: 'The Blueprint era' },
  { name: 'Notorious B.I.G.', note: 'Pure storytelling' },
  { name: 'Tupac', note: 'All Eyez on Me' },
  { name: 'Wu-Tang Clan', note: '36 Chambers' },
  { name: 'Rakim', note: 'The God MC' },
  { name: 'Big L', note: 'Lifestylez ov da Poor & Dangerous' },
];

const Crazy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full"
    >
      <div className="bg-accent w-full overflow-hidden rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-12">
        <div className="mb-6">
          <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
            Old School Hip-Hop 🎵
          </h2>
          <p className="text-muted-foreground mt-2 text-base">
            When I&apos;m not writing code, I&apos;m probably listening to 90s rap. Old school hip-hop hits different — the lyricism, the beats, the storytelling. Here are some of my all-time favourites:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {ARTISTS.map((artist) => (
            <div
              key={artist.name}
              className="flex flex-col rounded-2xl bg-white/60 px-5 py-4 dark:bg-neutral-800/60"
            >
              <span className="text-foreground font-semibold">{artist.name}</span>
              <span className="text-muted-foreground text-sm">{artist.note}</span>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mt-6 text-sm">
          I find that old school hip-hop and coding have a lot in common — both are about precision, flow, and building something meaningful from scratch. 🎤
        </p>
      </div>
    </motion.div>
  );
};

export default Crazy;
