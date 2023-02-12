import React from 'react';

import Particles from 'react-tsparticles';

import { loadFull } from 'tsparticles';

import type { Container, Engine } from 'tsparticles-engine';

const Particle = () => {
  const particlesInit = React.useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = React.useCallback(
    async (container: Container | undefined) => {},
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: '#1a1a1d',
          },
        },
        fpsLimit: 30,
        interactivity: {
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.8,
            },
          },
        },
        particles: {
          color: {
            value: '#ffb400',
          },
          links: {
            color: '#ffffff',
            distance: 130,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
