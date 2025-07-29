'use client';

import React, {
  useRef,
  useEffect,
  useMemo,
  useState,
  useLayoutEffect,
} from 'react';
import { Canvas, useThree, extend, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { ExtrudeGeometry, DoubleSide, Shape } from 'three';
import * as THREE from 'three';
import Contact from './contact/Contact';
import About from './about/About';


extend({ ExtrudeGeometry });

type StepData = {
  color: string;
  topText: string;
  frontText: string;
  link: string;
};
type FloatingStarProps = { position: [number, number, number] };
type AnimatedStepGroupProps = {
  visible: boolean;
  children: React.ReactNode;
  index: number;
  animateDuration?: number;
};
type StairStepProps = {
  color: string;
  position: [number, number, number];
  index: number;
  topTilt?: number;
  topLabel: string;
  frontLabel: string;
  showTop: boolean;
  showFront: boolean;
  link?: string;
};
type FullStaircaseSceneProps = {
  steps: StepData[];
  revealedCount: number;
  showStar: boolean;
};

const PURPLE_COLOR = '#9400D3';

const stepColors = [
  '#9400D3',
  '#38AEE6',
  '#e742a7',
  '#9400D3',
  '#38AEE6',
  '#e742a7',
  '#9400D3',
  '#38AEE6',
];
const stepData: StepData[] = [
  { color: stepColors[0], topText: 'MIT Full Stack Certificate', frontText: 'MIT CERT', link: "/MIT" },
  { color: stepColors[1], topText: 'Start B.S Degree', frontText: 'SDLC', link: "/davenport" },
  { color: stepColors[2], topText: 'Study Group', frontText: 'Intro to C# Programming', link: "/study-group" },
  { color: stepColors[3], topText: 'Cyber Security', frontText: 'Security Foundations', link: "/cyber-security" },
  { color: stepColors[4], topText: 'Comp Theory and Algorithms', frontText: 'Trees / Graphs / Arrays', link: "/theory-algorithms" },
  { color: stepColors[5], topText: 'Leaflet/Mapbox Multilingual', frontText: 'Civic Interest', link: "/impactful" },
  { color: stepColors[6], topText: 'Learn by Teaching', frontText: 'Python Course', link: "/python" },
];

const STEP_WIDTH = 12.5;
const STEP_HEIGHT = 4.0;
const STEP_DEPTH = 3.1;
const SIDE_THICKNESS = 0.54;
const FRONT_OVERHANG = 0.72;
const STAIR_RISE_Y = STEP_HEIGHT * 0.98;
const STAIR_PUSH_Z = -2.7;
const SUBTLE_TILT_DEGREES = 8;

function FloatingStar({ position }: FloatingStarProps) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin(clock.getElapsedTime() * 1.2) * 0.1;
      ref.current.rotation.y += 0.013;
    }
  });

  const starShape = useMemo(() => {
    const spikes = 5;
    const outerRadius = 2.7;
    const innerRadius = 1.05;
    const shape = new Shape();
    const step = Math.PI / spikes;
    let angle = Math.PI / 2;
    shape.moveTo(Math.cos(angle) * outerRadius, Math.sin(angle) * outerRadius);
    for (let i = 0; i < spikes * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      shape.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
      angle += step;
    }
    shape.closePath();
    return shape;
  }, []);

  return (
    <group ref={ref} position={position}>
      <mesh castShadow receiveShadow>
        <extrudeGeometry
          args={[
            starShape,
            {
              depth: 1,
              bevelEnabled: true,
              bevelThickness: 0.18,
              bevelSegments: 4,
            },
          ]}
        />
        <meshStandardMaterial
          color={'#ffe200'}
          emissive={'#ffe200'}
          emissiveIntensity={2.2}
          metalness={0.13}
          roughness={0.065}
          side={DoubleSide}
        />
      </mesh>
      <Html
        center
        style={{ pointerEvents: 'none', textAlign: 'center' }}
        position={[0, -0.5, 0]}
        zIndexRange={[10, 0]}
      >
        <div
          style={{
            fontWeight: 'bold',
            fontSize: '2em',
            color: '#fff',
            textShadow:
              '0 0 16px #ff6a13, 0 0 14px #ffbe29, 0 0 12px #FF7300, 0 0 6px #fd2d00',
            lineHeight: 1,
            letterSpacing: '0.04em',
          }}
        >
          GOAL
        </div>
        <div
          style={{
            fontWeight: 'bold',
            fontSize: '1.25em',
            color: '#fff',
            textShadow: '0 0 10px #ff6a13, 0 0 6px #fd2d00',
            marginTop: '0.13em',
            letterSpacing: '0.035em',
          }}
        >
          Civic Tech Position
        </div>
      </Html>
    </group>
  );
}

const AnimatedStepGroup = ({
  visible,
  children,
  index,
  animateDuration = 0.5,
}: AnimatedStepGroupProps) => {
  const groupRef = useRef<THREE.Group>(null);
  useEffect(() => {
    if (groupRef.current) groupRef.current.renderOrder = index;
  }, [index]);
  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetX = visible ? 0 : 24;
    const current = groupRef.current.position.x;
    groupRef.current.position.x =
      current + (targetX - current) * Math.min(1, (delta * 16) / animateDuration);
  });
  useEffect(() => {
    if (!groupRef.current) return;
    groupRef.current.position.x = visible ? 24 : 14;
    if (visible) {
      setTimeout(() => {
        if (groupRef.current && visible) groupRef.current.position.x = 0;
      }, 900);
    }
  }, [visible]);
  return <group ref={groupRef}>{visible ? children : null}</group>;
};

const StairStep = ({
  color,
  position,
  index,
  topTilt = 0,
  topLabel,
  frontLabel,
  showTop,
  showFront,
  link,
}: StairStepProps) => {

  // onClick handler to navigate
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };
  const isLast = index === stepData.length - 1;

  const topShape = useMemo(() => {
    const shape = new THREE.Shape();
    const halfWidth = STEP_WIDTH / 2;
    shape.moveTo(halfWidth, STEP_DEPTH / 2);
    shape.lineTo(-halfWidth, STEP_DEPTH / 2);
    shape.lineTo(-halfWidth, -STEP_DEPTH / 2 - FRONT_OVERHANG);
    shape.lineTo(halfWidth, -STEP_DEPTH / 2 - FRONT_OVERHANG);
    shape.lineTo(halfWidth, STEP_DEPTH / 2);
    return shape;
  }, []);

  const isTopStep = isLast;
  const extrudeDepth = isTopStep ? 0.6 : 0.24;
  const extrudeYOffset = isTopStep ? 0.6 / 2 : 0;

  const extrudeSettings = useMemo(
    () => ({
      steps: 1,
      depth: extrudeDepth,
      bevelEnabled: false,
    }),
    [extrudeDepth]
  );

  const safeTextWidth = STEP_WIDTH - FRONT_OVERHANG * 2;
  const sideHeight = (index + 1) * STEP_HEIGHT;
  const sideCenterY = STEP_HEIGHT - sideHeight / 2;

  // Choose which image for which step as a public path
  let imageSrc: string | null = null;
  let imageAlt = '';
  if (index === 0) {
    imageSrc = '/assets/images/MIT Certificate.png';
    imageAlt = 'MIT Certificate';
  } else if (index === 1) {
    imageSrc = '/assets/images/Davenport University.png';
    imageAlt = 'Davenport University';
  } else if (index === 2) {
    imageSrc = '/assets/images/YouTube.png';
    imageAlt = 'YouTube';
  } else if (index === 3) {
    imageSrc = '/assets/images/Security.png';
    imageAlt = 'Security';
  } else if (index === 5) {
    imageSrc = '/assets/images/Resource-Nav.png';
    imageAlt = 'Resource Navigator';
  }

  // Original image size values: 1.5 × step width/height
  const imageWidth = STEP_WIDTH * 1.5;
  const imageHeight = STEP_HEIGHT * 1.5;

  return (
    <group position={position}
     onPointerUp={handleClick}
      onPointerOver={(e) => {
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        document.body.style.cursor = 'default';
      }}
      // enable raycast to make group "interactive"
      raycast={() => null} // optional if needed, else remove.
    >
      {/* Top face */}
      <mesh
        position={[0, STEP_HEIGHT - extrudeYOffset, 0]}
        rotation={[-Math.PI / 2 + topTilt, 0, 0]}
        castShadow
        receiveShadow
      >
        <extrudeGeometry args={[topShape, extrudeSettings]} />
        <meshStandardMaterial color={color} metalness={0.13} roughness={0.4} />
        {showTop && (
          <Html
            transform
            center
            position={[0, isLast ? 1.0 : 0, 0]}
            zIndexRange={[10, 0]}
            style={{
              pointerEvents: 'none',
              fontWeight: 'bold',
              color: '#fff',
              fontSize: '2.2em',
              textShadow: '2px 2px 10px #222',
              whiteSpace: 'normal',
              userSelect: 'none',
              transformOrigin: 'center',
              maxWidth: `${safeTextWidth}em`,
              textAlign: 'center',
              lineHeight: 1.1,
              marginTop: '2em',
            }}
          >
            {topLabel}
          </Html>
        )}
      </mesh>
      {/* Front face */}
      <mesh position={[0, STEP_HEIGHT / 2, STEP_DEPTH / 2 + 0.13]} castShadow receiveShadow>
        <boxGeometry args={[STEP_WIDTH, STEP_HEIGHT, 0.26]} />
        <meshStandardMaterial color={color} metalness={0.11} roughness={0.41} />
        {showFront && imageSrc ? (
          <Html
            center
            style={{
              pointerEvents: 'none',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
              zIndex: 10,
            }}
            position={[0, 0, 0.17]}
            transform
            zIndexRange={[11, 0]}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              style={{
                width: `${imageWidth}em`,
                height: `${imageHeight}em`,
                objectFit: 'contain',
                borderRadius: '0.6em',
                boxShadow: '0 2px 16px rgba(40,40,40,0.4)',
                border: '4px solid brown',
                background: '#fff',
              }}
              draggable={false}
            />
          </Html>
        ) : (
          showFront && (
            <Html
              center
              style={{
                pointerEvents: 'none',
                color: '#fff',
                fontSize: '2em',
                fontWeight: 'bold',
                textAlign: 'center',
                textShadow: '2px 2px 8px #222',
              }}
              position={[0, 0, 0]}
              transform
              zIndexRange={[10, 0]}
            >
              {frontLabel}
            </Html>
          )
        )}
      </mesh>
      {/* Left side */}
      <mesh
        position={[STEP_WIDTH / 2 - SIDE_THICKNESS / 2, sideCenterY, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[SIDE_THICKNESS, sideHeight, STEP_DEPTH]} />
        <meshStandardMaterial color={PURPLE_COLOR} metalness={0.09} roughness={0.56} />
      </mesh>
      {/* Right side */}
      <mesh
        position={[-(STEP_WIDTH / 2 - SIDE_THICKNESS / 2), sideCenterY, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[SIDE_THICKNESS, sideHeight, STEP_DEPTH]} />
        <meshStandardMaterial color={PURPLE_COLOR} metalness={0.09} roughness={0.56} />
      </mesh>
    </group>
  );
};

const CameraController = () => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(10, 45, 36);
    camera.lookAt(0, 12, -14);
  }, [camera]);
  return (
    <OrbitControls
      enableZoom={false}
      enablePan={true}
      enableRotate={true}
      target={[0, 12, -14]}
    />
  );
};

const verticalYOffset = 5;

const FullStaircaseScene = ({
  steps,
  revealedCount,
  showStar,
}: FullStaircaseSceneProps) => {
  const subtleTiltRad = (SUBTLE_TILT_DEGREES * Math.PI) / 180;
  const numSteps = steps.length;
  const staircaseHeight = (numSteps - 1) * STAIR_RISE_Y + STEP_HEIGHT;
  const groupYOffset = -((numSteps * 170 + 520) / 2) / 37 + staircaseHeight / 2;
  const lastStepY = (numSteps - 1) * STAIR_RISE_Y;
  const starY = lastStepY + STEP_HEIGHT + 8;

  return (
    <div
      style={{
        overflow: 'hidden',
        position: 'relative',
        minHeight: '100vh',
        maxHeight: '100vh',
        height: '100vh',
        width: '100%',
        marginBottom: '2.1rem',
        marginRight: 'auto',
        marginLeft: 'auto',
        zIndex: 2,
        boxSizing: 'border-box',
        background: 'none',
      }}
    >
      <Canvas
        camera={{ position: [26, 36, 36], fov: 48, near: 0.1, far: 100 }}
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
          position: 'absolute',
          left: 0,
          top: 0,
        }}
        dpr={1}
        shadows
        gl={{ alpha: true, preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.74} />
        <directionalLight position={[16, 48, 22]} intensity={2.08} />
        <group position={[0, groupYOffset + verticalYOffset, 0]}>
          {steps.map((step, i) => (
            <AnimatedStepGroup key={i} visible={i < revealedCount} index={i}>
              {i < revealedCount && (
                <StairStep
                  color={step.color}
                  index={i}
                  topLabel={step.topText}
                  frontLabel={step.frontText}
                  showTop={true}
                  showFront={true}
                  position={[0, i * STAIR_RISE_Y, i * STAIR_PUSH_Z]}
                  topTilt={subtleTiltRad}
                  link={step.link} 
                />
              )}
            </AnimatedStepGroup>
          ))}
          {showStar && (
            <FloatingStar position={[0, starY, (steps.length - 1) * STAIR_PUSH_Z]} />
          )}
        </group>
        <CameraController />
      </Canvas>
      
    </div>
  );
};

const RightPanel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const steps = stepData;
  const [revealedSteps, setRevealedSteps] = useState<number>(1);
  const [hasBuilt, setHasBuilt] = useState<boolean>(false);
  const staircaseContainerRef = useRef<HTMLDivElement>(null);
  const [stepRevealThreshold, setStepRevealThreshold] = useState<number>(100);

  useLayoutEffect(() => {
    const setThreshold = () => {
      if (staircaseContainerRef.current) {
        const containerHeight = staircaseContainerRef.current.offsetHeight;
        setStepRevealThreshold(containerHeight / steps.length);
      }
    };
    setThreshold();
    window.addEventListener('resize', setThreshold);
    return () => window.removeEventListener('resize', setThreshold);
  }, [steps.length]);

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fudge = 2;
    let newCount = revealedSteps;

    const handleScroll = () => {
      const maxScroll = container.scrollHeight - container.clientHeight;
      const scrollTop = container.scrollTop;

      if (scrollTop >= maxScroll - fudge) {
        setRevealedSteps(1);
        setHasBuilt(false);
        return;
      }

      if (hasBuilt) {
        setRevealedSteps(steps.length);
        return;
      }

      const scrolledUpFromBottom = maxScroll - scrollTop;
      newCount = Math.min(
        steps.length,
        Math.max(1, Math.floor(scrolledUpFromBottom / stepRevealThreshold) + 1)
      );
      setRevealedSteps(newCount);

      if (newCount >= steps.length) {
        setHasBuilt(true);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [steps.length, stepRevealThreshold, hasBuilt, revealedSteps]);

  const showStar = revealedSteps === steps.length;

  return (
    <>
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        boxSizing: 'border-box',
        marginRight: '1rem',
        marginBottom: '1rem',
        paddingRight: '0.5rem',
        scrollBehavior: 'smooth',
      }}
    >

      <div aria-label="Contact Me Section">
        <Contact />
      </div>
  
      <div
        ref={staircaseContainerRef}
        style={{
          overflow: 'hidden',
          position: 'relative',
          minHeight: '100vh',
          maxHeight: '100vh',
          height: '100vh',
          width: '100%',
          marginBottom: '2.1rem',
          marginRight: 'auto',
          marginLeft: 'auto',
          zIndex: 2,
          boxSizing: 'border-box',
          background: 'none',
        }}
      >
        <FullStaircaseScene
          steps={steps}
          revealedCount={revealedSteps}
          showStar={showStar}
        />
      </div>
      
      <div>
        <About />
      </div>
    </div>
    </>
  );
};

export default RightPanel;
