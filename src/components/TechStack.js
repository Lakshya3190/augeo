import React, { useState, useRef } from 'react';
import { animated, useTransition, useSpring, useChain, config } from 'react-spring';
import { Global, Container, Item } from './styles';
import data from './data';

function TechStack() 
{
  
    const [open, set] = useState(false)

  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring(
      {
        ref: springRef,
        config: config.stiff,
        from: { size: '20%', background: 'hotpink'},
        to: { size: open ? '100%' : '20%', background: open ? '#FFFFDB' : 'hotpink' }
    })

  const transRef = useRef()
  const transitions = useTransition(open ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1.2)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

  return (
    <>
      
      <Container style={{ ...rest, width: size, height: size }} onClick={() => set(open => !open)}>
        {transitions.map(({ item, key, props }) => (
          <animated.div key={key} className = 'navy pa3' style={{ ...props, background: item.css, border: '0px', borderRadius: '10px', fontSize: '13px' }}>{item.tech}</animated.div>
        ))}
      </Container>
    </>
  );
}

export default TechStack;
