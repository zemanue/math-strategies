"use client";

import React from 'react';

import CountingGame from '../components/CountingGame';

export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center">
      <CountingGame />
    </div>
  );
}
