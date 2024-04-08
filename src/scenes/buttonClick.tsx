import {makeScene2D, Rect, Txt, Img} from '@motion-canvas/2d';
import {all, createRef} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const button1 = createRef<Rect>();
  const cursor = createRef<Img>();
  const text = createRef<Txt>();

  view.add(
    <Rect
      x={0}
      y={0}
      width={1920}
      height={1080}
      fill="#1a1a1a"
    />
  );

  view.add(
    <Rect
      ref={button1}
      // try changing these properties:
      x={15}
      width={500}
      height={200}

      radius={10}
      fill="#454545"
    />,
  );

  view.add(
    <Txt
      ref={text}
      x={15}
      y={0}
      text="Charge"
      fontSize={50}
      fontFamily="monospace"
      fill="#ffffff"
    />
  )

  view.add(
    <Img
      ref={cursor}
      x={1015}
      y={595}
      width={150}
      height={150}
      src="public/cursor-alt-svgrepo-com.svg"
    />
  );
  
  yield* all(
    cursor().position.x(50, 1),
    cursor().position.y(50, 1)
  );

  yield* all(
    cursor().scale(0.5, 0.5).to(1, 0.5),
    
    text().scale(0.9, 0.5).to(1, 0.5),
    button1().scale(0.9, 0.5).to(1, 0.5)
  );

  // Transition
  yield* all(
    cursor().position.x(1015, 1),
    cursor().position.y(595, 1),

    text().text("Charging", 1),

    button1().fill("#1a1a1a", 1),
    button1().stroke("#ffffff", 1),
    button1().lineWidth(10, 1),
  )
});
