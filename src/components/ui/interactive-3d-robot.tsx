"use client";

import React, { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Interactive3DRobot() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* The robot blends completely seamlessly into the Hero background */}

      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-t-2 border-[#00D4FF] animate-spin" />
          </div>
        }
      >
        <Spline
          scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
}
