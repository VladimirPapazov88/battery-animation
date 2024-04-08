import {makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {all, createRef, Direction, slideTransition} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const body = createRef<Rect>();
  const charge = createRef<Rect>();
  const text = createRef<Txt>();
  const tip = createRef<Rect>();

  // Adding a background rectangle
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
      ref={body}
      // try changing these properties:
      x={15}
      width={500}
      height={200}
      radius={10}
      fill="#e13238"
      stroke="#ffffff" // Outline color added
      lineWidth={10} // Outline thickness added
    />,
  );

  view.add(
    <Rect
      // try changing these properties:
      ref={tip}
      x={280}
      width={30}
      height={55}
      fill="#ffffff"
    />,
  );

  view.add(
    <Rect
      ref={charge}
      // try changing these properties:
      x={260}
      width={490}
      height={190}
      radius={10}
      fill="#1a1a1a"
      offset={{ x: 1, y: 0 }} // Pivot point set to the center
    />,
  );

  view.add(
    <Txt
      ref={text}
      x={15}
      y={0}
      text="Charging"
      fontSize={50}
      fontFamily="monospace"
      fill="#ffffff"
    />
  )
  
  yield* all(
    tip().opacity(0, 0).to(1, 0.5),
  )

  yield* all(
    body().fill('#22ff00', 2),
    charge().width(0, 2),

    text().text("Charged", 2),
    text().fill("#000000", 2)
  );
});
