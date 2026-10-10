import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import { ParticleSurface } from './FlyComponent.style';

const particleOptions: ISourceOptions = {
  autoPlay: true,
  background: {
    color: { value: '' },
    opacity: 1,
  },
  fullScreen: { enable: true, zIndex: -1 },
  detectRetina: true,
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'trail',
      },
    },
    modes: {
      trail: {
        delay: 0.005,
        quantity: 8,
        particles: {
          color: { value: '#ff0317', animation: { enable: true, speed: 400, sync: true } },
          move: { outModes: { default: 'destroy' }, speed: 2 },
          size: {
            value: 5,
            animation: {
              enable: true,
              speed: 10,
              minimumValue: 1,
              sync: true,
              startValue: 'min',
              destroy: 'max',
            },
          },
        },
      },
    },
  },
  particles: {
    color: { value: '#ff0317', animation: { h: { enable: true, speed: 50 } } },
    move: { enable: true },
    links: {
      enable: true,
      distance: 100,
      color: { value: 'random' },
      opacity: 1,
    },
  },
  pauseOnBlur: true,
};

async function initializeParticles(engine: Engine): Promise<void> {
  await loadFull(engine);
}

function Fly() {
  return (
    <ParticleSurface aria-hidden="true">
      <Particles id="tsparticles" init={initializeParticles} options={particleOptions} />
    </ParticleSurface>
  );
}

export default Fly;
