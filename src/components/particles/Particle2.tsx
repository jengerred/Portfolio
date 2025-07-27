import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine, Container } from "tsparticles-engine";

const Particle2 = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container?: Container) => {
        if (!container) return;
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles2"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: { enable: true, mode: "push" },
                        onHover: { enable: true, mode: "repulse" },
                        resize: true,
                    },
                    modes: {
                        push: { quantity: 4 },
                        repulse: { distance: 200, duration: 0.4 },
                    },
                },
                particles: {
                    color: { value: ["#83EEFF", "#f858da", "#8e48e9"] },
                    links: {
                        color: "transparent",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 5,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: { default: "bounce" },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: { density: { enable: true, area: 800 }, value: 80 },
                    opacity: { value: 0.5 },
                    shape: { type: "star" },
                    size: { value: { min: 1, max: 5 } },
                },
                detectRetina: true,
            }}
        />
    );
};

export default Particle2;
